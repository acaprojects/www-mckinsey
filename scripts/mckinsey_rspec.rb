require 'selenium-webdriver'
require "rspec"

describe "Mckiney Staff App Test" do
   

    before(:all) do
        Selenium::WebDriver::Chrome.driver_path="C:/Users/Sravani Kotha/Downloads/chromedriver_win32 (1)/chromedriver.exe"
        @driver = Selenium::WebDriver.for :chrome
        @driver.manage.window.maximize
        @driver.navigate.to "https://mck.aca.im/staff/"
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        #Input email id
        wait.until {@driver.find_element(:name,"email").displayed?}
        @driver.find_element(:name,"email").send_keys("sravani_kotha@external.mckinsey.com")
        #Input password
        wait.until {@driver.find_element(:name,"password").displayed?}
        @driver.find_element(:name,"password").send_keys("aca17838")
        
        #Clicking on submit
        wait.until {@driver.find_element(:css,"#login-form > p:nth-child(5) > input[type=submit]").displayed?}
        @driver.find_element(:css,"#login-form > p:nth-child(5) > input[type=submit]").submit
        puts " Log in to the app"
       
    end

    after(:each) do

        #@driver.navigate.to "https://roombooking-dev.intranet.mckinsey.com/staff/#/home"
        puts "inside after each"
        wait.until {@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").click()
        sleep(4)
        
    end

    after(:all) do 
        @driver.quit
    end

    #it "Load Page" do
     #   puts "**Starting Test**"
      #  expect(@driver.title).to include("Mckinsey")
     #puts "Loaded Staff App:Home"
    #end


    def select_duration(duration)
        #click on duration box
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        #click on duration
        @driver.find_element(:xpath,"//div[@name='duration']").click
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'"+duration+"')]").displayed?}
        
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'"+duration+"')]").click
        sleep(5)
    end

    def select_time
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//label[@for='start-time']//following::i[@class='material-icons ng-star-inserted' and text()='arrow_drop_down']").displayed?}
        @driver.find_element(:xpath,"//label[@for='start-time']//following::i[@class='material-icons ng-star-inserted' and text()='arrow_drop_down']").click
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' 10:30 AM ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' 10:30 AM ']").click

    end
        
        

    def select_London_room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='London Post']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Post']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end
             
        
           
           
    def select_London_Pilot

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Pilot ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='London Pilot']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Pilot']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end
    
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end       
    


    def select_London_Pilot_approved

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Pilot ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='London Pilot']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Pilot']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end
    
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end
           







    def select_DCO_room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' Washington D.C. ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='Washington D.C.']").displayed?
           @driver.find_element(:xpath,"//div[text()='Washington D.C.']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(18)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//div[@class='location' and text()='Washington D.C., Level 10']//following::span[@class='mat-button-wrapper' and text()=' Request ']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//div[@class='location' and text()='Washington D.C., Level 10']//following::span[@class='mat-button-wrapper' and text()=' Request ']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//div[@class='location' and text()='Washington D.C., Level 10']//following::span[@class='mat-button-wrapper' and text()=' Request ']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//div[@class='location' and text()='Washington D.C., Level 10']//following::span[@class='mat-button-wrapper' and text()=' Request ']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
    end


    def select_NYO_room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' New York WTC ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='New York WTC']").displayed?
           @driver.find_element(:xpath,"//div[text()='New York WTC']").click
           sleep(8)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(18)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//div[@class='location' and text()='New York WTC, Level 60']//following::span[@class='mat-button-wrapper' and text()=' Request ']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//div[@class='location' and text()='New York WTC, Level 60']//following::span[@class='mat-button-wrapper' and text()=' Request ']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//div[@class='location' and text()='New York WTC, Level 60']//following::span[@class='mat-button-wrapper' and text()=' Request ']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//div[@class='location' and text()='New York WTC, Level 60']//following::span[@class='mat-button-wrapper' and text()=' Request ']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
    end


    def select_London_room1

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='London Post']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Post']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
         
            sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end       
           

            
           

    def select_London_room_requested 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='London Post']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Post']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
            sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
            
           
       
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
    end

    def select_Sydney_room_requested

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' Sydney ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='Sydney']").displayed?
           @driver.find_element(:xpath,"//div[text()='Sydney']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
         
            sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end       


    def select_Sydney_room_approved

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' Sydney ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='Sydney']").displayed?
           @driver.find_element(:xpath,"//div[text()='Sydney']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
         
            sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
    end       
           

           


   
    
    def search_meeting(title)
        sleep(4)

       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
       scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport[@class='cdk-virtual-scroll-viewport viewport cdk-virtual-scroll-orientation-vertical']")
       i = 50
       loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
       i = i+50
      # puts title
       title=title.to_s
       # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
      begin
      sleep(4)
         if  @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").displayed?
           
            puts "inside if loop for meeting"
            @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").click
            puts "checking Meeting details are loaded"
            wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
            break
            sleep(5)
        
         end
       rescue Selenium::WebDriver::Error::NoSuchElementError
        #    return false
       end
       end
    end

    def search_meeting_approved(title)
        sleep(4)

       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
       scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport[@class='cdk-virtual-scroll-viewport viewport cdk-virtual-scroll-orientation-vertical']")
       i = 50
       loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
       i = i+50
      # puts title
       title=title.to_s
       # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
       begin
         if  @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").displayed?
            wait.until{@driver.find_element(:xpath,"//div[@class='approved display event internal ng-star-inserted']//div[@class='details']//div[@class='title text' and text()='"+title+"']").displayed?}
            puts "inside if loop"
            @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").click
            puts "checking Meeting details are loaded"
            wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
            break
        sleep(5)
            break
         end
        rescue Selenium::WebDriver::Error::NoSuchElementError
           # return false
       end
       end
    end

    def search_meeting_requested(title)
        sleep(4)

       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
       scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport[@class='cdk-virtual-scroll-viewport viewport cdk-virtual-scroll-orientation-vertical']")
       i = 50
       loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
       i = i+50
      # puts title
       title=title.to_s
       # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
       begin
         if  @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").displayed?
            wait.until{@driver.find_element(:xpath,"//div[@class='display event internal ng-star-inserted tentative']//div[@class='details']//div[@class='title text' and text()='"+title+"']").displayed?}
            puts "inside if loop"
            @driver.find_element(:xpath,"//div[@class='title text' and text()='"+title+"']").click
            puts "checking Meeting details are loaded"
            wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
            break
        sleep(5)
    
         end
        rescue Selenium::WebDriver::Error::NoSuchElementError
           # return false
       end
       end
    end


    def add_attendee(firstname,lastname,emailid)
    
       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
       #Add attendees
       wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
       @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
       wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
       @driver.find_element(:xpath,"//input[@name='first-name']").send_keys(firstname)
       wait.until{@driver.find_element(:xpath,"//input[@name='last-name']").displayed?}
       @driver.find_element(:xpath,"//input[@name='last-name']").send_keys(lastname)
       wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
       @driver.find_element(:xpath,"//input[@name='email']").send_keys(emailid)
       wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
       @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
       sleep(3)
    end


    def select_meeting_type(type)

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//mat-select[@name='booking-type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='booking-type']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' "+type+" ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' "+type+" ']").click

    end

    def select_date(number)
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
     sleep(5)
        newdate2 = Date.today+number
        #date2= newdate.strftime("%a %d %b %Y")
        date2 = "\" #{newdate2.day.to_s} \""
        puts date2
        month2 = newdate2.strftime("%b")
        puts month2
        new_month2=month2.to_s
        puts new_month2
        year2 = newdate2.year
        puts year2

        wait.until{@driver.find_element(:xpath,"//a-date-field//div[@class='display']").displayed?}
        @driver.find_element(:xpath,"//a-date-field//div[@class='display']").click
        wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
        sleep(5)
        month_datepicker2 = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker2 = month_datepicker2.to_s.split(" ")

        if (new_month_datepicker2[0].include? new_month2)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date2+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date2+"]").click

        else

            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}

            #@driver.find_element(:xpath,"//div[@class='next icon']").click
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
            puts "inside until loop"
            sleep(5)
            wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
            month_datepicker2 = @driver.find_element(:xpath,"//div[@class='month']").text
            new_month_datepicker2 = month_datepicker2.to_s.split(" ")
            puts  new_month_datepicker2[0]
            if (new_month_datepicker2[0].include? new_month2)
                wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date2+"]").displayed?}
                @driver.find_element(:xpath,"//div[@class='date'and text() = "+date2+"]").click
             break  
             end
        end     
        end
    end


    def select_date_myday(number1)
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted' and text()='event']").displayed?}
        @driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted' and text()='event']").click
        sleep(4)
        newdate = Date.today+number1
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        puts date
        month = newdate.strftime("%b")
        puts month
        new_month=month.to_s
        puts new_month
        year = newdate.year
        puts year
       
        wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")

        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click

        else

            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}

            #@driver.find_element(:xpath,"//div[@class='next icon']").click
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
            puts "inside until loop"
            sleep(5)
            wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
            month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
            new_month_datepicker = month_datepicker.to_s.split(" ")
            puts  new_month_datepicker[0]
            if (new_month_datepicker[0].include? new_month)
                wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                break  
             end
         end     
        end
    end

        

   
    def select_London_catering

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)

        if @driver.find_elements(:xpath,"//div[@class='text' and text()='(LON) London Pilot']").empty?
    
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
            wait.until {@driver.find_element(:xpath, "//div[@class='item ng-star-inserted']//following::div[@class='address' and @title='1 Jermyn St, UK']").displayed?}
            @driver.find_element(:xpath,"//div[@class='item ng-star-inserted']//following::div[@class='address' and @title='1 Jermyn St, UK']").click
            #click outside
            sleep(4)
            wait.until {@driver.find_element(:xpath, "//div[@class='topbar']").displayed?}
            @driver.find_element(:xpath, "//div[@class='topbar']").click
        
            else
            #click on room
            sleep(10)
            room=@driver.find_element(:xpath,"//div[@class='name' and contains(text(),'LDN')]//following::button[contains(text(),'Request')]")
            @driver.execute_script("arguments[0].scrollIntoView(true);",room )
            room.click
         end
            
            sleep(10)
            room=@driver.find_element(:xpath,"//div[@class='name' and contains(text(),'LDN')]//following::button[contains(text(),'Request')]")
            @driver.execute_script("arguments[0].scrollIntoView(true);",room )
            room.click
       
        
        #Clicking next button
        @driver.find_element(:xpath,"//span[text()='Next']").click
        #Clicking on continue on equipment modal
    
        wait.until {@driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("13445")
    
        
        wait.until {@driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
        @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").click
        sleep(5)

        wait.until {@driver.find_element(:xpath, "//div[@class='text' and text()='New order']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='New order']").click
        
        
    
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Breakfast')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Breakfast')]").click
    
        sleep(5)
    
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and contains(text(),'Multi Grain Breakfast')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and contains(text(),'Multi Grain Breakfast')]").click
    
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//i[contains(text(),'add')]").displayed?}
        @driver.find_element(:xpath, "//i[contains(text(),'add')]").click
        sleep(4)

        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Save order']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Save order']").click

        
    
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Continue']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Continue']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Catering notes")
    
        wait.until {@driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("13445")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='catering-modal']//div[@class='content' and text()='Add to booking & continue']").displayed?}
        @driver.find_element(:xpath, "//div[@class='catering-modal']//div[@class='content' and text()='Add to booking & continue']").click
    
       sleep(5)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").click
        sleep(15)

        #Close the module
        wait.until {@driver.find_element(:xpath, "//i[@class='material-icons' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons' and text()='close']").click
        sleep(5)


    end


    def edit_date

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)


        wait.until{@driver.find_element(:xpath,"//div[@class='text' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//div[@class='text' and text()='Edit']").click

        newdate = Date.today+1
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        puts date
        month = newdate.strftime("%b")
        puts month
        new_month=month.to_s
        puts new_month
        year = newdate.year
        puts year
 

        wait.until{@driver.find_element(:xpath,"//custom-date-field[@class='ng-star-inserted']//child::i").displayed?}
        @driver.find_element(:xpath,"//custom-date-field[@class='ng-star-inserted']//child::i").click
        wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")

        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click

        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}

            #@driver.find_element(:xpath,"//div[@class='next icon']").click
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
              puts "inside until loop"
              sleep(5)
              wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
              month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
              new_month_datepicker = month_datepicker.to_s.split(" ")
              puts  new_month_datepicker[0]
              if (new_month_datepicker[0].include? new_month)
                 wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                 @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
             break  
             end
         end     
         end
        #click on duration box

 
         wait.until {@driver.find_element(:xpath, "//span[text()='Next']").displayed?}
         @driver.find_element(:xpath,"//span[text()='Next']").click

         sleep(5) 
         wait.until {@driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("13445")
     
         
         wait.until {@driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
         @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("10")
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").click
     
         sleep(4)
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").click

         sleep(5)
         wait.until {@driver.find_element(:xpath, "//div[@class='catering-modal']//div[@class='content' and text()='Add to booking & continue']").displayed?}
         @driver.find_element(:xpath, "//div[@class='catering-modal']//div[@class='content' and text()='Add to booking & continue']").click

         sleep(5)
         #Click on confirm
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").click
         sleep(8)
         #Click on my day
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").click
         sleep(4)

    end

    def edit_room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        wait.until{@driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").displayed?}
        @driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").click
        sleep(4)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper'and text()=' Request ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper'and text()=' Request ']").click
        sleep(5)
        #wait.until{@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").displayed?}
        #@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").click

        sleep(4)
        
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").click
    
        wait.until {@driver.find_element(:xpath, "//button[@name='next']").displayed?}
         @driver.find_element(:xpath,"//button[@name='next']").click

         sleep(5) 
         wait.until {@driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("13445")
     
         
         wait.until {@driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
         @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("10")
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").click
     
         sleep(4)
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Add to booking & continue']").click



         sleep(5)
         #Click on confirm
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").click
         sleep(8)
         #Click on my day
         wait.until {@driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").displayed?}
         @driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").click
         sleep(4)

    end


        

    it "Check for Booking Button and Click" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(8)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        wait.until{@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").displayed?}

        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        wait.until {@driver.find_element(:xpath, "//div[@class='booking-form']").displayed?}
        #puts "Returning to App:Home"
        #@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home' ]").click()
    end

    it "Check for Spaces Button and Click" do
        
        puts "Checking App:Home has loaded"
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
            
        puts "Clicking Spaces Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Maps')]").click()
        puts "Checking Map has Loaded"
        wait.until {@driver.find_element(:xpath, "//div[@class='map-view']").displayed?}
        puts "Returning to App:Home"
       # @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home' ]").click()
       
       

    end

    it "Check for My Day Button and Click" do
        puts "Checking App:Home has loaded"
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
            
        puts "Clicking My Day Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        puts "Checking People Page has Loaded"
        wait.until {@driver.find_element(:xpath,"//div[@class='title' and contains(text(),'Converge | My Day')]").displayed?}
        sleep(10)
        puts "Returning to App:Home"
       # @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").click()
    end

    it "Make a booking for 1 hour london room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 1 hour London")
        sleep(5)
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room_requested
        search_meeting("Test 1 hour London")
        sleep(4)
    end

    it "Verify booking for London room less than 1hr" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test less than 1 hour London")
        sleep(2)
        select_duration("(15 minutes)")
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Duplicate notes")
         sleep(1)
        @driver.switch_to.default_content()
        sleep(1)
       
       
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room_requested
        search_meeting("Test less than 1 hour London")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Duplicate notes']").displayed?}
        
    end
    
    it "Verify booking can be made for 15minutes " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 15 minutes")
        sleep(2)
        select_duration("(15 minutes)")
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Duplicate notes")
         sleep(1)
        @driver.switch_to.default_content()
        sleep(1)
       
       
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved        
        search_meeting("Test 15 minutes")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Duplicate notes']").displayed?}
        
    end


    it "Verify booking can be made for 10 minutes " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 10 minutes")
        sleep(2)
        select_duration("(10 minutes)")
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Duplicate notes")
         sleep(1)
        @driver.switch_to.default_content()
        sleep(1)
       
       
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved        
        search_meeting("Test 10 minutes")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Duplicate notes']").displayed?}
        
    end


    it "Change date from room's calendar" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Change Date")
       sleep(2)
       select_duration("(15 minutes)")
       sleep(2)
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        @driver.find_element(:xpath," //i[text()='keyboard_arrow_right']").displayed?
        @driver.find_element(:xpath," //i[text()='keyboard_arrow_right']").click
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
           
           
          
           @driver.find_element(:xpath,"//div[text()='London Post']").displayed?
           @driver.find_element(:xpath,"//div[text()='London Post']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
           sleep(5)
         
            sleep(10)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//button[@name='select' and @class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
          
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Change Date")
        sleep(4)
    end






    it "Verify charge code and expected attendee is mandatory" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test mandatory fields for London")
        sleep(2)
       select_duration("(15 minutes)")
       sleep(2)
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test mandatory fields for London")
        sleep(4)
    end


    it "Verify Convergence centre is a requestable room for NYO" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Convergence Centre")
        sleep(2)
       select_duration("(15 minutes)")
       sleep(2)
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' New York WTC ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//div[text()='New York WTC']").displayed?
           @driver.find_element(:xpath,"//div[text()='New York WTC']").click
           sleep(8)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(18)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//div[@class='name' and text()='NYO Convergence Centre']//parent::div//parent::div[@class='space-details ng-star-inserted']//child::div[@class='actions']//child::button[@class='mat-button mat-button-base inverse request']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//div[@class='name' and text()='NYO Convergence Centre']//parent::div//parent::div[@class='space-details ng-star-inserted']//child::div[@class='actions']//child::button[@class='mat-button mat-button-base inverse request']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//div[@class='name' and text()='NYO Convergence Centre']//parent::div//parent::div[@class='space-details ng-star-inserted']//child::div[@class='actions']//child::button[@class='mat-button mat-button-base inverse request']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//div[@class='name' and text()='NYO Convergence Centre']//parent::div//parent::div[@class='space-details ng-star-inserted']//child::div[@class='actions']//child::button[@class='mat-button mat-button-base inverse request']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='request ng-star-inserted' and text()='Requested!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(10)
        #Clicking next button
        
       
        search_meeting_requested("Test Convergence Centre")
        sleep(4)
    end


    it "Verify Meeting cannot be created without subject" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
         #@driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test mandatory fields for London")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//mat-error[text()='Title is required']").displayed?}
    end

    it "Verify meeting without room and 1 attendee" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test no room 1 attendee")
        sleep(5)
        add_attendee("Sravani","Kotha","sk080494@gmail.com")
       
        wait.until{@driver.find_element(:xpath,"//span[text()='Need a meeting space?']").displayed?}
        @driver.find_element(:xpath,"//span[text()='Need a meeting space?']").click
        
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
        wait.until {@driver.find_element(:xpath, "//div[@class='email ng-star-inserted']").displayed?}
        @driver.find_element(:xpath,"//div[@class='email ng-star-inserted']").click
        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath,"//button[@name='save']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click     
        search_meeting("Test no room 1 attendee")
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//a[text()='sk080494@gmail.com']").displayed?}
        
        
        
        
    end

    it "Verify meeting with no room" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test no room")
        sleep(3)
       
        wait.until{@driver.find_element(:xpath,"//span[text()='Need a meeting space?']").displayed?}
        @driver.find_element(:xpath,"//span[text()='Need a meeting space?']").click
        
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
       
        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath,"//button[@name='save']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click     
        search_meeting("Test no room")
        sleep(4)

    end


    it "Verify confirmaiton modal" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test confirmation modal")
        sleep(5)
       
        wait.until{@driver.find_element(:xpath,"//span[text()='Need a meeting space?']").displayed?}
        @driver.find_element(:xpath,"//span[text()='Need a meeting space?']").click
        
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
       
        @driver.find_element(:xpath,"//div[@class='email ng-star-inserted']").click
        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath,"//button[@name='save']").click
        wait.until {@driver.find_element(:xpath, "//div[@class='details']//following::div[@name='title']").displayed?}
        wait.until {@driver.find_element(:xpath, "//div[@class='details']//following::div[@name='when']").displayed?}
        wait.until {@driver.find_element(:xpath, "//label[text()='Recurrence']").displayed?}
        wait.until {@driver.find_element(:xpath, "//label[text()='Duration']").displayed?}
        wait.until {@driver.find_element(:xpath, "//label[contains(text(),'Locations')]").displayed?}
        wait.until {@driver.find_element(:xpath, "//label[text()='Host']").displayed?}
        wait.until {@driver.find_element(:xpath, "//div[@class='field']//label[contains(text(),'Attendees')]").displayed?}
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        sleep(2)
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click     
       # search_meeting("Test confirmation")
        sleep(4)
    end

    it "Verify 1 attendee and London room" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 1 attendee London room")
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
        @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("Sravani")
        wait.until{@driver.find_element(:xpath,"//input[@name='last-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='last-name']").send_keys("Kotha")
        wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
        @driver.find_element(:xpath,"//input[@name='email']").send_keys("sk080494@gmail.com")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
        select_London_room

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test 1 attendee London room")
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//a[text()='sk080494@gmail.com']").displayed?}
        @driver.find_element(:xpath,"//a[text()='sk080494@gmail.com']").click

    end



    it "Verify 10 attendee and London room" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 10 attendee London room")
        sleep(5)
        #attendee 1
        wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
        @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("Sravani")
        wait.until{@driver.find_element(:xpath,"//input[@name='last-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='last-name']").send_keys("Kotha")
        wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
        @driver.find_element(:xpath,"//input[@name='email']").send_keys("sk080494@gmail.com")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        #attendee 2
        wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
        @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("Sra")
        wait.until{@driver.find_element(:xpath,"//input[@name='last-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='last-name']").send_keys("Kotha")
        wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
        @driver.find_element(:xpath,"//input[@name='email']").send_keys("sravani@acaprojects.com")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(5)
        #attendee 3
        wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
        @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("Abc")
        wait.until{@driver.find_element(:xpath,"//input[@name='last-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='last-name']").send_keys("Kotha")
        wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
        @driver.find_element(:xpath,"//input[@name='email']").send_keys("abc@acaprojects.com")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(5)
        #attendee 4
        wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
        @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
        @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("New")
        wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
        @driver.find_element(:xpath,"//input[@name='email']").send_keys("New@acaprojects.com")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(4)
        #attendee 5
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest5")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest5@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(5)
         #attendee 6
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest6")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest6@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(6)
         #attendee 7
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest7")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest7@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(6)
         #attendee 8
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest8")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest8@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(5)
         #attendee 9
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest9")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest9@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click

         sleep(5)
         #attendee 10
         wait.until{@driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").displayed?}
         @driver.find_element(:xpath,"//button[@type='button' and @name='new-contact']").click
         wait.until{@driver.find_element(:xpath,"//input[@name='first-name']").displayed?}
         @driver.find_element(:xpath,"//input[@name='first-name']").send_keys("guest10")
         wait.until{@driver.find_element(:xpath,"//input[@name='email']").displayed?}
         @driver.find_element(:xpath,"//input[@name='email']").send_keys("guest10@acaprojects.com")
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click



        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
        select_London_room

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test 10 attendee London room")
       
    end


    it "Verify 5 days 1 attendee" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        #Selecting duration as 15 min
        #wait.until{@driver.find_element(:xpath,"/html/body/app-root/div/app-shell/div/div[2]/app-booking/div/booking-main-flow/div/div/div[1]/div/booking-form/div/div/dynamic-form/div/form/div[2]/dynamic-field/div/div/div[1]/div/div[3]/dynamic-field/div/div/div[1]/custom-field/custom-duration-field/dropdown/div").displayed?}
        #click on duration box
        #select_duration("(30 minutes)")
        #Passing Meeting subject
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 5 days")
        sleep(3)
        select_date(5)
        sleep(5)
        add_attendee("sravani","kotha","sk080494@gmail.com")
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
        select_London_room

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test 5 days")
        sleep(5)
       
    end


    it "Verify 1month 1 attendee" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test 1 month")
        sleep(3)
        select_date(31)
        sleep(5)
        add_attendee("sravani","kotha","sk080494@gmail.com")
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
        select_London_room

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        select_date_myday(31)
        wait.until{@driver.find_element(:xpath,"//div[@class='title text' and text()='Test 1 month']").displayed?}
        @driver.find_element(:xpath,"//div[@class='title text' and text()='Test 1 month']").click
        puts "checking Meeting details are loaded"
        wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
        sleep(5)
       
    end


    it "Test Daily recurrence" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Daily recurrence")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+5
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Daily recurrence")
        sleep(5)
       
    end   

    it "Delete series daily recurrence" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(4)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Daily recurrence")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Delete Series')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Delete Series')]").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Ok')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Ok')]").click

        wait.until {@driver.find_element(:xpath, "//span[text()='Successfully deleted series.']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Successfully deleted series.']").click
        search_meeting("Test Daily recurrence")
        sleep(3)

    end


       
        

        


    
    
    it "Test Weekly recurrence" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Weekly recurrence")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+14
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         #click on room
          sleep(30)
          scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
          i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Weekly recurrence")
        sleep(5)
       
    end   


    it "Test Delete occurrence of a meeting" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(4)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Weekly recurrence")
        sleep(5)
        wait.until {@driver.find_element(:xpath, " //div[@class='text' and text()='Delete ']").displayed?}
        @driver.find_element(:xpath, " //div[@class='text' and text()='Delete ']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Ok')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Ok')]").click

        wait.until {@driver.find_element(:xpath, "//span[text()='Successfully deleted meeting.']").displayed?}
        #@driver.find_element(:xpath, "//span[text()='Successfully deleted meeting.']").click


    end

       
    
    it "Test Monthly recurrence" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(8)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        select_date(1)
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Monthly recurrence")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Monthly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Monthly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+31
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         #click on room
          sleep(30)
          scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
          i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Monthly recurrence")
        sleep(5)
       
    end   
    


    it "Test Biweekly recurrence" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(8)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Biweekly recurrence")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+25
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         #click on room
          sleep(30)
          scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
          i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Biweekly recurrence")
        sleep(5)
       
    end   
    

    it "Test Daily recurrence 2 rooms" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Daily recurrence 2 rooms")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+5
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        wait.until {@driver.find_element(:xpath, "//div[@class='content']").displayed?}
        @driver.find_element(:xpath,"//div[@class='content']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, " //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").displayed?}
        @driver.find_element(:xpath," //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").click
        
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click
       
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        
        wait.until {@driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").click
        it.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("23445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("6")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Daily recurrence 2 rooms")
        sleep(5)
       
    end   



    it "Test Weekly recurrence 2 rooms" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Weekly recurrence 2 rooms")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+8
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        wait.until {@driver.find_element(:xpath, "//div[@class='content']").displayed?}
        @driver.find_element(:xpath,"//div[@class='content']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, " //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").displayed?}
        @driver.find_element(:xpath," //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").click
        
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click
       
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        
        wait.until {@driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").click
        it.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("23445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("6")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Weekly recurrence 2 rooms")
        sleep(5)
       
    end   

    it "Test Biweekly recurrence 2 rooms" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Biweekly recurrence 2 rooms")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+20
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        wait.until {@driver.find_element(:xpath, "//div[@class='content']").displayed?}
        @driver.find_element(:xpath,"//div[@class='content']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, " //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").displayed?}
        @driver.find_element(:xpath," //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").click
        
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click
       
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        
        wait.until {@driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").click
        it.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("23445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("6")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Biweekly recurrence 2 rooms")
        sleep(5)
       
    end   


    it "Test Monthly recurrence 2 rooms" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Monthly recurrence 2 rooms")
        sleep(3)
       
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+60
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        wait.until {@driver.find_element(:xpath, "//div[@class='content']").displayed?}
        @driver.find_element(:xpath,"//div[@class='content']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, " //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").displayed?}
        @driver.find_element(:xpath," //div[@class='block available']//following::span[@class='mat-button-wrapper' and text()=' Select '][2]").click
        
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click
       
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        
        wait.until {@driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-tab-labels']//following::div[2]//span").click
        it.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("23445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("6")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Monthly recurrence 2 rooms")
        sleep(5)
       
    end   

    
    it "Test Daily recurrence 1 month" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Daily recurrence 1 month")
        sleep(3)
        select_date(31)
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Daily ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+3
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        select_date(31)
        search_meeting("Test Daily recurrence 1 month")
        sleep(5)
       
    end  
   

    it "Test Weekly recurrence 1 month" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Weekly recurrence 1 month")
        sleep(3)
        select_date(31)
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Weekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+46
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        select_date(31)
        search_meeting("Test Weekly recurrence 1 month")
        sleep(5)
       
    end  


    it "Test Monthly recurrence 1 month" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Monthly recurrence 1 month")
        sleep(3)
        select_date(31)
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #wait.until{@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").displayed?}
        #@driver.find_element(:xpath," //div[@class='mat-select-arrow-wrapper ng-tns-c108-59']").click
       
        #click on Daily
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Monthly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Monthly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+61
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(10)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        select_date_myday(31)
        search_meeting("Test Monthly recurrence 1 month")
        sleep(5)
       
    end  


    it "Test Biweekly recurrence 1 month" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 20)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking Booking Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        puts "is displayed"
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Biweekly recurrence 1 month")
        sleep(3)
        select_date(31)
        #click on recurrence option
        wait.until{@driver.find_element(:xpath,"//div[text()='No recurrence']").displayed?}
        @driver.find_element(:xpath,"//div[text()='No recurrence']").click
        sleep(4)
    
        #click on drop down 
        wait.until{@driver.find_element(:xpath,"//span[text()='None']").displayed?}
        @driver.find_element(:xpath,"//span[text()='None']").click
       
        #click on Biweekly
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and text()=' Biweekly ']").click
        
        #Click on select end date
        wait.until{@driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").displayed?}
        @driver.find_element(:xpath,"//label[@for='end']//following::div[@class='mat-menu-trigger date-field']").click
        
        newdate = Date.today+62
        #date2= newdate.strftime("%a %d %b %Y")
        date = "\" #{newdate.day.to_s} \""
        month = newdate.strftime("%b")
        new_month=month.to_s
        year = newdate.year
    
        sleep(5)
        month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
        new_month_datepicker = month_datepicker.to_s.split(" ")
    
        if (new_month_datepicker[0].include? new_month)then 
            puts "inside if loop"
            wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
            @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
    
        else
            wait.until{@driver.find_element(:xpath,"//div[@class='next icon']").displayed?}
            loop do  @driver.find_element(:xpath,"//div[@class='next icon']").click
                puts "inside until loop"
                sleep(5)
                wait.until{@driver.find_element(:xpath,"//div[@class='month']").displayed?}
                month_datepicker = @driver.find_element(:xpath,"//div[@class='month']").text
                new_month_datepicker = month_datepicker.to_s.split(" ")
                puts  new_month_datepicker[0]
                if (new_month_datepicker[0].include? new_month)
                    wait.until{@driver.find_element(:xpath,"//div[@class='date' and text() = "+date+"]").displayed?}
                    @driver.find_element(:xpath,"//div[@class='date'and text() = "+date+"]").click
                    break  
                 end
             end     
        end
    
        #click on ok button 
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to Booking']").click
        sleep(3)
        #click on save button
        #wait.until{@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").displayed?}
        #@driver.find_element(:xpath,"//div[@class='content' and contains(text(),'Save')]").click
        #sleep(3)
        #Passing Meeting subject
    
        
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[text()=' Next ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Next ']").click
        sleep(5)
        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        if @driver.find_elements(:xpath,"//mat-chip[@role='option' and text()=' London Post ']").empty?
            sleep(5)
            #click on drop down
            wait.until {@driver.find_element(:xpath, "//i[contains(text(),'keyboard_arrow_down')]").displayed?}
            @driver.find_element(:xpath,"//i[contains(text(),'keyboard_arrow_down')]").click
            sleep(8)
          
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").displayed?
           @driver.find_element(:xpath,"//label[@for='mat-checkbox-22-input']").click
           sleep(5)
          #s //cdk-virtual-scroll-viewport
          @driver.execute_script("document.querySelector('.location-list .inner').click()")
          sleep(4)
         
          

             #click on room
             sleep(30)
             scroll = @driver.find_element(:xpath,"//cdk-virtual-scroll-viewport")
             i = 10
          loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
          i = i+10
          # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
          begin
            if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
               puts "inside if loop"
               @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
               puts "checking Meeting details are loaded"
             
           sleep(5)
               break
            end
           rescue Selenium::WebDriver::Error::NoSuchElementError
           end
           end


        
        else
            #click on room
            sleep(5)
            i = 10
         loop do @driver.execute_script("arguments[0].scrollTop = #{i} ; ",scroll)
         i = i+10
         # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
         begin
           if  @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").displayed?
              puts "inside if loop"
              @driver.find_element(:xpath,"//span[text()='all']//following::button[@name='select' and @class='mat-button mat-button-base inverse']").click
              puts "checking Meeting details are loaded"
            
          sleep(5)
              break
           end
          rescue Selenium::WebDriver::Error::NoSuchElementError
         end
         end
        end
       
        
        #select_London_room
        

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Add to Booking ']").click

        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        select_date_myday(31)
        sleep(5)
        @driver.find_element(:xpath,"//div[@class='title text' and text()='Test Biweekly recurrence 1 month']").displayed?
        @driver.find_element(:xpath,"//div[@class='title text' and text()='Test Biweekly recurrence 1 month']").click
        puts "checking Meeting details are loaded"
        wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
        sleep(5)
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").click()
        select_date_myday(61)
        sleep(5)
        @driver.find_element(:xpath,"//div[@class='title text' and text()='Test Biweekly recurrence 1 month']").displayed?
        @driver.find_element(:xpath,"//div[@class='title text' and text()='Test Biweekly recurrence 1 month']").click
        wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
        sleep(3)
       
    end 


    it "Verify adhoc booking of auto approved room" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[text()='Maps']").click()

        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text']//div[text()='London Post']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='London Post']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//*[@id='level_10']").displayed?}

        

    
        wait.until {@driver.find_element(:xpath, "//*[@id='area-10.03-status']").displayed?}
        @driver.find_element(:xpath, "//*[@id='area-10.03-status']").click

        wait.until {@driver.find_element(:xpath, "//span[text()=' Yes ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Yes ']").click

        wait.until {@driver.find_element(:xpath, "//span[text()=' Book ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Book ']").click

       sleep(3)

    end




    it "All day booking London room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test all day London")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room_requested
        search_meeting("Test all day London")
        sleep(4)
    end
    
    it "All day booking DC room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test all day DC")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_DCO_room
        search_meeting("Test all day DC")
        sleep(4)
    end


    it "All day booking NYO room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test all day NYO")
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_NYO_room
        search_meeting("Test all day NYO")
        sleep(4)
    end


    it "All day booking 2 months" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test all day 2 months")
        sleep(5)
        select_date(61)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room_requested
        search_meeting("Test all day 2 months")
        sleep(4)
    end


    it "All day booking with catering London room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test all day catering")
        sleep(5)
        select_date(1)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='has_catering']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='has_catering']").click
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").send_keys("Catering notes")
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-name='code']").displayed?}
        @driver.find_element(:xpath, "//input[@ng-reflect-name='code']").send_keys("24234")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test all day catering")
        catering_notes=@driver.find_element(:xpath, "//label[text()='Requirements:']//following::div[@class='value'][1]")
        catering_notes.contains("Catering notes")
        
        catering_code=@driver.find_element(:xpath, "//div[@class='catering-details ng-star-inserted']//label[text()='Charge Code:']//following::div[@class='value'][1]")
        catering_code.contains("24234")
        
        sleep(4)
    end


    it "Create catering order for multiple rooms" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test catering multiroom")
        select_date(1)
        select_time
        sleep(5)   
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='has_catering']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='has_catering']").click
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("3445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").click
        sleep(3)

        #room 2 catering order 
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click
        sleep(7)
        location = @driver.find_element(:xpath,"//mat-select[@role='listbox']")
        @driver.find_element(:xpath,"//mat-select[@role='listbox']").click
        #i = 100
        #@driver.execute_script("arguments[0].scrollTop = #{i} ; ",location)
        #@driver.execute_script("document.querySelector('//div[@class='mat-form-field-infix ng-tns-c82-48']').click()")
        #sleep(4)
        #wait.until {@driver.find_element(:xpath, "//div[@class='mat-form-field-infix ng-tns-c82-48']").displayed?}
        #@driver.find_element(:xpath, "//div[@class='mat-form-field-infix ng-tns-c82-48']").click
        wait.until {@driver.find_element(:xpath, "//div[@id='cdk-overlay-1']//following::span[@class='mat-option-text'][2]").displayed?}
        @driver.find_element(:xpath, "//div[@id='cdk-overlay-1']//following::span[@class='mat-option-text'][2]").click
        
       
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[text()='Drinks and Nibbles']//following::i[text()='add'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Drinks and Nibbles']//following::i[text()='add'][1]").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").send_keys("Catering notes")
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-name='code']").displayed?}
        @driver.find_element(:xpath, "//input[@ng-reflect-name='code']").send_keys("24234")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test catering multiroom")
        catering_notes=@driver.find_element(:xpath, "//label[text()='Requirements:']//following::div[@class='value'][1]")
        catering_notes.contains("Catering notes")
        
        catering_code=@driver.find_element(:xpath, "//div[@class='catering-details ng-star-inserted']//label[text()='Charge Code:']//following::div[@class='value'][1]")
        catering_code.contains("24234")
        
        sleep(4)

    end
    

    it "Create multiple room booking with 1 requestable and other approved" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test multiroom request and approved")
        select_date(1)
        select_time
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room1
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("3445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test multiroom request and approved")
        
        sleep(4)

    end


    it "Create multiple room booking all requestable" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test multiroom requestable")
        select_date(1)
        select_time
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_Sydney_room_requested
        select_Sydney_room_requested

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("3445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test multiroom requestable")
        
        sleep(4)

    end

    it "Meeting with booking type client" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        #Clicking Booking Button"
        sleep(3)
        wait.until{@driver.find_element(:xpath,"//div[@class='text' and contains(text(),'Book')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Client")
        sleep(3)
        select_meeting_type("Client")
    
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8)
        select_NYO_room
        search_meeting("Test Client")
        sleep(5)
    end

    it "Meeting with booking type External" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        #Clicking Booking Button"
        sleep(3)
        wait.until{@driver.find_element(:xpath,"//div[@class='text' and contains(text(),'Book')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test External")
        sleep(3)
        select_meeting_type("External")
    
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8)
        select_NYO_room
        search_meeting("Test External")
        sleep(5)
    end
    
    it "Meeting with booking type Setup" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        #Clicking Booking Button"
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//div[@class='text' and contains(text(),'Book')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Setup")
        sleep(3)
        select_meeting_type("Setup")
    
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8)
        select_NYO_room
        search_meeting("Test Setup")
        sleep(5)
    end

    it "Meeting with booking type Training" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        #Clicking Booking Button"
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//div[@class='text' and contains(text(),'Book')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Training")
        sleep(3)
        select_meeting_type("Training")
    
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8)
        select_NYO_room
        search_meeting("Test Training")
        sleep(5)
    end


    it "Meeting with booking type Interview" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        #Clicking Booking Button"
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//div[@class='text' and contains(text(),'Book')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Interview")
        sleep(3)
        select_meeting_type("Interview")
    
        #Click on next button
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8)
        select_DCO_room
        search_meeting("Test Interview")
        sleep(5)
    end



    it "Verify booking for London room less than 1hr" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test description notes")
        sleep(5)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        search_meeting("Test description notes")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        
    end


    it "test edit location" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit location")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit location")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        edit_room
        search_meeting("Test edit location")
    end


    it "test edit location approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit location approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit location approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        edit_room
        search_meeting("Test edit location approved")
    end


    it "test edit time approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit time approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit time approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        select_time
        wait.until {@driver.find_element(:xpath, "//button[@name='next']']").displayed?}
        @driver.find_element(:xpath, "//button[@name='next']").click

        wait.until {@driver.find_element(:xpath, " //button[@name='save']").displayed?}
        @driver.find_element(:xpath, " //button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
       
        search_meeting_approved("Test edit time approved")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-model='10:30']").displayed?}
       

        
    end


    it "test edit subject approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit subject approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit subject approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").clear
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edited subject")

        wait.until {@driver.find_element(:xpath, "//button[@name='next']']").displayed?}
        @driver.find_element(:xpath, "//button[@name='next']").click

        wait.until {@driver.find_element(:xpath, " //button[@name='save']").displayed?}
        @driver.find_element(:xpath, " //button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
       
        search_meeting_approved("Test edited subject")
       
        
    end


    it "test edit type approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit type approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit type approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        select_meeting_type("Client")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test edit type approved")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click       
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[text()='Client']").displayed?}
        
    end


    it "test edit notes approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit notes approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit notes approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        sleep(5)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").clear
       @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("description edited")
        sleep(1)
       @driver.switch_to.default_content()
       
        wait.until {@driver.find_element(:xpath, "//button[@name=' Next ']").displayed?}
        @driver.find_element(:xpath, "//button[@name=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test edit notes approved")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        sleep(5)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        edited_notes=@driver.find_element(:xpath,"//body[@id='tinymce']").text
       .send_keys("description edited")
       if(edited_notes.include?("description edited"))then
        
        puts "edited notes is retained"
      
        sleep(1)
       end
       @driver.switch_to.default_content()
          
    end


    it "test edit room requirement notes approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test RR notes approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test RR notes approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").click
        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").clear
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes edited")
        
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(5)
        sleep(5)
        

        
       edited_RR=@driver.find_element(:xpath,"//label[text()='Requirements (Private Notes):']//following::div[1]").text
 
       if(edited_RR.include?("RR notes edited"))then
        
        puts "edited notes is retained"
      
        sleep(1)
       end
      
          
    end


    it "test edit  expected attendees approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test expected attendees approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting_approved("Test expected attendees approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").click
        wait.until{@driver.find_element(:xpath,"//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//input[@name='head-count']").clear
        @driver.find_element(:xpath,"//input[@name='head-count']").send_keys("15")
        
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(5)

       edited_EA=@driver.find_element(:xpath,"//label[text()='Expected Attendees:']//following::div[@class='value'][1]").text
 
       if(edited_EA.include?("15"))then
        
        puts "edited notes is retained"
      
        sleep(1)
       end
      
          
    end

    it "test edit  charge code approved room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test charge code approved")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test charge code approved")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").click
        sleep(5)
        wait.until{@driver.find_element(:xpath,"//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//input[@name='charge-code']").clear
        @driver.find_element(:xpath,"//input[@name='charge-code']").send_keys("2346")
        
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        sleep(5)
        wait.until {@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='home']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='My Day']").click
        sleep(8)
        search_meeting_approved("Test charge code approved")
        
       edited_CC=@driver.find_element(:xpath,"//div[@class='space-details ng-star-inserted']//label[text()='Charge Code:']//following::div[1]").text
 
       if(edited_CC.include?("2346"))then
        
        puts "edited notes is retained"
      
        sleep(1)
       end
      
          
    end


    it "Verify edit attendee auto approved room" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit attendee")
        sleep(5)
        select_date(1)
         # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
         wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
         @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
         sleep(3)
         select_London_room
         wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
         @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
 
         wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
         @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
        
         wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
         
         #Enter Expected attendees

         wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
         @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
         sleep(4)
         #Click on confirm
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(10)
 
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
         sleep(5)
         search_meeting("Test edit attendee")
         sleep(4)
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

         add_attendee("new","guest","newguest@gmail.com")


         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test edit attendee")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click       
        sleep(5)

        wait.until{@driver.find_element(:xpath,"//a[text()='newguest@place.tech']").displayed?}
      
    end

    



    it "Verify edit option is not avaialble for inprogress" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test charge code approved")
        sleep(4)
        if @driver.find_elements(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']")==0
            
            puts "Edit option is not available"
        else
            puts "Edit option is available"
        end
        
    end

    it "test edit  date of tentative room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit date tentative")
        sleep(5)
        select_date(1)
       
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit date tentative")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        select_date(1)
        wait.until {@driver.find_element(:xpath, "//button[@name='next']']").displayed?}
        @driver.find_element(:xpath, "//button[@name='next']").click

        wait.until {@driver.find_element(:xpath, " //button[@name='save']").displayed?}
        @driver.find_element(:xpath, " //button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(2)
        select_date_myday(2)
        search_meeting_requested("Test edit date tentative")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        sleep(2)
        
          
    end


    it "test edit  time of tentative room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit time tentative")
        sleep(5)
        select_date(1)
       
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit time tentative")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        select_time
        wait.until {@driver.find_element(:xpath, "//button[@name='next']']").displayed?}
        @driver.find_element(:xpath, "//button[@name='next']").click

        wait.until {@driver.find_element(:xpath, " //button[@name='save']").displayed?}
        @driver.find_element(:xpath, " //button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
       
        search_meeting_requested("Test edit date tentative")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        sleep(2)
        
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-model='10:30']").displayed?}
          
    end



    it "test edit  location of tentative room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit location tentative")
        sleep(5)
        select_date(1)
       
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(5)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit location tentative")
       
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        edit_room
        search_meeting_requested("Test edit location tentative")
       
    
    end


    it "test edit subject tentative room" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit subject tentative")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test edit subject tentative")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").clear
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edited subject")

        wait.until {@driver.find_element(:xpath, "//button[@name='next']']").displayed?}
        @driver.find_element(:xpath, "//button[@name='next']").click

        wait.until {@driver.find_element(:xpath, " //button[@name='save']").displayed?}
        @driver.find_element(:xpath, " //button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
       
        search_meeting_tentative("Test edited subject")
       
        
    end

    it "Verify edit attendee tentative room" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test edit attendee tentative")
        sleep(5)
        select_date(1)
         # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
         wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
         @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
         sleep(3)
         select_London_Pilot
         wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
         @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
 
         wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
         @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes")
        
         wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
         
         #Enter Expected attendees

         wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
         @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
         sleep(4)
         #Click on confirm
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Save']").click
         sleep(10)
 
         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
         sleep(5)
         search_meeting("Test edit attendee tentative")
         sleep(4)
         wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
         @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

         add_attendee("new","guest","newguest@gmail.com")


         wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_tentative("Test edit attendee tentative")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click       
        sleep(5)

        wait.until{@driver.find_element(:xpath,"//a[text()='newguest@place.tech']").displayed?}
      
    end

    




    it "Verify edit and remove location" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test remove location")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
        sleep(1)
        @driver.switch_to.default_content()
           
        select_duration("(15 minutes)")
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
           
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
            
        #Enter Expected attendees
           
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
    
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test remove location")
        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        wait.until{@driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").displayed?}
        @driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").click
        sleep(4)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
       
        #wait.until{@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").displayed?}
        #@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").click

        sleep(4)
        
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").click
    
        wait.until {@driver.find_element(:xpath, "//button[@name='next']").displayed?}
        @driver.find_element(:xpath,"//button[@name='next']").click

        sleep(4)
    
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").click
        sleep(8)
        #Click on my day
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").click
        sleep(4)

        search_meeting("Test remove location")
    end


    it "Duplicate a multiroom booking" do
    end

    

    it "Verify catering order is deleted from meeting" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test delete catering")
        sleep(5)
        select_date(1)
        select_time
        
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='has_catering']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='has_catering']").click
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").send_keys("Catering notes")
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-name='code']").displayed?}
        @driver.find_element(:xpath, "//input[@ng-reflect-name='code']").send_keys("24234")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test delete catering")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Edit Catering Orders ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Edit Catering Orders ']").click  
        sleep(4) 
        wait.until{@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted' and text()='delete']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='delete']").click  
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(2) 
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test delete catering")
        wait.until {@driver.find_element(:xpath, "//label[text()='Orders(0):']").displayed?}
        
    end

    it "Verify edit recurrence add attendee" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Monthly recurrence")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        add_attendee("guest1","guest","guest1@place.tech")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test Monthly recurrence")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        wait.until{@driver.find_element(:xpath,"//a[text()='guest1@place.tech']").displayed?}
          
        
        
       
 

    end


    it "Verify edit recurrence add change time" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Monthly recurrence")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        select_time
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test Monthly recurrence")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        sleep(4)

        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-model='10:30']").displayed?}
        
          

    end

    it "Verify edit recurrence add change date" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Monthly recurrence")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        select_date(1)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test Monthly recurrence")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click  
        sleep(4)

        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-model='10:30']").displayed?}
        
          

    end



    it "test edit room requirement notes recurrence" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Monthly recurrence")
        sleep(4)

        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").displayed?}
        @driver.find_element(:xpath,"//span[text()=' Edit Room Requirements ']").click
        wait.until{@driver.find_element(:xpath,"//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").clear
        @driver.find_element(:xpath,"//textarea[@name='equipment-notes']").send_keys("RR notes edited")
        
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(5)
        sleep(5)
        
       edited_RR=@driver.find_element(:xpath,"//label[text()='Requirements (Private Notes):']//following::div[1]").text
 
       if(edited_RR.include?("RR notes edited"))then
        
        puts "edited notes is retained"
      
        sleep(1)
       end
      
          
    end


    it "Verify edit recurrence add catering" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Monthly recurrence")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)
       
        search_meeting_approved("Test Monthly recurrence")
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Edit Catering Orders ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Edit Catering Orders ']").click  
        sleep(4) 
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Refreshments']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Tea, Coffee, Biscuits and Water']//following::i[text()='add'][1]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and contains(text(),' Confirm Order')]").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()='Save Order']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper'and text()=' Next ']").click
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@ng-reflect-name='notes']").send_keys("Catering notes")
        wait.until {@driver.find_element(:xpath, "//input[@ng-reflect-name='code']").displayed?}
        @driver.find_element(:xpath, "//input[@ng-reflect-name='code']").send_keys("24234")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add to booking ']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test Monthly recurrence")
        wait.until {@driver.find_element(:xpath, "//label[text()='Orders(2):']").displayed?}
        
        
          

    end


    it "Edit multiroom and delete a room from it" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test multiroom delete")
        select_date(1)
        select_time
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room1
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("3445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test multiroom delete")

        sleep(4)
        #wait.until{@driver.find_element(:xpath,"//div[@name='notes']//following::div[@class='value' and text()='Enter description notes']").displayed?}
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click

        wait.until{@driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").displayed?}
        @driver.find_element(:xpath,"//label[@for='spaces']//following::i[1]").click
        sleep(4)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
       
        #wait.until{@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").displayed?}
        #@driver.find_element(:xpath,"//i[@class='material-icons ng-star-inserted'and text()='list']").click

        sleep(4)
        
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Add to booking']").click
    
        wait.until {@driver.find_element(:xpath, "//button[@name='next']").displayed?}
        @driver.find_element(:xpath,"//button[@name='next']").click

        sleep(4)
    
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()='Confirm']").click
        sleep(8)
        #Click on my day
        wait.until {@driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and contains(text(),'My Day')]").click
        sleep(4)

        search_meeting("Test multiroom delete")
        
        sleep(4)

    end


    it "edit multiroom requestable is not auto approved" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test multiroom requestable")
        sleep(4)
        wait.until{@driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").displayed?}
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()='Edit']").click
        sleep(5)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").clear
       @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("description edited")
        sleep(1)
       @driver.switch_to.default_content()
       
        wait.until {@driver.find_element(:xpath, "//button[@name=' Next ']").displayed?}
        @driver.find_element(:xpath, "//button[@name=' Next ']").click

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Requested!']").click
        
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(4)

        search_meeting_requested("Test multiroom requestable")

    end

    it "Verify delete a meeting in future" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Delete")
        sleep(5)
        select_date(1)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
       
       select_duration("(15 minutes)")
      # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'(15 minutes)')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_Sydney_room_approve
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        search_meeting("Test Delete")
        sleep(4)

        wait.until {@driver.find_element(:xpath, "//i[text()='delete']").displayed?}
        @driver.find_element(:xpath, "//i[text()='delete']").click()
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[text()='Ok']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Ok']").click()
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test Delete")
        sleep(4)

    end


    it "Verify booking with host as other" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test Host")
        sleep(5)
        select_date(1)
        wait.until{@driver.find_element(:xpath,"//mat-select[@name='organiser']").displayed?}
        @driver.find_element(:xpath,"//mat-select[@name='organiser']").click

        wait.until{@driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").click

        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        wait.until {@driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").displayed?}
        @driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").click
        
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox']").click

        wait.until {@driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").click
        
        
        search_meeting("Test Host")
        sleep(4)

    end


    it "Verify delete meeting from others calendar" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test EA attendee")
        sleep(5)
        select_date(1)
        wait.until{@driver.find_element(:xpath,"//mat-select[@name='organiser']").displayed?}
        @driver.find_element(:xpath,"//mat-select[@name='organiser']").click

        wait.until{@driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").click

        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath,"//label[@for='head-count']//following::span[text()='*']").displayed?
        puts "head count is mandatory"
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        wait.until {@driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").displayed?}
        @driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").click
        
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox']").click

        wait.until {@driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").click
        
        
        search_meeting("Test Host")
        sleep(4)

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox']").click

        wait.until {@driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Cameron Reeves ']").click
        
        
        search_meeting("Test Host")
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//i[text()='delete']").displayed?}
        @driver.find_element(:xpath, "//i[text()='delete']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[text()='Successfully deleted meeting.']").displayed?}

    end


    it "Decline a meeting when EA is attendee not host of a meeting" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test EA attendee")
        sleep(5)
        select_date(1)
        wait.until{@driver.find_element(:xpath,"//mat-select[@name='organiser']").displayed?}
        @driver.find_element(:xpath,"//mat-select[@name='organiser']").click

        wait.until{@driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").click

        wait.until {@driver.find_element(:xpath, "//input[@name='user-search']").displayed?}
        @driver.find_element(:xpath, "//input[@name='user-search']").send_keys("sravani_kotha@")
        
        wait.until {@driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='Sravani Kotha']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='Sravani Kotha']").click

       
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_Pilot_approved
        sleep(5)
        #Clicking next button
        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
        #Clicking on continue on equipment modal
        
        # Enter charge code
        
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath,"//label[@for='charge-code']//following::span[@class='ng-star-inserted' and text()='*']").displayed?
        puts"charge code is mandatory"
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click
        sleep(4)
        #Click on confirm
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").displayed?}
        @driver.find_element(:xpath, "//span[@class='ng-star-inserted' and text()='Confirmed!']").click
        wait.until {@driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").displayed?}
        @driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").click
        
        #Close the module
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        search_meeting("Test Host")
        sleep(4)
        wait.until {@driver.find_element(:xpath, "//i[text()='delete']").displayed?}
        @driver.find_element(:xpath, "//i[text()='delete']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[text()='Successfully deleted meeting.']").displayed?}

    end

        

       
        



    it "Verify London Maps" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        @driver.find_element(:xpath, "//div[text()='Maps']").click()

        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text']//div[text()='London Post']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='London Post']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//*[@id='level_10']").displayed?}

    end

    it "Verify clicking on different levels changes levels" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[text()='Maps']").click()

        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text']//div[text()='London Post']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='London Post']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//*[@id='level_10']").displayed?}

        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='level']").click()

        wait.until {@driver.find_element(:xpath, "//span[text()=' Level 7 ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Level 7 ']").click()


        wait.until {@driver.find_element(:xpath, "//div[@id='map-4']").displayed?}

        


    end


   
    it "Verify booking rules" do 

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[text()='Maps']").click()

        wait.until {@driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' and @name='building']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text']//div[text()='London Post']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-option-text']//div[text()='London Post']").click()
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//button[@name='booking-rules']").displayed?}
        @driver.find_element(:xpath, "//button[@name='booking-rules']").click

        wait.until {@driver.find_element(:xpath, "//mat-dialog-content").displayed?}
        @driver.find_element(:xpath, "//mat-dialog-content").click

       slepp(2)
    end


    it "Verify duplicating multiroom booking retains the rooms and codes" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test multiroom duplicate")
        select_date(1)
        select_time
        # @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),' 15 minutes ')]").click()
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(3)
        select_London_room1
        select_London_room

        @driver.find_element(:xpath,"//span[@class='mat-button-wrapper' and text()=' Next ']").click
       
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("13445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click
        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("3445")
        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")

        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click

        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Save']").click
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click
        sleep(5)
        
        #Click on confirm
        search_meeting("Test multiroom duplicate")
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and text()='Duplicate']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Duplicate']").click
        select_date(1)
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click

        wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        CC1=@driver.find_element(:xpath, "//input[@name='charge-code']").text
        
        if(CC1.include?("13445"))then
        
            puts "edited notes is retained"
          
            sleep(1)
        end

        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        HC1=@driver.find_element(:xpath, "//input[@name='head-count']").text
        if(HC1.include?("10"))then
        
            puts "edited notes is retained"
          
            sleep(1)
        end


       
        @driver.find_element(:xpath," //div[@aria-posinset='2']").click

         wait.until {@driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        CC2=@driver.find_element(:xpath, "//input[@name='charge-code']").text

        if(CC2.include?("3445"))then
        
            puts "edited notes is retained"
          
            sleep(1)
        end

        
        #Enter Expected attendees
       
        wait.until {@driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        HC2=@driver.find_element(:xpath, "//input[@name='head-count']").text

        if(HC2.include?("5"))then
        
            puts "edited notes is retained"
          
            sleep(1)
        end


        sleep(4)
    end
 

    it "Verify Duplicate meeting with no room" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        sleep(5)
        #Clicking Booking Button"
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Book')]").click()
        #Passing Meeting subject
        wait.until{@driver.find_element(:xpath,"//input[@formcontrolname='title']").displayed?}
        @driver.find_element(:xpath,"//input[@formcontrolname='title']").send_keys("Test duplicate no room")
        wait.until{@driver.find_element(:xpath,"//span[text()='Need a meeting space?']").displayed?}
        @driver.find_element(:xpath,"//span[text()='Need a meeting space?']").click
        
        wait.until {@driver.find_element(:xpath, "//span[contains(text(),'Next')]").displayed?}
        @driver.find_element(:xpath,"//span[contains(text(),'Next')]").click
        sleep(8) 
       
        @driver.find_element(:xpath,"//div[@class='email ng-star-inserted']").click
        wait.until {@driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath,"//button[@name='save']").click
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='My Day']").click     
        search_meeting("Test no room")
        sleep(4)

    end
        


    it "Verify inprogress meeting can be extended" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test 1 hour London")
        wait.until {@driver.find_element(:xpath, " //div[@class='text' and text()='Extend']").displayed?}
        @driver.find_element(:xpath, " //div[@class='text' and text()='Extend']").click()

    end

     

    it "Verify Meetings in My Day" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(3)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test expect attendees approved")
        sleep(5)
    end

    it "Verify selection date 2 months away on My Day" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        select_date(61)
        

        sleep(5)

    end

    it "Verify meeting details can be edited" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(10)
        wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        sleep(10)
        search_meeting("Test multiroom request and approved")

    end



    
it "Click on feedback link - home page" do
    wait = Selenium::WebDriver::Wait.new(:timeout => 10)
    wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
    sleep(5)
    puts "Clicking on feedback Button"
    
    wait.until {@driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").displayed?}
    @driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").click
    sleep(2)

end

it "Click on feedback link - maps page" do
    wait = Selenium::WebDriver::Wait.new(:timeout => 10)
    sleep(2)
    wait.until {@driver.find_element(:xpath, "//div[@class='text' and text()='Maps']").displayed?}
    @driver.find_element(:xpath, "//div[@class='text' and text()='Maps']").click
    sleep(5)
    puts "Clicking on feedback Button"
    
    wait.until {@driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").displayed?}
    @driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").click
    sleep(2)

end

it "Click on feedback link - My day page" do
    wait = Selenium::WebDriver::Wait.new(:timeout => 10)
    sleep(15)
    wait.until {@driver.find_element(:xpath, "//div[@class='text' and text()='My Day']").displayed?}
    @driver.find_element(:xpath, "//div[@class='text' and text()='My Day']").click
    
    puts "Clicking on feedback Button"
    
    wait.until {@driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").displayed?}
    @driver.find_element(:xpath, "//i[@class='material-icons' and text()='feedback']").click
    sleep(2)

end




    it "Refresh the page" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//div[@class='app']").displayed?}
        puts "Clicking My Day Button"
        sleep(5)
        @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'My Day')]").click()
        
        @driver.navigate.refresh()
        puts " page refreshed"
        sleep(10)
    end

    
end



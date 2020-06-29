 require 'selenium-webdriver'
require "rspec"

describe "Mckiney Staff App Test" do
   

    before(:all) do
        Selenium::WebDriver::Chrome.driver_path="C:/Users/Sravani Kotha/Downloads/chromedriver_win32 (1)/chromedriver.exe"
        @driver = Selenium::WebDriver.for :chrome
        @driver.manage.window.maximize
        @driver.navigate.to "https://mck.aca.im/concierge/"
        puts " Log in to the app"
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        #Input email id
        wait.until {@driver.find_element(:name,"email").displayed?}
        @driver.find_element(:name,"email").send_keys("sravani_kotha@external.mckinsey.com")
        #Input password
        wait.until {@driver.find_element(:name,"password").displayed?}
        @driver.find_element(:name,"password").send_keys("aca17838")
        #Clicking on submit
        wait.until {@driver.find_element(:css,"#login-form > p:nth-child(5) > input[type=submit]").displayed?}
        @driver.find_element(:css,"#login-form > p:nth-child(5) > input[type=submit]").submit
       
     end

    before(:each) do 
       
     end

    after(:all) do 
        #@driver.quit
    end

       # it "Load Page" do
          #  puts "**Starting Test**"
           # expect(@driver.title).to include("Mckinsey")
            #puts "Loaded Staff App:Home"
        #end
        


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

    def select_duration(duration)
        #click on duration box
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        #click on duration
        @driver.find_element(:xpath,"//dropdown[@ng-reflect-placeholder='Duration']//div[@class='item active']//div[@class='text'][1]").click
        sleep(4)
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'"+duration+"')]").displayed?
        puts "inside if loop"
        @driver.find_element(:xpath,"//span[@class='mat-option-text' and contains(text(),'"+duration+"')]").click
        sleep(5)
    end


    def select_date_calendar(number)
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, " //button[@class='mat-menu-trigger calendar mat-icon-button mat-button-base']").displayed?}
        @driver.find_element(:xpath, " //button[@class='mat-menu-trigger calendar mat-icon-button mat-button-base']").click
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

        #wait.until{@driver.find_element(:xpath,"//a-date-field//div[@class='display']").displayed?}
        #@driver.find_element(:xpath,"//a-date-field//div[@class='display']").click
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


       


    def search_room_book
         #click on room
         wait = Selenium::WebDriver::Wait.new(:timeout => 10)
         wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
         @driver.find_element(:xpath, "//button[@type='submit']").click()
         sleep(2)
         wait.until{ @driver.find_element(:xpath, "//button[@name='select']").displayed?}
         @driver.find_element(:xpath, "//button[@name='select']").click()
         sleep(4)
         wait.until{ @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").displayed?}
         @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").click()
         sleep(4)
         wait.until{ @driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("34567")
         wait.until{ @driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
         @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
         wait.until{ @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").displayed?}
         @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").send_keys("Notes for room")
         sleep(3)
         wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
         @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
         sleep(3)
         wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
         @driver.find_element(:xpath, "//span[text()='Save']").click()
         sleep(3)
         wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
         @driver.find_element(:xpath, "//span[text()='Close']").click()
         sleep(5)
         wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
         @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
         sleep(4)
    end

    def book_confirmation

        #click on room
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='select']").displayed?}
        @driver.find_element(:xpath, "//button[@name='select']").click()
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").displayed?}
        @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").click()
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("34567")
        wait.until{ @driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until{ @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").send_keys("Notes for room")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(3)
       
   end

    def search_meeting(title)
     sleep(4)

     wait = Selenium::WebDriver::Wait.new(:timeout => 10)
     scroll = @driver.find_element(:xpath,"//div[@id='day-view-scroll']")
     i = 1000
     loop do @driver.execute_script("arguments[0].scrollLeft = #{i} ; ",scroll)
     #loop do @driver.execute_script("window.scrollBy(#{i},0)")
     # loop do @driver.execute_script("window.scrollBy(2000,0)")
      i = i+500
     puts "inside scroll"
     # puts title
     title=title.to_s
     # @driver.execute_script("var event = document.createEvent('Event'); event.initEvent('scroll', false, true); arguments[0].dispatchEvent(event)",scroll)
     begin
     sleep(4)
     
     
     if  @driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']").displayed? ==false
        el2=@driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el2 )
        puts "inside if loop for meeting"
        if @driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']").displayed? ==true
        #el2=@driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']")
        el2.click
       # @driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']").click
        puts "checking Meeting details are loaded"
        wait.until{@driver.find_element(:xpath,"//div[@class= 'event-details' ]").displayed?}
        break
        end
        sleep(5)
     end
     rescue Selenium::WebDriver::Error::NoSuchElementError
     #    return false
     end
    end
    end


    def select_meeting_type(type)

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until {@driver.find_element(:xpath, "//mat-select[@name='booking-type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='booking-type']").click
        sleep(5)
        wait.until {@driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' "+type+" ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' "+type+" ']").click

    end

    
        
    def search_meeting_sydney(title)
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        #Click meeting title
        sleep(15)
        el2=@driver.find_element(:xpath,"//div[@class='field']//div[@title='"+title+"']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el2 )
        el2.click
        sleep(8)
        
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


    def room_book_catering

         wait = Selenium::WebDriver::Wait.new(:timeout => 10)
         room=@driver.find_element(:xpath,"//button[contains(text(),' Select ')][1]")
         @driver.execute_script("arguments[0].scrollIntoView(true);",room )
         room.click
         #Clicking next button
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
         wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
         @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Room notes")

         wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("45666")

         wait.until{ @driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
         @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("12")

         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

         wait.until {@driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Breakfast')]").displayed?}
         @driver.find_element(:xpath, "//div[@class='text' and contains(text(),'Breakfast')]").click

         sleep(5)

         wait.until {@driver.find_element(:xpath, "//div[@class='name' and contains(text(),'Multi Grain Breakfast')]").displayed?}
         @driver.find_element(:xpath, "//div[@class='name' and contains(text(),'Multi Grain Breakfast')]").click

         sleep(5)
         wait.until {@driver.find_element(:xpath, "//i[contains(text(),'add')]").displayed?}
         @driver.find_element(:xpath, "//i[contains(text(),'add')]").click
 
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
         sleep(5)
         wait.until {@driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
         @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Catering notes")

         wait.until {@driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("13445")
         sleep(5)
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

         sleep(5)
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Create ')][1]").click
    
         sleep(15)

    end

    def edit_room_requirements
         wait = Selenium::WebDriver::Wait.new(:timeout => 10)
         wait.until{ @driver.find_element(:xpath, "//div[@class='footer' and text()='Edit Requirements']").displayed?}
         @driver.find_element(:xpath, "//div[@class='footer' and text()='Edit Requirements']").click

         wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
         @driver.find_element(:xpath, "//input[@name='cost-code']").clear()
         @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("45666")

         wait.until{ @driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
         @driver.find_element(:xpath, "//input[@name='expected-attendees']").clear()
         @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("12")
         

         wait.until{ @driver.find_element(:xpath, "//label[@for='notes']//following::textarea").displayed?}
         @driver.find_element(:xpath, "//label[@for='notes']//following::textarea").clear()
         @driver.find_element(:xpath, "//label[@for='notes']//following::textarea").send_keys("Enter new notes")

         sleep(5)
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
         sleep(4)
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Save ')][1]").click
         sleep(5)
         @driver.find_element(:xpath,"//booking-modal//following::i[@class='material-icons' and text()='close']").click

         

    end


    def delete_meeting
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='more_vert']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='more_vert']").click()
         sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='delete' ]").displayed?}
        @driver.find_element(:xpath, "//button[@name='delete' ]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='accept']").displayed?}
        @driver.find_element(:xpath, "//button[@name='accept']").click()
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//span[text()='Successfully deleted meeting.']").displayed?}


    end
        



    it "Check for Day View and Click" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        # "Clicking Day view"
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").click()
    end

    it "Check for Week View and Click" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        # "Clicking Week view"
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").click()
        sleep(2)
    end

    it "Check for Visitor List and Click" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        # "Clicking Visitor list"
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        sleep(2)
       
    end

    it "Check for Catering page and Click" do
          
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        # "Clicking Visitor list"
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()
        sleep(2)
       
    end

    it "Check for day view selecting tomorrow's date" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        select_date_calendar(1)
        sleep(6)
    end

    it "Check for day view selecting tomorrow's date" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        select_date_calendar(31)
        sleep(6)
    end

    it "Verify filtering of levels" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@role='listbox'and @id='mat-select-1']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox'and @id='mat-select-1']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Post ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Post ']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //span[text()='All Levels']").displayed?}
        

    end
        

    it "Verify Legends options" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //mat-select[@name='legend']").displayed?}
        @driver.find_element(:xpath, " //mat-select[@name='legend']").click()
        @driver.find_element(:xpath, "//div[@class='text' and text()='Internal']//following::div[@style='background-color: rgb(230, 159, 199);']").displayed?
        @driver.find_element(:xpath, "//div[@class='text' and text()='Client']//following::div[@style='background-color: rgb(31, 64, 230);']").displayed?
        @driver.find_element(:xpath, "//div[@class='text' and text()='External']//following::div[@style='background-color: rgb(140, 90, 200);']").displayed?
        @driver.find_element(:xpath, "//div[@class='text' and text()='Setup']//following::div[@style='background-color: rgb(211, 47, 47);']").displayed?
        @driver.find_element(:xpath, "//div[@class='text' and text()='Training']//following::div[@style='background-color: rgb(240, 231, 0);']").displayed?
        @driver.find_element(:xpath, "//div[@class='text' and text()='Interview']//following::div[@style='background-color: rgb(52, 141, 2);']").displayed?
       
    end


    it "Verify meeting with 1 hour" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Sydney']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Sydney']").click()
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Concierge 1hr")
        sleep(2)
        search_room_book
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(10)
        search_meeting("Title: Test Concierge 1hr")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()


    end


    it " Verify setup and breakdown time defaults to 15 when equipment notes is added" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(10)
        search_meeting_sydney("Title: Test Concierge 1hr")
        sleep(2)
       if @driver.find_element(:xpath, "//div[@name='setup' and text()='15 minutes']").count>0
         puts "Setup defaults to 15minutes"
       end

       if @driver.find_element(:xpath, "//div[@name='breakdown' and text()='15 minutes']").count>0
        puts "Breakdown defaults to 15minutes"
      end
       


    end
        



    it "Edit location of a meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Concierge 1hr")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
        

        wait.until{ @driver.find_element(:xpath, "//an-action-field[@name='spaces']").displayed?}
        @driver.find_element(:xpath, "//an-action-field[@name='spaces']").click()

        sleep(3)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Close']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location2=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
        sleep(2)
        if location==location2 then
            puts"Test failed"
        end

        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()


    end

    


    it "Edit description of a meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Concierge 1hr")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
        sleep(2)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        @driver.find_element(:xpath,"//body[@id='tinymce']")
       @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
        sleep(1)
       @driver.switch_to.default_content()
       wait.until{ @driver.find_element(:xpath, "//span[text()=' Continue ']").displayed?}
       @driver.find_element(:xpath, "//span[text()=' Continue ']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Save']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Close']").click()
       sleep(2)
       notes=@driver.find_element(:xpath, "//div[@name='notes' and @class='value html']").text

       if notes.equals("Enter description notes") then

         puts"notes is retained"
       end 

    end

    it "Edit private notes of a meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Concierge 1hr")
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Edit Private Details')]]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Edit Private Details')]").click()
        sleep(2)
       wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
       @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("add new notes")
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Save']").click()
       sleep(2)
       private_notes=@driver.find_element(:xpath, "//meeting-private-details//div[@name='notes' and @class='value']").text
       
       if private_notes=="add new notes"
         puts"notes is retained"
       end 

    end

    it "Edit setup and breakdown times of a meeting" do
       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
       sleep(4)
       wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
       @driver.find_element(:xpath, "//mat-select[@name='level']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
       @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
       search_meeting_sydney("Title: Test Concierge 1hr")
       wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Edit Private Details')]").displayed?}
       @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Edit Private Details')]").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//mat-select[@name='setup']").displayed?}
       @driver.find_element(:xpath, "//mat-select[@name='setup']").click
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()=' 30 minutes ']").displayed?}
       @driver.find_element(:xpath, "//span[text()=' 30 minutes ']").click
       sleep(3)
       wait.until{ @driver.find_element(:xpath, "//mat-select[@name='breakdown']").displayed?}
       @driver.find_element(:xpath, "//mat-select[@name='breakdown']").click
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()=' 30 minutes ']").displayed?}
       @driver.find_element(:xpath, "//span[text()=' 30 minutes ']").click
       
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Save']").click()
       sleep(2)
       setup=@driver.find_element(:xpath, "//div[@name='setup']").text
       breakdown=@driver.find_element(:xpath, "//div[@name='breakdown']").text
       
       if setup==" 30 minutes "
         puts" setup is edited"
       end 
       if breakdown==" 30 minutes "
        puts" breakdown is edited"
      end 

    end




    it "Verify meeting details" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Concierge 1hr")
        sleep(4)
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()

    end


    it "Verify click on contact host from meeting details" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Concierge 1hr")

       # //i[text()='call']

    end
       
       

      
      



    it "Decline a meeting " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Decline")
        sleep(2)
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Decline")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='more_vert']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='more_vert']").click()
         sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='decline' ]").displayed?}
        @driver.find_element(:xpath, "//button[@name='decline' ]").click()
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//header[@class='declined']").displayed?}
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()

    end

    it "Edit location of a decline meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Decline")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
        

        wait.until{ @driver.find_element(:xpath, "//an-action-field[@name='spaces']").displayed?}
        @driver.find_element(:xpath, "//an-action-field[@name='spaces']").click()

        sleep(3)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Close']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location2=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
        sleep(2)
        if location==location2 then
            puts"Test failed"
        end

        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()


    end



    it "Delete a meeting " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(2)
        search_meeting_sydney("Title: Test Decline")
        sleep(2)
        delete_meeting
       
    end





    it "Booking with Type Client" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Client")
        sleep(2)
        select_meeting_type("Client")
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Client")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='client']").displayed?}
        delete_meeting
       # wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        #@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
       
    end

    it "Booking with Type Interview" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Interview")
        sleep(2)
        select_meeting_type("Interview")
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Interview")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='interview']").displayed?}
        delete_meeting
        #wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        #@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
       
    end


    it "Booking with Type External" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test External")
        sleep(2)
        select_meeting_type("External")
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test External")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='external']").displayed?}
        delete_meeting
       # wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        #@driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
       
    end


    it "Booking with Type Setup" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Setup")
        sleep(2)
        select_meeting_type("Setup")
        search_room_book
        sleep(5)
        search_meeting_sydney("Title: Test Setup")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='setup']").displayed?}
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
       

        
    end


    it "Booking with Type Training" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(15)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Training")
        sleep(2)
        select_meeting_type("Training")
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test Training")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='training']").displayed?}
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
    end

    it "Internal meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(30)
        search_meeting_sydney("Title: Test Concierge 1hr")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//header[@class='internal']").displayed?}
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
    end


    it " Setup and breakdown should hide meetings without setup&breakdown" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='mat-slide-toggle-thumb']").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-slide-toggle-thumb']").click()


    end


    it "Select future date" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(13)
        select_date_calendar(1)

    end


    it "Select past date" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(13)
        select_date_calendar(-1)
        sleep(4)

    end

   

    it "Verify booking on behalf of others" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(18)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test other Host")
        sleep(2)
        wait.until{@driver.find_element(:xpath,"//mat-select[@name='organiser']").displayed?}
        @driver.find_element(:xpath,"//mat-select[@name='organiser']").click

        wait.until{@driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").displayed?}
        @driver.find_element(:xpath," //span[text()=' Cameron Reeves ']").click
        sleep(3)
        book_confirmation
        sleep(4)
        if @driver.find_element(:xpath, "//label[text()='Host']//following::div[@class='value' and text()='Cameron Reeves']").displayed?
            puts " Host is set"
        end

        wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Close']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
        @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
        
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        #select_date_calendar(2)
        sleep(5)
        search_meeting_sydney("Title: Test other Host")
        sleep(3)

        if @driver.find_element(:xpath, "//label[text()='Host:']//following::div[@class='value' and text()=' Cameron Reeves ']").displayed?
            puts " Host is Cam"
        end

        if @driver.find_element(:xpath, "//label[text()='Booked By:']//following::div[@class='value' and text()=' Sravani Kotha '] ").displayed?
            puts " Host is Cam"
        end

        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()


    end


    it "Select maps should not be an option" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test other Host")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(2)
        if @driver.find_elements(:xpath, "//button[@name='select map']").count>0
            puts" map option is available"
        end
       
        sleep(4)
    end
    

    it "Booking with external attendee" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(15)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test external attendee")
        sleep(2)
        add_attendee("Cam"," ","cam@place.tech")
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test external attendee")
        sleep(3)
        wait.until {@driver.find_element(:xpath, "//div[@name='attendees' and contains(text(),'Cam')]").displayed?}
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
       
        
    
    end



    it "Filter levels in week view" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").click()
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(2)
    end

    it "Show weekend option in week view" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='mat-slide-toggle-thumb']").displayed?}
        @driver.find_element(:xpath, "//div[@class='mat-slide-toggle-thumb']").click()
        if @driver.find_elements(:xpath, "//div[@class='heading']//following::div[contains(text(),'Sat')]").count>0
            puts " Saturday is visible"
        end

        if @driver.find_elements(:xpath, "//div[@class='heading']//following::div[contains(text(),'Sun')]").count>0
            puts " Sunday is visible"
        end

    end

    it " Verify navigation to past and future dates in week view" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Week View']").click()
        select_date_calendar(7)
        select_date_calendar(1)

    end


    it " Verify external guests" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        sleep(5)
        if @driver.find_elements(:xpath, "//div[@class='name' and text()='Cam ']").count>0
         puts "visitor is visible"
        end
    end

    it " Verify search external guests" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//input[@name='visitor-name']").displayed?}
        @driver.find_element(:xpath, "//input[@name='visitor-name']").send_keys("Cam")
        if @driver.find_elements(:xpath, "//a-visitor[@ng-reflect-search='Cam'] ").count>0
         puts "visitor is visible"
        end
    end
    

    it " Verify check-in external guests" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(13)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//input[@name='visitor-name']").displayed?}
        @driver.find_element(:xpath, "//input[@name='visitor-name']").send_keys("Cam")

        wait.until{ @driver.find_element(:xpath, " //div[@class='name' and text()='Cam ']//following::i[text()='event_available']").displayed?}
        @driver.find_element(:xpath, " //div[@class='name' and text()='Cam ']//following::i[text()='event_available']").click

        
    end

    it "Visitor page: Navigate calendar to past and future" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        select_date_calendar(7)
        select_date_calendar(1)
    end


    it "Verify mail to and call option are present for host" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()
        #clicking on email icon for host
        wait.until{ @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='mail'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='mail'][1]").click()
        #Clicking on contact for host


    end

    it "Verify add new attendee to a meeting " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Visitors']").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='edit'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='edit'][1]").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='add']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Test external attendee']//following::i[text()='add']").click()
        sleep(3)

        wait.until{ @driver.find_element(:xpath, "//div[@class='attendees']//following::input[@name='name'][2]").displayed?}
        @driver.find_element(:xpath, "//div[@class='attendees']//following::input[@name='name'][2]").send_keys("Guest2")

        wait.until{ @driver.find_element(:xpath, "//div[@class='attendees']//following::input[@name='email'][2]").displayed?}
        @driver.find_element(:xpath, "//div[@class='attendees']//following::input[@name='email'][2]").send_keys("guest2@place.tech")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='save']").displayed?}
        @driver.find_element(:xpath, "//button[@name='save']").click
        sleep(3)
        if @driver.find_elements(:xpath, "//div[text()='Guest2 ']").count>0
            puts "visitor is added"
        end

        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()

    end


    it " Verify catering page has two option which are clickable" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()

    end


    it "Add new category" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()

        wait.until{ @driver.find_element(:xpath, "//span[text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//span[text()='New Category']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("New category")

        wait.until{ @driver.find_element(:xpath, "//textarea[@placeholder='Category Description']").displayed?}
        @driver.find_element(:xpath, "//textarea[@placeholder='Category Description']").send_keys("New category description")
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(3)
        if @driver.find_elements(:xpath, "//div[@class='label' and text()='New Category']").count>0
            puts "New category is added"
        end

    end


    it "Add new package to category" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()
        
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add sub-category']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add sub-category']").click()

        wait.until{ @driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='package']").displayed?}
        @driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='package']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("New Package")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()=' Kitchen ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Kitchen ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='unit-price']").displayed?}
        @driver.find_element(:xpath, "//input[@name='unit-price']").clear
        @driver.find_element(:xpath, "//input[@name='unit-price']").send_keys("200")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(2)
        if @driver.find_elements(:xpath, "//div[text()='New Package']").count>0
            puts "New Package is added"
        end

        wait.until{ @driver.find_element(:xpath, " //div[text()='New Package']//following::i[text()='more_vert']").displayed?}
        @driver.find_element(:xpath, " //div[text()='New Package']//following::i[text()='more_vert']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Add Item']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Add Item']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("New Item")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()=' Kitchen ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Kitchen ']").click()
        wait.until{ @driver.find_element(:xpath, "//input[@name='unit-price']").displayed?}
        @driver.find_element(:xpath, "//input[@name='unit-price']").clear
        @driver.find_element(:xpath, "//input[@name='unit-price']").send_keys("200")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
         sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").click()

        if @driver.find_elements(:xpath, " //div[text()='New Item']").count>0
            puts "New Item is added"
        end
       

       

    end


    it "Edit individual item" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='test new']//following::i[text()='more_vert']").displayed?}
        @driver.find_element(:xpath, "//div[text()='test new']//following::i[text()='more_vert']").click()
        wait.until{ @driver.find_element(:xpath, "//div[text()='Edit item']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Edit item']").click()

        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").clear
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("Edit New Item")

        wait.until{ @driver.find_element(:xpath, "//input[@name='unit-price' and text()='200']").displayed?}
        @driver.find_element(:xpath, "//input[@name='unit-price']").clear
        @driver.find_element(:xpath, "//input[@name='unit-price']").send_keys("500")

        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").click()

        if @driver.find_elements(:xpath, " //div[text()='Edit New Item']").count>0
            puts "Item is edited"
        end

    end


    it "Edit Remove an item from package" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::button[@name='show-children'][1]").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='test new']//following::i[text()='more_vert']").displayed?}
        @driver.find_element(:xpath, "//div[text()='test new']//following::i[text()='more_vert']").click()
        wait.until{ @driver.find_element(:xpath, "//div[text()='Delete item']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Delete item']").click()
        wait.until{ @driver.find_element(:xpath, "//span[text()='Ok']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Ok']").click()

        if @driver.find_elements(:xpath, " //div[text()='Edit New Item']").count>0
            puts "Test failed,Item is not deleted"
        end

    end


    it "Add a new sub cateogry" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(15)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()
        sleep(3) 

        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add sub-category']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add sub-category']").click()
        sleep(3)
       
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("New Sub-Category")

        wait.until{ @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").click()

        wait.until{ @driver.find_element(:xpath, "//span[text()=' Kitchen ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Kitchen ']").click()


        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(4)
        if @driver.find_elements(:xpath, "//div[text()='New Sub-Category']").count>0
            puts "New Sub Category is added"
        end

        wait.until{ @driver.find_element(:xpath, " //div[text()='New Sub-Category']//following::i[text()='more_vert']").displayed?}
        @driver.find_element(:xpath, " //div[text()='New Sub-Category']//following::i[text()='more_vert']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Add Item']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Add Item']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("New Sub-Category Item")


        wait.until{ @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@formcontrolname='catering_type']").click()

        wait.until{ @driver.find_element(:xpath, "//span[text()=' Kitchen ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Kitchen ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='unit-price']").displayed?}
        @driver.find_element(:xpath, "//input[@name='unit-price']").clear
        @driver.find_element(:xpath, "//input[@name='unit-price']").send_keys("500")
       
       
        sleep(3)
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-checkbox-label' and text()='Out of Stock']").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-checkbox-label' and text()='Out of Stock']").click()
        sleep(2)
       
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Minimum Quantity']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Minimum Quantity']").clear
        @driver.find_element(:xpath, "//input[@placeholder='Minimum Quantity']").send_keys("2")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Maximum Quantity']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Maximum Quantity']").clear
        @driver.find_element(:xpath, "//input[@placeholder='Maximum Quantity']").send_keys("20")

        sleep(3)

        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Sub-Category']//following::button[@name='show-children'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Sub-Category']//following::button[@name='show-children'][1]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Sub-Category Item']//following::i[text()='more_vert']").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Sub-Category Item']//following::i[text()='more_vert']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Edit item']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Edit item']").click()
        sleep(4)
        min=@driver.find_element(:xpath, "//input[@placeholder='Minimum Quantity']").text

        if @driver.find_elements(:xpath, "//input[@aria-checked='true']//following::span[text()='Out of Stock']").count>0
            puts "Out of stock is set"
        end

        

        if (min=="2") then
            puts min
            puts "minimum quantity is retained"
        end
        sleep(3)
        max=@driver.find_element(:xpath, "//input[@placeholder='Maximum Quantity']").text

        if (max=="20") then
            puts min
            puts "maximum quantity is retained"
        end


       

    end


    it "Edit Package" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::i[text()='more_vert'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::i[text()='more_vert'][1]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Edit Package']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Edit Package']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("Edited Sub-Category Name")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Package']//following::i[text()='more_vert'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Package']//following::i[text()='more_vert'][1]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Edit Package']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Edit Package']").click()

        sleep(2)
        edited_name=@driver.find_element(:xpath, "//input[@placeholder='Category Name']").text
        
        if edited_name=="Edited Sub-Category Name" then
            puts "Package is edited"
        end


    end



    it "edit sub-category" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()
        wait.until{ @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").displayed?}
        @driver.find_element(:xpath, "//div[@class='label' and text()='New Category']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='New Sub-Category']//following::i[text()='more_vert'][1]").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Sub-Category']//following::i[text()='more_vert'][1]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[text()='Edit Sub-Category']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Edit Sub-Category']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("Edited Sub-Category Name")
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
       
        sleep(2)
        if @driver.find_elements(:xpath, "//div[text()='New Sub-Category']").count>0
            puts "Sub-Category edited"
        end


    end



    it "Edit category name and description" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,menu']").click()

        wait.until{ @driver.find_element(:xpath, "//div[text()='New Category']//following::button[@name='edit']").displayed?}
        @driver.find_element(:xpath, "//div[text()='New Category']//following::button[@name='edit']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Category Name']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").clear
        @driver.find_element(:xpath, "//input[@placeholder='Category Name']").send_keys("Edit new category")

        wait.until{ @driver.find_element(:xpath, "//textarea[@placeholder='Category Description']").displayed?}
        @driver.find_element(:xpath, "//textarea[@placeholder='Category Description']").clear
        @driver.find_element(:xpath, "//textarea[@placeholder='Category Description']").send_keys("Edit new category description")
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(3)
        if @driver.find_elements(:xpath, "//div[@class='label' and text()='Edit new Category']").count>0
            puts "New category is added"
        end

    end



    it "Verify booking a meeting with catering" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(15)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Day View']").click()
        sleep(2)

        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()

        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test Catering")
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='has_catering']").displayed?}
        @driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='has_catering']").click()


        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@name='select']").displayed?}
        @driver.find_element(:xpath, "//button[@name='select']").click()
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").displayed?}
        @driver.find_element(:xpath, "//div[@class='footer']//button[@name='next']").click()
        sleep(4)
        wait.until{ @driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("34567")
        wait.until{ @driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
        @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("10")
        wait.until{ @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").send_keys("Notes for room")
        sleep(3)
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



        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
         @driver.find_element(:xpath, "//span[text()='Save']").click()
         sleep(3)
         wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
         @driver.find_element(:xpath, "//span[text()='Close']").click()
         sleep(5)
         wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
         @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
         sleep(4)

    end

    

    it " Verify setup and breakdown time defaults to 15 when catering is added" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(10)
        search_meeting_sydney("Title: Test Catering")
        sleep(2)
       if @driver.find_element(:xpath, "//div[@name='setup' and text()='15 minutes']").count>0
         puts "Setup defaults to 15minutes"
       end

       if @driver.find_element(:xpath, "//div[@name='breakdown' and text()='15 minutes']").count>0
        puts "Breakdown defaults to 15minutes"
      end
      sleep(2)
      wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
      @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
      sleep(4)
       


    end


    it " View going back to day view from catering order" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2 )
        wait.until{ @driver.find_element(:xpath, " //i[text()='visibility']").displayed?}
        @driver.find_element(:xpath, " //i[text()='visibility']").click()
        
        wait.until{ @driver.find_element(:xpath, "//a[@class='footer mat-button mat-button-base']").displayed?}
        @driver.find_element(:xpath, "//a[@class='footer mat-button mat-button-base']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//a-meeting-details-modal").displayed?}
        @driver.find_element(:xpath, "//a-meeting-details-modal").click()

        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()


    end

    it " View going back to day view from catering order" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[text()='visibility']").displayed?}
        @driver.find_element(:xpath, " //i[text()='visibility']").click()
        sleep(2)

        wait.until{ @driver.find_element(:xpath, "//button[@class='footer mat-button mat-button-base']").displayed?}
        @driver.find_element(:xpath, "//button[@class='footer mat-button mat-button-base']").click()



    end


    it "Add private notes to a meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[text()='visibility']").displayed?}
        @driver.find_element(:xpath, " //i[text()='visibility']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Type to add notes']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Type to add notes']").send_keys("notes to concierge")
        wait.until{ @driver.find_element(:xpath, "//i[text()='send']").displayed?}
        @driver.find_element(:xpath, "//i[text()='send']").click
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//i[text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[text()='close']").click
        wait.until{ @driver.find_element(:xpath, " //i[text()='visibility']").displayed?}
        @driver.find_element(:xpath, " //i[text()='visibility']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='notes to concierge']").displayed?}
    
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//i[text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[text()='close']").click

    end


    it "Catering Notes should be available on the order" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, " //i[text()='visibility']").displayed?}
        @driver.find_element(:xpath, " //i[text()='visibility']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Catering notes']").displayed?}

        wait.until{ @driver.find_element(:xpath, "//i[text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[text()='close']").click

    end

    it " Verify status of catering order is accepted" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
      
        wait.until{ @driver.find_element(:xpath, "//div[text()='Accepted']").displayed?}
    end



    it "Verify status change from Accepted to Preparing" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
      
        wait.until{ @driver.find_element(:xpath, "//div[text()='Accepted']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Accepted']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='preparing']").displayed?}
        @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='preparing']").click()
        
        if  @driver.find_element(:xpath, "//div[text()='Preparing']").count>0
            puts "Status changed to Preparing"
         end

    end


    it "Verify status change from Preparing to Ready" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
        
        wait.until{ @driver.find_element(:xpath, "//div[text()='Preparing']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Preparing']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='ready']").displayed?}
        @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='ready']").click()
        sleep(3)
        
        if  @driver.find_element(:xpath, "//div[text()='Ready']").count>0
            puts "Status changed to Preparing"
         end

    end

    it "Verify status change from Ready to Delivered" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)

        wait.until{ @driver.find_element(:xpath, "//div[text()='Ready']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Ready']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='delivered']").displayed?}
        @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='delivered']").click()
        sleep(3)
        
        if  @driver.find_element(:xpath, "//div[text()='Delivered']").count>0
            puts "Status changed to Preparing"
         end

    end


    it "Verify status change from Delivered to Cancelled" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)

        wait.until{ @driver.find_element(:xpath, "//div[text()='Delivered']").displayed?}
        @driver.find_element(:xpath, "//div[text()='Delivered']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='cancelled']").displayed?}
        @driver.find_element(:xpath, "//mat-option[@ng-reflect-value='cancelled']").click()
        sleep(3)
        
        if  @driver.find_element(:xpath, "//div[text()='Cancelled']").count>0
            puts "Status changed to Preparing"
         end

    end


        


        

    it "Verify filter option for Kitchen and Pantry" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering']").click()

        wait.until{ @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").displayed?}
        @driver.find_element(:xpath, "//a[@ng-reflect-router-link='/catering,orders']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='All Orders']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='All Orders']").click()

        wait.until{ @driver.find_element(:xpath, "//span[text()='Pantry Only' ]").displayed?}
        @driver.find_element(:xpath, "//span[text()='Pantry Only' ]").click()

        if  @driver.find_element(:xpath, " //span[text()='(K)']").count>0
           puts "Kitchen items not filtered"
        end

        wait.until{ @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='Pantry Only']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='Pantry Only']").click()

        wait.until{ @driver.find_element(:xpath, "//span[text()='Kitchen Only' ]").displayed?}
        @driver.find_element(:xpath, "//span[text()='Kitchen Only' ]").click()

        if  @driver.find_element(:xpath, " //span[text()='(P)']").count>0
            puts "Kitchen items not filtered"
        end

        wait.until{ @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='Kitchen Only']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@role='listbox' ]//span[text()='Kitchen Only']").click()

    end


    it "Create all day meeting in concierge" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Sydney']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Sydney']").click()
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test All day")
        sleep(2)
        wait.until {@driver.find_element(:xpath, "//mat-checkbox[@ng-reflect-name='all_day']").displayed?}
        @driver.find_element(:xpath,"//mat-checkbox[@ng-reflect-name='all_day']").click
        
        
        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test All day")
        sleep(3)
    
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
    

    end


   it "Verify Edit meeting details of all day booking" do
       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test All day")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
        sleep(2)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        @driver.find_element(:xpath,"//body[@id='tinymce']")
       @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
        sleep(1)
       @driver.switch_to.default_content()
       wait.until{ @driver.find_element(:xpath, "//span[text()=' Continue ']").displayed?}
       @driver.find_element(:xpath, "//span[text()=' Continue ']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Save']").click()
       sleep(2)
       wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
       @driver.find_element(:xpath, "//span[text()='Close']").click()
       sleep(2)
       notes=@driver.find_element(:xpath, "//div[@name='notes' and @class='value html']").text

       if notes.equals("Enter description notes") then

         puts"notes is retained"
       end 

    end


    it "Verify Edit Room Requirements of all day booking" do
       wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test All day")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Requirements')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Requirements')]").click()
        sleep(2)

       wait.until{ @driver.find_element(:xpath, "//input[@name='charge-code']").displayed?}
       @driver.find_element(:xpath, "//input[@name='charge-code']").clear
       @driver.find_element(:xpath, "//input[@name='charge-code']").send_keys("56621")
       wait.until{ @driver.find_element(:xpath, "//input[@name='head-count']").displayed?}
       @driver.find_element(:xpath, "//input[@name='head-count']").clear
       @driver.find_element(:xpath, "//input[@name='head-count']").send_keys("5")
       wait.until{ @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").displayed?}
       @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").clear
       @driver.find_element(:xpath, "//textarea[@name='equipment-notes']").send_keys("edit notes")
       sleep(2)
       wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and text() ='Add to booking']").displayed?}
       @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and text() ='Add to booking']").click()
       sleep(5)
       
       attendees=@driver.find_element(:xpath, "//div[@name='expected']").text
       sleep(1)
       charge_code=@driver.find_element(:xpath, "//meeting-details-requirements//child::div[@name='charge-code'  and @class='value']").text
       sleep(2)
       private_notes= @driver.find_element(:xpath, "//meeting-details-requirements//child::div[@name='notes'  and @class='value']").text
       puts private_notes
   
       if private_notes=="edit notes" then

         puts"notes is edited"
       end 

       if attendees=="5" then

        puts "attendees is edited"
      end 

      if charge_code=="56621" then

        puts "charge_code is edited"
      end 

      wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
      @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
    

    end


    it "Verify Edit Catering Details of all day booking" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test All day")
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Catering')]").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Catering')]").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Add Order ']").click()

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

        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(3)
         
        wait.until{ @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").displayed?}
        @driver.find_element(:xpath, "//button[@class='mat-icon-button mat-button-base']//i[text()='close']").click()
        sleep(4)

    end


    it "Edit location of an All day meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_sydney("Title: Test All day")
        wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
        @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
    
        wait.until{ @driver.find_element(:xpath, "//an-action-field[@name='spaces']").displayed?}
        @driver.find_element(:xpath, "//an-action-field[@name='spaces']").click()

        sleep(3)
        wait.until{@driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").displayed?}
        @driver.find_element(:xpath," //div[@class='block selected ng-star-inserted']//following::i[@class='material-icons ng-star-inserted' and text()='close'][1]").click
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()=' Select ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Close']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").displayed?}
        location2=@driver.find_element(:xpath, "//label[text()='Location(s):']//following::div[@name='location'][1]").text
        sleep(2)
        if location==location2 then
            puts"Test failed"
        end

        wait.until{ @driver.find_element(:xpath, "//button[@type='submit']").displayed?}
        @driver.find_element(:xpath, "//button[@type='submit']").click()


    end

    

    

    it "Delete an all day booking" do

        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(12)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        sleep(2)
        search_meeting_sydney("Title: Test All day")
        sleep(2)
        delete_meeting
    end


    it "Create a 8hrs  booking" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Sydney']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Sydney']").click()
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test 8 hours")
        sleep(2)
        select_duration("8 hours (")
        sleep(3)

        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_london("Title: Test 8 hours")
        sleep(3)
    
        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()

    end


    it "Create a Week long  booking" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(20)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Sydney']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Sydney']").click()
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, " //i[text()='add']").displayed?}
        @driver.find_element(:xpath, " //i[text()='add']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//input[@name='title']").displayed?}
        @driver.find_element(:xpath, "//input[@name='title']").send_keys("Test 1 Week")
        sleep(2)
        select_duration("1 Week")
        sleep(3)

        search_room_book
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_london("Title: Test 1 Week")
        sleep(3)
    
        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
        

    end



    it "Edit option is avaialble for RR,catering and private details of past meeting " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(10)
        wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
        @driver.find_element(:xpath, "//mat-select[@name='level']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
        search_meeting_london("Title: Test Past booking")

        sleep(4)
        if @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Edit Private Details')]").count>0
            puts "Edit Private details is avaialble"
        end
        sleep(2)
        if @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Requirements')]").count>0
            puts "Edit Room Requirement details is avaialble"
        end
        sleep(2)
        if @driver.find_element(:xpath, "//span[@class='mat-button-wrapper' and contains(text(),'Catering')]").count>0
            puts "Edit Room Requirement details is avaialble"
        end

        wait.until{ @driver.find_element(:xpath, " //i[@class='material-icons ng-star-inserted' and text()='close']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons ng-star-inserted' and text()='close']").click()
    end


    it "Verify host of meeting is not an option to be edited" do
        
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
         sleep(20)
         wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
         @driver.find_element(:xpath, "//mat-select[@name='level']").click()
         sleep(2)
         wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
         search_meeting_sydney("Title: Test All day")
         wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
         @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
         sleep(2)
         wait.until{ @driver.find_element(:xpath, " //mat-select[@name='organiser'] ").displayed?}
         if  @driver.find_element(:xpath, " //mat-select[@name='organiser'] ").isclickabe? == false
            puts "Host is not editable"
         end
            
        
     end
 

     it "Verify Room and date of inprogress meeting cannot be edited" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
         sleep(20)
         wait.until{ @driver.find_element(:xpath, "//mat-select[@name='level']").displayed?}
         @driver.find_element(:xpath, "//mat-select[@name='level']").click()
         sleep(2)
         wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").displayed?}
         @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' All Levels ']").click()
         search_meeting_sydney("Title: Test All day")
         wait.until{ @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").displayed?}
         @driver.find_element(:xpath, " //span[@class='mat-button-wrapper' and contains(text(),'Meeting')]").click()
         sleep(2)
         @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
         @driver.find_element(:xpath,"//body[@id='tinymce']")
        @driver.find_element(:xpath,"//body[@id='tinymce']").send_keys("Enter description notes")
         sleep(1)
        @driver.switch_to.default_content()
        wait.until{ @driver.find_element(:xpath, "//span[text()=' Continue ']").displayed?}
        @driver.find_element(:xpath, "//span[text()=' Continue ']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Add to booking']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Add to booking']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Save']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Save']").click()
        sleep(2)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Close']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Close']").click()
        sleep(2)
        notes=@driver.find_element(:xpath, "//div[@name='notes' and @class='value html']").text
 
        if notes.equals("Enter description notes") then
 
          puts"notes is retained"
        end 
 
     end
       
       
    





        
 
       
        
       
 
     
 
 
 
 










    
    

        





    

    

        
        




        


        
        
       



        

        



        



        
   


        




        


        

        


        

        

        
        


        

        


        
        

        


          
        



        
        



        


        

        
       
     
       
        

    



        





   


    
        
        







       

        





        
        
        









        







    it "Search for meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        sleep(30)
        wait.until{ @driver.find_element(:xpath, "//span[text()='Sydney']").displayed?}
        @driver.find_element(:xpath, "//span[text()='Sydney']").click()
        wait.until{ @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").displayed?}
        @driver.find_element(:xpath, "//span[@class='mat-option-text' and text()=' London Pilot ']").click()
        sleep(5)

        search_meeting("Title: Test Concierge 1hr")
        sleep(4)

    end


        

        

        


   

   

    it "Create a meeting in concierge with catering" do
         wait = Selenium::WebDriver::Wait.new(:timeout => 10)  
         sleep(8)
         @driver.find_element(:xpath, "//div[@class='bottom-block ng-star-inserted']").click()
         sleep(5)

         el2=@driver.find_element(:xpath,"//div[@class='text' and text()='London Pilot']")
         @driver.execute_script("arguments[0].scrollIntoView(true);", el2 )
         el2.click
         wait.until{ @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").displayed?}
         @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").click() 
    
         wait.until{ @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").displayed?}
         @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").click() 

         wait.until{ @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3]").displayed?}
         @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3] ").click() 

         wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").displayed?}
         @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").send_keys("Test catering")

         wait.until {@driver.find_element(:xpath, "//div[@id='needs_catering']").displayed?}
         @driver.find_element(:xpath, "//div[@id='needs_catering']").click
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
         #click on room
         sleep(10)
         room_book_catering
         sleep(15)
         search_meeting_sydney("Title: Test catering")
         sleep(8)
    end



    


    

    it "Create all day meeting in concierge" do
         wait = Selenium::WebDriver::Wait.new(:timeout => 10)  
         sleep(5)
         el=@driver.find_element(:xpath,"//div[@class='text' and text()='Sydney']")
         @driver.execute_script("arguments[0].scrollIntoView(true);", el )
         el.click
         sleep(8)
         wait.until{ @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").displayed?}
         @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").click() 
        
         wait.until{ @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").displayed?}
         @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").click() 

         wait.until{ @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3]").displayed?}
         @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3] ").click() 
         #select all day
         
         wait.until{ @driver.find_element(:xpath, "//checkbox[@label='All Day Booking']//div[@class='box' ]").displayed?}
         @driver.find_element(:xpath, "//checkbox[@label='All Day Booking']//div[@class='box' ]").click

         wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").displayed?}
         @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").send_keys("Test All day")
         @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

         search_room_book
         sleep(15)
         search_meeting_sydney("Title: Test All day")
         sleep(6)


    end

       
       
    
        


=begin wait.until{ @driver.find_element(:xpath, "//div[@class='content' and text() = 'Edit']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text() = 'Edit']").click()
        sleep(5)
        #Edit Notes
        #notes=@driver.find_element(:xpath,"//label[@for='notes']")
        #@driver.execute_script("arguments[0].scrollIntoView(true);",notes)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        original_text=@driver.find_element(:tag_name => 'body').text
        @driver.find_element(:tag_name => 'body').send_keys("private notes")
        sleep(5)
        edited_text=@driver.find_element(:tag_name => 'body').text
        @driver.switch_to.default_content()
        wait.until{ @driver.find_element(:xpath, "//div[@class='content' and text() = 'Save']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text() = 'Save']").click()
        sleep(3)
        wait.until{ @driver.find_element(:xpath, "//div[@class='content' and text() = 'Ok']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text() = 'Ok']").click()
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//article[@class='expired ng-star-inserted']//div[@class='value' and @title = 'Title: Test Concierge']").displayed?}
        @driver.find_element(:xpath, "//article[@class='expired ng-star-inserted']//div[@class='value' and @title = 'Title: Test Concierge']").click()
        notes2=@driver.find_element(:xpath,"//label[@for='description']")
        @driver.execute_script("arguments[0].scrollIntoView(true);",notes2)
        @driver.switch_to.frame(@driver.find_element(:xpath,"//iframe[@class='tox-edit-area__iframe']"))
        new_text=@driver.find_element(:tag_name => 'body').text
        @driver.switch_to.default_content()

        if (new_text.equals(edited_text)) then

            puts"Privates notes is saved correctly"

        end
    
    end  
=end 


    it "Accept a meeting " do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text ng-star-inserted' and text()='Day View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text ng-star-inserted' and text()='Day View']").click()
        sleep(2)
     

    end


    it "setup and breakdown" do 
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)
        wait.until{ @driver.find_element(:xpath, "//div[@class='text ng-star-inserted' and text()='Day View']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text ng-star-inserted' and text()='Day View']").click()
        sleep(2)
        @driver.find_element(:xpath, "//div[@class='knob android']").click()
        sleep(5)

    end

    it "create a meeting with catering" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)  
        wait.until{ @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").displayed?}
        @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").click() 
        
        wait.until{ @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").displayed?}
        @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").click() 

        wait.until{ @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3]").displayed?}
        @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3] ").click() 

        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").send_keys("Test Catering")

        wait.until{ @driver.find_element(:xpath, "//label[@for='needs_catering' and text()='Need Catering?']").displayed?}
        @driver.find_element(:xpath, "//label[@for='needs_catering' and text()='Need Catering?']").click
        sleep(5)
        
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        #click on room
        sleep(10)
        room=@driver.find_element(:xpath,"//button[contains(text(),' Select ')][1]")
        @driver.execute_script("arguments[0].scrollIntoView(true);",room )
        room.click
        #Clicking next button
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Room notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("45666")

        wait.until{ @driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
        @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("12")

        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
        sleep(8)

        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").click
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Catering notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("32423")
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

    sleep(4)
      

        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Create ')][1]").click
        sleep(15)
        wait.until{ @driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").displayed?}
        time1=@driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").text
        space=@driver.find_element(:xpath, "//label[@for='notes']//following::div[@class='name'][2]").text
        time1=time1.downcase!
        puts time1
        puts "space is"
        puts space

      
        @driver.find_element(:xpath,"//div[@class='heading' and text()='New Meeting']//following::i[@class='material-icons' and text()='close']").click
        sleep(10)
        el=@driver.find_element(:xpath,"//div[@class='value' and text()='Test Catering']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el )
        el.click

        sleep(5)
        wait.until{@driver.find_element(:xpath,"//label[text()='Charge Codes:']//following-sibling::div").displayed?}
        charge_codes=@driver.find_element(:xpath,"//label[text()='Charge Codes:']//following-sibling::div").text
        cc=charge_codes.split("|")
        room_cc=cc[0]
        catering_cc=cc[1]

        puts catering_cc
        #puts room_cc()
        expect(room_cc).to eq("45666")
        expect(room_cc).to eq("32423")

        #wait.until{@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").displayed?}
        #@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").click
        #private_notes=@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").text
        wait.until{@driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//child::div//child::i").displayed?}
        @driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//child::div//child::i").click
        sleep(3)
        wait.until{@driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//following::p").displayed?}
        catering_notes= @driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//following::p").text
        puts catering_notes
        expect(catering_notes).to eq("Catering notes")
        wait.until{@driver.find_element(:xpath,"//label[text()='Equipment Notes:']//following-sibling::div").displayed?}
        room_notes= @driver.find_element(:xpath,"//label[text()='Equipment Notes:']//following-sibling::div").text
        puts room_notes
        expect(room_notes).to eq("Room notes")


    end    


    it "create a meeting with external attendees and catering" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)  
        wait.until{ @driver.find_element(:xpath, "//div[@class='bottom-block ng-star-inserted']").displayed?}
        @driver.find_element(:xpath, "//div[@class='bottom-block ng-star-inserted']").click()
        sleep(10)
        el=@driver.find_element(:xpath,"//div[@class='text' and text()='London Pilot']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el )
        el.click
        wait.until{ @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").displayed?}
        @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").click() 
        
        wait.until{ @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").displayed?}
        @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").click() 

        wait.until{ @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3]").displayed?}
        @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3] ").click() 

        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").send_keys("Test External attendee")
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Add External']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Add External']").click

        wait.until{ @driver.find_element(:xpath, "//input[@name='given_name']").displayed?}
        @driver.find_element(:xpath, "//input[@name='given_name']").send_keys("Guest1")

        wait.until{ @driver.find_element(:xpath, "//div[@class='content' and text()=' Add ']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()=' Add ']").click

        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//a-checkbox[@ng-reflect-label='Need Catering?']").displayed?}
        @driver.find_element(:xpath, "//a-checkbox[@ng-reflect-label='Need Catering?']").click
        sleep(5)
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),'Continue')][1]").click

        #click on room
        sleep(10)
        room=@driver.find_element(:xpath,"//button[contains(text(),'Select')][1]")
        @driver.execute_script("arguments[0].scrollIntoView(true);",room )
        room.click
        #Clicking next button
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),'Continue')][1]").click
        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Room notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("45666")

        wait.until{ @driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
        @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("12")

        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
        sleep(8)

        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").click
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Catering notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("32423")
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        sleep(4)

        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Create ')][1]").click
        sleep(15)
        wait.until{ @driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").displayed?}
        time1=@driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").text
        space=@driver.find_element(:xpath, "//label[@for='notes']//following::div[@class='name'][2]").text
        time1=time1.downcase!
        puts time1
        puts "space is"
        puts space
        @driver.find_element(:xpath,"//div[@class='heading' and text()='New Meeting']//following::i[@class='material-icons' and text()='close']").click
        sleep(10)
        el=@driver.find_element(:xpath,"//div[@class='value' and text()='Test External attendee']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el )
        el.click

        sleep(5)
        wait.until{@driver.find_element(:xpath,"//label[text()='Charge Codes:']//following-sibling::div").displayed?}
        charge_codes=@driver.find_element(:xpath,"//label[text()='Charge Codes:']//following-sibling::div").text
        cc=charge_codes.split("|")
        room_cc=cc[0]
        catering_cc=cc[1]

        puts catering_cc
        puts room_cc()
        expect(room_cc).to eq("45666")
        expect(room_cc).to eq("32423")

        #wait.until{@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").displayed?}
        #@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").click
        #private_notes=@driver.find_element(:xpath,"//label[text()=' Private Notes: ']//child::div[@class='icon']").text
        wait.until{@driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//child::div//child::i").displayed?}
        @driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//child::div//child::i").click
        sleep(3)
        wait.until{@driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//following::p").displayed?}
        catering_notes= @driver.find_element(:xpath,"//label[text()=' Catering Notes: ']//following::p").text
        puts catering_notes
        expect(catering_notes).to eq("Catering notes")
        wait.until{@driver.find_element(:xpath,"//label[text()='Equipment Notes:']//following-sibling::div").displayed?}
        room_notes= @driver.find_element(:xpath,"//label[text()='Equipment Notes:']//following-sibling::div").text
        puts room_notes
        expect(room_notes).to eq("Room notes")

      
    end    
    
    it "create a multi room meeting" do
        wait = Selenium::WebDriver::Wait.new(:timeout => 10)  
        wait.until{ @driver.find_element(:xpath, "//div[@class='bottom-block ng-star-inserted']").displayed?}
        @driver.find_element(:xpath, "//div[@class='bottom-block ng-star-inserted']").click()
        sleep(10)
        el=@driver.find_element(:xpath,"//div[@class='text' and text()='London Pilot']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el )
        el.click
        wait.until{ @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").displayed?}
        @driver.find_element(:xpath, "//div[@class='wrapper' and text()='Book meeting']").click() 
        
        wait.until{ @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").displayed?}
        @driver.find_element(:xpath, "//input[@type='time']//following::i[@class='material-icons' and text()='keyboard_arrow_down']").click() 

        wait.until{ @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3]").displayed?}
        @driver.find_element(:xpath, "//div[@class='cdk-virtual-scroll-content-wrapper']//descendant::div[@class='text'][3] ").click() 
        
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Search for host...' ]").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Search for host...' ]").clear
        @driver.find_element(:xpath, "//input[@placeholder='Search for host...' ]").send_keys
        wait.until{ @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").displayed?}
        @driver.find_element(:xpath, "//input[@placeholder='Meeting Subject']").send_keys("Test Multiroom")
        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Add External']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Add External']").click

        wait.until{ @driver.find_element(:xpath, "//input[@name='given_name']").displayed?}
        @driver.find_element(:xpath, "//input[@name='given_name']").send_keys("Guest1")

        wait.until{ @driver.find_element(:xpath, "//div[@class='content' and text()=' Add ']").displayed?}
        @driver.find_element(:xpath, "//div[@class='content' and text()=' Add ']").click

        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//label[@for='needs_catering' and text()='Need Catering?']").displayed?}
        @driver.find_element(:xpath, "//label[@for='needs_catering' and text()='Need Catering?']").click

        sleep(4)
        
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        #click on room
        sleep(10)
        room=@driver.find_element(:xpath,"//button[contains(text(),' Select ')][1]")
        @driver.execute_script("arguments[0].scrollIntoView(true);",room )
        room.click

        room1=@driver.find_element(:xpath,"//button[contains(text(),' Select ')]")
        @driver.execute_script("arguments[0].scrollIntoView(true);",room1 )
        room1.click
        #Clicking next button
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Room notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("45666")

        wait.until{ @driver.find_element(:xpath, "//input[@name='expected-attendees']").displayed?}
        @driver.find_element(:xpath, "//input[@name='expected-attendees']").send_keys("12")

        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click
        sleep(8)

        wait.until{ @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='text' and text()='Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").displayed?}
        @driver.find_element(:xpath, "//div[@class='name' and text()='Multi Grain Breakfast']").click

        wait.until{ @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").displayed?}
        @driver.find_element(:xpath, "//i[@class='material-icons' and text()='add']").click
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        wait.until{ @driver.find_element(:xpath, "//textarea[@name='notes']").displayed?}
        @driver.find_element(:xpath, "//textarea[@name='notes']").send_keys("Catering notes")

        wait.until{ @driver.find_element(:xpath, "//input[@name='cost-code']").displayed?}
        @driver.find_element(:xpath, "//input[@name='cost-code']").send_keys("32423")
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Continue ')][1]").click

        sleep(4)
      
        @driver.find_element(:xpath,"//div[@class='wrapper' and contains(text(),' Create ')][1]").click
        sleep(15)
        wait.until{ @driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").displayed?}
        time1=@driver.find_element(:xpath, "//label[@for='notes' and text()='Period:']//following::div[@class='value'][1]").text
        space=@driver.find_element(:xpath, "//label[@for='notes']//following::div[@class='name'][2]").text
        time1=time1.downcase!
        puts time1
        puts "space is"
        puts space

      
        @driver.find_element(:xpath,"//div[@class='heading' and text()='New Meeting']//following::i[@class='material-icons' and text()='close']").click
        sleep(10)
        el=@driver.find_element(:xpath,"//div[@class='value' and text()='Test Multiroom']")
        @driver.execute_script("arguments[0].scrollIntoView(true);", el )
        el.click
        sleep(5)
        wait.until{ @driver.find_element(:xpath, "//span[text()='View Details']").displayed?}
        @driver.find_element(:xpath, "//span[text()='View Details']").click
        sleep(4)


        
        sleep(10)
        

    end      

    
   # it " Add catering to a multiroom meeting" do
    #    el=@driver.find_element(:xpath,"//div[@class='value' and text()='Test Catering']")
     #   @driver.execute_script("arguments[0].s


    
end
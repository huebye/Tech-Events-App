Feature: specify number of events being shown

Scenario: When user hasn’t specified a number, 32 event items is the default number.

Given the list of events has been loaded
When user does not change the number of event items being displayed
Then the default number of items displayed will be 32 


Scenario: User can change the number of events they want to see.

Given the list of events has been loaded
When user changes the number of events being displayed to as many as they want to see 
Then list of events seen will be reduced to the amount chosen
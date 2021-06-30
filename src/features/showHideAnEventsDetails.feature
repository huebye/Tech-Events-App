Feature: show and hide details of event

Scenario: An event element is collapsed by default.

Given the list of events has been loaded
When the user has not made any action 
Then the event element will be collapsed 

Scenario: User can expand an event to see its details

Given the list of events has been loaded
When the user clicks on the event
Then the event element expands 

Scenario: User can collapse an event to hide the details

Given the list of events has been loaded
And the element has been expanded
When user clicks on “hide details”
Then the event element collapses 
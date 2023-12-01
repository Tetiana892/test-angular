## test-angular

This is a test task. I have never written in Angular before. 
If you have any comments on my code, please leave a feedback tatina892@gmail.com

## Task:
Create applications to test password strength.

The essence of the assignment:
Create a field for entering a password, under the field add 3 sections which will show the strength of the password;
Changes in password strength must take place in real time;

How to calculate the strength of a password:
1.Only letters/digits/symbols - the password is easy;
2.Combination of letters-symbols/letters-digits/digits-symbols - the password is medium;
3.Has letters, symbols and numbers - the password is strong;
The color of the sections will depend on the strength of the password:
4.If the field is empty, all sections are gray;
5.If the field has less than 8 characters, all sections are red;
6.If the password is easy - the first section is red the rest are gray;
7.If the password is medium - the first two sections are yellow the last one is gray;
8.If the password is strong, all sections are green;

## Getting Started

To get started with our Drive Ukraine Now, follow these steps:

1. Clone this repository to your local machine.
2. Install or update npm: [sudo] npm install -g npm (sudo only required for Mac/Linux).
3. Install angular-cli: [sudo] npm install -g @angular/cli

If you previously installed angular-cli, we recommend updating it:
[sudo] npm uninstall -g angular-cli @angular/cli
npm cache clean
[sudo] npm install -g @angular/cli

4.Go to the project directory and start the server:ng serve
5.The server will be accessible by default at localhost:4200


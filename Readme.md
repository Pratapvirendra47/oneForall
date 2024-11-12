# Fullstack demo repo


## BE architecture course slides : https://alt-f4-llc.github.io/fem-bsda-presentation/slides.html

### Modern Computing

 - UI -> Server -> Database

### Terminal commands

- cat : shows file content
- man : command manual
- less: show file contents by page
- touch: creates an empty file (updates the last modified time if the file doesn't exists it creates the new file)
- echo: repeats the input
- cd ~ : redirects to home directory
- ls -la : l will show permission. a : shows the hidden files 
- cd / : root of your system
- rmdir: will not remove if there is something in the directory. use rm -rf.

### Vim
- i : insert mode.
- esc key : to get out of insert mode.
- U : undo the content in vim esc mode.
- :q! : save with out undo

### Shell
shell is the place where all your application is running
- zsh : mac shell
- bash : every unix base operating system.
- source "Shell config location" : if you modify your shell then use this command to load your shell configuraiton

### Server

- Needs to available everytime.
- CLOUD COMPUTING : 
	- virtualization : dividing the servers resources into virtual computers.


## Domain

- Look for email forwarding with the domain name ???
- updating and restarting the server.
	-	apt is the package manager for ubuntu and linux distribution.
	- shutdown now -r : shutdown the server and restart the server.
	- root : is the highest permission level on the operating system. Allows unstricted access to the OS.
	- sudo: super user do. default is never as root.
	- adduser <name> : to add a new user to server.
	- usermod -aG sudo <name> : modify the user i.e. add the user to the sudo Group.
	- su <name> :  to change to user.
	- sudo vi /etc/ssh/sshd_config: change the root permission of your server. etc can only be access with sudo.
	- sudo service ssh restart: restart the ssh process.
	- to switch to root : sudo -i

## Webservers : Nginx (https://www.f5.com/go/product/welcome-to-nginx) and Apache(https://httpd.apache.org/)

- Nginx is written in C and really fast, Faster than node.
- Reverse proxy : When a request comes to your server we need web servers to handle that requests, to route that reqiest.
- Nginx : can route to 
	- application
	- database
	- another server
- Checkout nginx config : /etc/nginx/sites-available/default 

slide link : `https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf`


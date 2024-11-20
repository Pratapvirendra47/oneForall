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


## Operating Systems

User -> Shell -> Kernel (talks to the hardware) -> hardware

## Security and Hashing

- Passoword cheat sheet : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
- Hashing algorithms are one-way while encryption algorithms are two-way
- MD5 : Password + MD5 is a hash of different numbers
	- `openssl md5 foo`
	- md5 is very easily breakable
	- md5 hash is about 33 characters
- SHA1 hash is 44 character
	- `openssl sha1 foo`
- SHA256 is 65 characters
	- `openssl sha256 foo`
- We need SALT
	- we take any random number add it the password and we sha or sha256 to get a salted hash



## CLI command to start a server :  
	- `ssh -i ~/.ssh/newfsfe root@143.110.190.94` : ssh -i <path to ssh file> root@<IP address of the server>


## Internet (Networking)

- ping google.com : check the network host. Really fast way to tell where network is up or down
- traceroute google.com : All the hops from my computer to the destination host. prints every single hops
- netstat : tells all the things happening on the computer, all the running ports etc related to networking.

- TCP : transmission control protocol
	- TCP has handshake
	- extremely reliable
- UDP : User datagram Protocol
	- one way
	- good for sending real-time stuff : Streaming videos (UDP is really fast here)
	- example blurry video (some loss of packets over this protocol is not a problem)
- ICMP : Internet control message protocol
- Packet : a packet is a small unit of data transmitted over network

## DNS

- Computer talks to the browser and browser talks to DNS (Domain Name System) looks in the nameserver to return the ip address of the server.
- cname : mapping to name to name
- nslookup <name>  : look for the nameserver
- dig <name> : lookup DNS record for the doamin
- one domain name can have mutliple ip address because they are hosted on the different servers.
- .com : tld - top level domain. actually own by companies 

## Domain

- Look for email forwarding with the domain name ???
- updating and restarting the server.
	- apt is the package manager for ubuntu and linux distribution.
	- shutdown now -r : shutdown the server and restart the server.
	- root : is the highest permission level on the operating system. Allows unstricted access to the OS.
	- sudo: super user do. default is never as root.
	- adduser <name> : to add a new user to server.
	- usermod -aG sudo <name> : modify the user i.e. add the user to the sudo Group.
	- su <name> :  to change to user.
	- chmod 644 ~/.ssh/authorized_keys: changing read and write permission of authorized key.
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
- install nginx: sudo apt install nginx
- start nginx server  : sudo service nginx start
- Checkout nginx config : /etc/nginx/sites-available/default 
- root /var/www/html : root directory nginx is serving.
-  curl https://deb.nodesource.com/setup_20.x | sudo -E bash -  : Link to newest node source
- sudo apt-get install nodejs : to install nodejs
- Change owner ship of the directory /var/wwww to the user : sudo chown -R $USER: $USER /var/www
- make an app directory in /var/www : mkdir app
- git init to make it a git repository
- creating a virtual server/fake server on top of our server at /etc/nginx/sites-enabled/fsfe 
- We can create infinite number of server
- pointing nginx to new server we created
- nginx -t to validate your niginx file

## PM2 : `https://pm2.keymetrics.io/`

- As we exit our shell its not gonna run anymore
- sudo npm i pm2 -g: to install pm2 globally
- pm2 start app.js --watch : to start the server
## setting up auto restart
	- pm2 save: will save our current process list
	- pm2 startup

slide link : `https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf`


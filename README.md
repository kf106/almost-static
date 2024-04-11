# Almost-Static Website

A simple webserver and webpage configuration for an almost-static website that can handle forms.

## Introduction
I recently decided that it made sense to move away from web frameworks like NextJS and RedwoodJS for my simple little one-page websites. It is much easier to download an HTML5 static webpage template and tweak it than try to get the latest version of a web framework up and running, especially as web frameworks love to introduce breaking changes between major releases and move everything around so you spend most of your time playing "where is it now?"

You will find lots of free responsive static website templates if you search for "[responsive static website templates](https://www.google.com/search?q=responsive+static+website+templates)", which you can download, edit in a text editor, and then serve up using a static webserver like [Nginx](https://www.nginx.com/resources/glossary/nginx/).

## The Pros
The advantages of a static website are:

* no need to learn a complicated web framework
* fewer processes to have running on your server that can crash
* fewer files to manage
* less difficulty in finding the relevant files to edit and tweak
* no code to maintain

## The Cons
There is one big problem with static website: they can't handle forms, and so you can't get people to sign up to your newsletter.

As far as I can tell, this is the one thing missing from static website landing pages that is highly desirable.

You can implement a form in a static web page very easily, but the problem is that you need your server to parse and store the response.

## The Solution
After several days of research I had to conclude that a true static website was never going to be able to deal with forms. The best I could come up with was to find the simplest free JavaScript webserver out there, which appears to be [Express](https://expressjs.com/).

We lose the benefit of not having a process running on the server, but we gain the capability for form parsing.

I settled on appending the information returned by the form to a text file called `signups.txt`. This means we avoid the problem databases have, namely input sanitation, and hence there is no risk of SQL injection attacks.

## Installation
I have tested this with NodeJS version 18.19.1.

1. Clone the repository with `git clone https://github.com/kf106/almost-static.git`
2. Change to the cloned repository folder with `cd almost-static`
3. Run `npm install` to install the required NodeJS packages
4. Start the server with `./run.sh`

## Customization
The web pages are in the `./public` folder.

The `index.html` file is a sample one-page website, and the `subscribed.html` file is the index page with the form removed and replaced with a "successfully subscribed" message. You can replace these with your free responsive static website page.

The web server is implemented by a short JavaScript file, `server.js`.

You can either specify the port for your server in `server.js` or by setting it using the bash environment variable `PORT`, for example, in the `run.sh` script.

## Examples
I use this template for the following websites that I host on my home server:

[thinklair.com](https://thinklair.com)
[www.nomath.tech](https://www.nomath.tech)
[www.lobotomy.fi](https://www.lobotomy.fi)


---
title: "Administrative Automation for Local Non-Profit"
date: "2016-05-12T22:40:32.169Z"
template: "post"
draft: false
slug: "administrative-automation"
category: "Portfolio Piece"
tags:
  - "Perl"
  - "Web Development"
  - "LaTeX"
  - "Linux"
description: "I worked with the founder of Treasure Valley Community Resource Center to automate the creation of their referral directory, an essential list of human services compiled for members of the community who are looking for professional help."
socialImage: "/media/search-directory.png"
---

In 2016, the non-profit, all volunteer Treasure Valley Community Resource Center ([TVCRC](http://www.idahoconnections.org/history.htm)) was facing the challenge of being unable to publish their referral directory, a list of local human service agencies that TVCRC updates and sells annually. The referral directory is a core part of TVCRC's offering to caseworkers, who use it to provide assistance to their clients. Sales of the directory constitute a majority of the organization's operating capital. The challenge was technical, and TVCRC did not have volunteers that were able to understand and fix the problem.

The problem was that the custom, volunteer-built software that had previously generated PDFs from TVCRC's database was no longer working, and the volunteer that had built it was no longer available. This software was very rigid and led TVCRC to maintaining two separate databases: one that could be queried by their website, and one that a PDF of the referral directory could be generated from. TVCRC needed someone to recreate the PDF generation functionality, while also eliminating redundancy by using the same database that was queried by the website, making it possible to maintain a single source of truth.

![A screenshot of TVCRC's directory search webpage.](/media/search-directory.png)

With the guidance of my senior capstone advisor at The College of Idaho, I worked as part of a small team that met with one of TVCRC's founders over the course of several months in order to identify the stated issues, clarify priorities, and ultimately propose and deliver a solution. The existing system for managing both databases was built into the administrator portion of TVCRC's website, and was written in Perl and PHP. My team and I decided to write our solution in those languages as well—primarily Perl—to easily integrate with the existing codebase. We reproduced the website server in order to test existing code and introduce changes without risking disruption of the production environment.

In accordance with the founder's requests to keep things simple and to integrate with the existing website, I created a web interface for our solution and added it to the administrative portion of TVCRC's site. The crux of our team's solution was a Perl script that read information from the database (keeping in mind that only one of the databases was necessary at this point) and used it to construct a LaTeX document. We used pdfTeX to convert the document into a PDF of the referral directory, ready for printing and distribution. To ensure maintainability, I added troubleshooting functionality to help users uncover the cause of errors that might occur during PDF generation in the future, and I contributed to the documentation that we included with the software, which included a functional system description, installation document, user manual, and reference manual.

With the help of our user manual, a TVCRC volunteer who is not especially computer savvy can easily navigate the website to generate, view, and download or print a version of the referral directory that is up-to-date with their database. Now that they no longer have to type the same data in two separate databases, volunteers also have a lighter administrative and mental load, and are less prone to making errors while updating information. If a problem with the PDF generation process arises, an administrator or advanced user will likely be able to quickly identify the problem and solve it using the provided troubleshooting tools and documentation. In simplfying the processes followed by TVCRC volunteers and ensuring that sales of the referral directory will continue, my team and I succeeded in meeting TVCRC's needs. This project was my first time working with a "client", as well as my first experience with using software to solve a real-world business problem. It was an excellent learning opportunity.

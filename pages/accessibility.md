# Accessability

## Introduction

The EU Accessibility Directive https://ec.europa.eu/digital-single-market/en/web-accessibility and the resulting national legislation, Digital Services Act, requires that authorities such as Business Finland ensures that its websites, digital services and mobile apps will meet common accessibility standards. The Act on the Provision of Digital Services entered into force on April 1, 2019. Advisory and monitoring of accessibility requirements is the responsibility of the Regional Administration of Southern Finland (AVI). 

*All new digital services in Business Finland must meet the accessibility requirements by September 23, 2020. Therefore, all contributions to this Style Guide must be meet the accessibility requirements. This styleguide provides an automatic accessibility check using .* 

Therefore, as part of the project deliverables, the development team (BF partner, contractor, sub-contractor, BF staff) must indicate to what extent the service (deliverable) meets or differs from the accessibility requirements, i.e. WCAG 2.1 accessibility guidelines e.g. http://papunet.net/saavutettavuus/verkkosisallon-saavutettavuusohjeet-wcag. 

Moreover, development team must be able to identify which parts of the deliverable (website, online service, application) do not meet the A and AA criteria and why.

## What is accessibility

Promoting EU’s accessibility directive is an essential part of the digitalisation of public services. 

Accessibility refers to the fact that web pages and mobile applications, and their content, are accessible to anyone and can understand what they say (Design for All or Universal Design).

The accessible web page also allows that it can be used with advanced interfaces such as voice control (e.g. Google Home, Amazon Alexa, Apple Siri, Microsoft Cortana, etc.) in future.

There are three aspects to consider when designing and implementing an online service: 

### Technical accessibility (implementation) 

* The source code of a technically well implemented web service is error free and logical. 
* The HTML standard and WCAG guidelines have been followed and the service works well with a variety of terminals and assistive technologies such as voice control and screen reader software. 

### Ease of use 

* Ease of use means the web service is easy to visualize, navigation is clear and the page, function or content you are looking for is easy to find. 
* Navigation should not be too multilevel and the page names should be descriptive and clear 
* The main content is clearly distinguishable from other elements of the page. It is easy for the service to perform the desired function. 

### Content clarity and comprehensibility 

* Content comprehensibility is important to all users and an essential part of the accessible online service. 
* It means using clear, comprehensible language and also plain language. 
* The text should be easy to read and structured into short paragraphs and lists. Sufficient descriptive subheadings should be used. 
* Link text should also be descriptive and understandable. 
* Understandability also includes the idea of ​​multichannel: content is also provided, for example, in the form of video, images and audio in addition to text.

## Accessibility Criteria and Accessibility Guidelines (WCAG 2.1) 

Web Content Accessibility Guidelines 2.1 (WCAG 2.1) is a guide developed by the World Wide Web Consortium (W3C). The WCAG 2.1 guidelines contain the principles of accessible content, general guidelines and success criteria of testing accessibility. 

Using the WCAG guidelines will mainly ensure the technical accessibility of the site. 

Legislation requires that the website and online services are in accordance with Level AA of the WCAG 2.1 Guidelines. This means that the site must pass all A and AA level success criteria. 

For further reading: 
* http://papunet.net/Availability/wcag-21-Help
* https://www.w3.org/TR/WCAG21/ 
* https://www.gov.uk/service-manual/helping-people -to-use-your-service / understanding-WCAG

## Overview of instructions

### Technical accessability and structure

Aim for clear page structure 
* Make sure that the different parts of the page stand out clearly. It is especially important that the user is not confused about where the main content of the page is. 

Make sure your site structure and functions are consistent 
* The different functions on the site look the same and can be found in the same place, regardless of which subpage you are on. 
* Design a clear and consistent title structure. Make sure that all relevant content on the page has clearly labeled titles. 

Remember to have a sufficient contrast 
* The text content and functional elements of the page must have sufficient contrast with the background. 

Do not use images to convey textual information 
* Write the texts in the HTML source code and format them using CSS style files if necessary. 

Remember the appropriate line length 
* Do not make lines too short or too long. Typically, 50-120 characters is the appropriate line length. 

Use large enough text and a clear font 
* The correct text size may depend on the font used. Normally, however, the text size should be at least 10pt. 
* Endless (sans-serif-style) fonts are easier to read for many people. 

Make links look like links 
* Make all interactive elements, such as links and buttons, visually appealing to the user to know they are links / buttons. Don't use the same styles (like underlining) in other parts of the site. 

Don't use color as the only way to convey meaning. In addition to color, it is a good idea to use other visual means, such as underlining links. 
Avoid flickering and fast moving elements 
* Fast-paced and flickering presentations usually take too much attention and can, at worst, cause seizures, such as in epileptics. 

Include a link to the homepage of each site on each subpage 
* Often the top left corner of the page view has a site logo / name that acts as a link to the site's front page. 

Make sure the user knows where they are on the site 
* The user should know where the site is located. 

### Content, language and cognitive aspects  

Use clear and good general language. Visit language center: https://selkokeskus.fi/
* Do not use language or phrases. 
* Avoid using difficult and complicated words. 

Line up the text to the left. 
* Avoid unnecessary underlining, bold, italics. 
* Do not write unnecessarily in CAPITAL LETTERS. 

Keep the content short, simple and clear. Break up the text into clear and understandable pieces using subtitles, lists, pictures and videos. 
* Do not publish long text content in a single clip. 

Supports written text with images, graphs, lists, videos and audio files. 
* Don't provide content in plain text. 

Visually highlight the significant and relevant content of the page. Make clickable actions as informative, clear, consistent, and easily predictable as possible. 
* Avoid "Press Here" style buttons. Enter the purpose of the button directly on the button. 
* Avoid situations where the user cannot be sure where the link will lead or what the button will do. 

Provide the user with the ability to remove any flashing or otherwise annoying content. 
* Avoid content that unnecessarily distracts the user from the main content of the page. 

Provide the user with tips and tricks that support site usage and memory. 
* Do not trust users to remember what was on the previous pages. 

Source: Papunet Web Service http://papunet.net/Accessibility/Quick Guide- Designers,

## Checklist 

Papunet maintains a simplified version and interpretation of the WCAG 2.1 guidelines, which can serve as a checklist for accessibility requirements for the web service provider: http://papunet.net/saavutettavuus/ohjeita-ja-oppaita 

Also, the 18F Accessibility Guide maintained by the US government's digital agency is an excellent checklist for the design phase: https://accessibility.18f.gov/checklist/ 

## Tools 

There are several freely available tools for analyzing availability. 

For example, Google Chrome web browser Developers Tool (Settings-> More Tools-> Developer Tools-> Audits) allows you to audit the accessibility of a single webpage.

This styleguide provides an automatic accessibility check on page load. It uses axe-core accessibility engine behind the scenes. The engine not only checks the components but a whole page.

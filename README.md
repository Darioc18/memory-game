# Portfolio Project 2 - Interactive front-end site <!-- omit in toc -->

## Wizarding Memory Quest <!-- omit in toc -->

![Responsive Mockup](assets/images/readme-images/multi-device.png)

## Live Site <!-- omit in toc -->

[Wizarding Memory Quest](https://darioc18.github.io/memory-game/)

## Repository <!-- omit in toc -->

https://darioc18.github.io/memory-game/

## Table of Contents <!-- omit in toc -->

- [Brief](#brief)
- [User Stories](#user-stories)
- [Design](#design)
  - [Wireframes](#wireframes)
  - [Colors](#colors)
  - [Typography](#typography)
  - [Imagery](#imagery)
- [Features](#features)
  - [The Grid](#the-grid)
  - [Time and Flips](#time-and-flips)
  - [Restart](#restart-option)
  - [Win pop-up screen](#win-pop-up-screen)
  - [404 Page](#404-page)
  - [Potential Features](#potential-features)
- [Responsive Design](#responsive-design)
- [Accessibility](#accessibility)
- [Testing](#testing)
- [Bugs solved](#bugs-solved)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Credits](#credits)
- [Aknowledgments](#aknowledgments)

## Brief

Wizarding Memory Quest is an enchanting Harry Potter-themed card-matching game. With 16 cards, players must rely on their memory to find matching pairs. The rules mirror those of the classic memory card game, making it easy for both Harry Potter fans and new players to dive right in. Race against the clock and aim for the fewest moves to become a true wizarding champion.

## User Stories

Target User for "Wizarding Memory Quest":

- Harry Potter fan and enthusiast
- Familiar with card-matching games and memory-based challenges
- Seeks a visually appealing and captivating game with Harry Potter-themed elements
- Appreciates nostalgia and escape into the magical world
- Enjoys testing memory skills in a casual yet engaging gameplay
- Interested in a positive and inviting gaming experience with intuitive mechanics
- Interested in competing with others

## Design

### Wireframes

Presented below are a series of wireframes illustrating the game's visual representation across a computer webpage and a mobile screen.

![Wireframes](assets/images/readme-images/wireframes.png)

### Colors

For the color palette, I took inspiration from the existing color palette used in the images of the cards. When the cards are not flipped, I aimed for a neutral palette to create a comfortable experience without overwhelming colors. This approach allows the flipped cards' colors to stand out and provide a pleasing visual contrast for users.
I created a visual palette by using [coolors.co](https://coolors.co).

![Color palette](assets/images/readme-images/palette.png)

### Typography

I chose to incorporate two fonts in the design; one for the title, which draws inspiration from Harry Potter's popular font, evoking a sense of nostalgia and familiarity, and a suitable Google font that complements the game's visual style:

- Google fonts: [Yusei Magic](https://fonts.google.com/?query=yusei+magic)

  ![google font](assets/images/readme-images/google-font.png)

- CDN fonts: [Harry Potter Font Family](https://www.cdnfonts.com/harry-potter.font)

  ![cdn font](assets/images/readme-images/harry-potter-font.png)

### Imagery

The images on the cards were sourced from free downloads available at [freebbble icon set](http://freebbble.com/harry-potter-icon-set/), and I specifically chose them due to their simple and captivating style.
The back of the cards was designed in Photoshop, utilizing the same color palette as the front images to maintain a consistent and cohesive visual style. This design choice ensures that the card elements seamlessly blend together, enhancing the overall aesthetic appeal of the game.

## Features

The game comprises two pages: the main page featuring a grid of 16 cards and an overlay win game screen, and a 404 error page.

### The Grid

On the main page, players can flip the cards by clicking on them, revealing the images behind. When two flipped cards do not match, they automatically flip back to their original position. However, upon finding a match, the cards remain flipped, allowing the user to continue and search for new matches. This mechanic engages players and challenges their memory skills.

![Flipping cards](assets/images/readme-images/flipping-cards.gif)

### Time and Flips

Clicking on the first card activates the timer, and the flips tracker records every instance when the user flips two cards.

![Time & Flips features](assets/images/readme-images/time-flips.gif)

### Restart option

Players have the option to restart the game by clicking the reset button, either on the main window or on the win pop-up screen. Upon restarting, both the timer and the flip counter are reset to zero, providing users with a fresh start for a new round of magical memory challenges.

![Reset button on home page](assets/images/readme-images/reset-homepage.gif)

### Win pop-up screen

When the user successfully flips all the matching cards, a semi-transparent win pop-up window displays the time taken to complete the game and the number of flips made. This feature adds a sense of challenge, encouraging players to aim for quicker completion times and fewer moves to achieve the best possible results.

![Reset button on pop-up page](assets/images/readme-images/reset-popup-page.gif)

### 404 Error Page

This page is specifically designed for instances when the user enters an incorrect address in the search bar. It provides an option to easily return to the game.

![404 Page](assets/images/readme-images/error-page.png)

### Potential Features

The following features could be implemented in the future:

- Introducing different game levels with a countdown mode and increased difficulty to offer more challenging and engaging gameplay experiences.
- Providing the option for users to save their scores on a leaderboard, fostering a competitive spirit

## Responsive Design

This game is intended for mobile devices and other platforms, so it has been designed with responsiveness in mind. This ensures that the game's grid structure layout remains consistent across various devices, including desktop, laptop, tablet, and mobile, in both portrait and landscape modes, without compromising its visual appeal.

![Mobile portrait](assets/images/readme-images/mobile-portrait.png)

![Mobile landscape](assets/images/readme-images/mobile-landscape.png)

## Accessibility

Throughout the coding process of this website, great attention has been given to making it as accessible-friendly as possible. This has been achieved by implementing the following measures:

- Using semantic HTML: By utilizing semantic HTML elements, such as `<header>`, `<main>`, `<footer>`, and others, the structure and purpose of the content are accurately conveyed.

- Providing alt attributes for every picture: By including descriptive alt attributes for all images on the website.

- Adding aria-label to anchor elements: The use of aria-label attributes for links and icons enhances accessibility by providing additional information or descriptions that are not explicitly conveyed through visual elements alone.

- Verifying visibility with a contrast checker by inputting the RGB color values of the text and the background.

![Color contrast checker](assets/images/readme-images/color-contrast-checker.PNG)

With these considerations, I aimed to make the website more accessible and user-friendly.

## Testing

Please refer to the [TESTING.md](TESTING.md) file for all test-related documentation.

## Bugs solved

| N.  | Bug                                                                                                                                                                                                                                                                                                 | Solution                                                                                                                                                                                                                                                                          |
| --- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | My aim was to initiate the timer when the user clicked on the first card, so I inserted the `function timer()` within the `function flipCard()`. However, I noticed that the timer malfunctioned, accelerating each time I clicked on every other card.                                             | I found a solution on [Stack Overflow](https://stackoverflow.com/questions/68211977/how-to-invoke-a-function-on-only-the-first-click). By creating a boolean variable and implementing a check within the timer function, the issue was fixed, ensuring the timer worked properly |
| 2   | I encountered a bug related to background images. I chose to include the background images through CSS instead of HTML, as I planned to update the image for specific media queries. However, I faced some issues in controlling the size and position of the background images using `object-fit`. | I used `background-size`, which specifically manages background elements in CSS. Unlike `object-fit`, which applies only to HTML `<img>` elements.                                                                                                                                |
| 3   | Clicking on the last two matching cards triggered the win screen to appear before the card-flipping animation was completed.                                                                                                                                                                        | I used the `setTimeout` global function. By introducing a delay, the win pop-up screen would only appear after the card-flipping animation has finished.                                                                                                                          |

## Technologies Used

- Languages
  - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frameworks and Programs
  - [Git](https://developer.mozilla.org/en-US/docs/Glossary/Git)
  - [Github Pages](https://github.com/)
  - [Visual Studio Code](https://code.visualstudio.com/)
  - [Google Dev Tools](https://developer.chrome.com/docs/devtools/open/)
  - [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/)
  - [Google Fonts](https://fonts.google.com/)
  - [CDN Fonts](https://www.cdnfonts.com/)
  - [Font Awesome](https://fontawesome.com/)
  - [Balsamiq](https://balsamiq.com/wireframes/)
  - [Am I Responsive?](https://ui.dev/amiresponsive)
  - [W3C Markup Validation Service](https://validator.w3.org/)
  - [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
  - [JSHint](https://jshint.com/)
  - [Favicon.io](https://favicon.io/)
  - [Coolors](https://coolors.co/)

## Deployment

The website was successfully deployed using GitHub Pages.

- To deploy the website, follow these steps:

  1.  Go to the GitHub repository and navigate to the _Settings_ tab;
  2.  On the left-hand menu, select _Pages_;
  3.  In the _Source_ section, choose the branch _main_;
  4.  Click _Save_ to save the changes;
  5.  After saving, the web page will automatically refresh. Once refreshed, a ribbon at the top of the page appears stating: _Your site is live at https://darioc18.github.io/memory-game/_.

- To fork the repository:

  1.  Go to the [GitHub repository](https://github.com/Darioc18/memory-game);
  2.  In the top-right corner of the page, click _Fork_;
  3.  Optionally type the _Repository name_ and _Description_;
  4.  Click the green button _Create fork_.

- To clone the repository:

  1. Go to the [GitHub repository](https://github.com/Darioc18/memory-game);
  2. Above the list of files, click the green button _Code_;
  3. Choose your preferred method for cloning: HTTPS, SSH, or Github CLI. Click the copy button to copy the URL to your clipboard.
  4. Open Git Bash.
  5. Change the current working directory to the location where you want the cloned directory.
  6. Type git clone, and then paste the URL you copied earlier.
  7. Press Enter. Your local clone will be created.

## Credits

### Content

- The social media icons were taken from [Font Awesome](https://fontawesome.com/)
- Memory card game inspiration and tutorial from [YouTube](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=171s)
- To make the timer start when clicking on the first card, I looked for suggestions on [Stack Overflow](https://stackoverflow.com/questions/65954053/why-is-my-memory-game-not-working-i-cant-flip-the-cards-or-make-the-game-start)
- Correct implementation of the Fisher-Yates Shuffle algorithm was taken from this video [YouTube](https://youtu.be/3uuQ3g92oPQ)
- I checked the correct use of `setTimeout()` from [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)

### Media

- All the card images were sourced from free downloads at [freebbble icon set](http://freebbble.com/harry-potter-icon-set/)
- The background was taken from free download at [WallpaperAccess](https://wallpaperaccess.com/always-harry-potter) and adapted to the game screen sizes by using Photoshop

## Aknowledgments

I would like to express my gratitude to my Code Institute mentor, [Aleksei Konovalov](https://github.com/lexach91), and my cohort facilitator at Code Institute Alan Bushell for their guidance and clear advice to build this project.

---
title: "Remote Pair Programming"
date: "2020-05-12T22:40:32.169Z"
template: "post"
draft: false
slug: "remote-pair-programming"
category: "Portfolio Piece"
tags:
  - "Web Development"
  - "Pair Programming"
  - "Teamwork"
description: "How can a distributed team work on code together while staying in a flow state? Which tools and practices work best?"
socialImage: "/media/search-directory.png"
---

## What is Pair Programming?
Pair programming is the act of two developers collaboratively designing software and coding in real time. This can involve sitting together and using the same keyboard and screen, or being physically separated (remote) and using software to share an environment.

## Why Pair Program?

As explained by [Tuple](https://tuple.app/pair-programming-guide/the-case-for-pair-programming):
> - Teams tend to ship slower over time because they accumulate sub-par code that impedes their progress.
>- A pair of programmers tends to produce better code than someone working alone.
>- Teams that pair often will maintain a fast shipping speed longer.  

Pairing gives us the opportunity to see how someone else works, the mental space to ask “why?”, the courage to try completely new things with a partner, and the opportunity to share what we've learned with a broader team. It can also be a lot of fun!

## Recommended Tools

Pairing without being in the same room is easier when using dedicated software that's built to increase the fidelity of online communication. A generic screen sharing tool isn't enough on its own because it doesn't allow shared control, and there's too much friction involved in switching who is writing code.

If you're limited to free tools, I recommend using a combination of [Visual Studio Code Live Share](https://docs.microsoft.com/en-us/visualstudio/liveshare/use/vscode) for collaboratively editing the same files and sharing localhost, and another app like Discord or Zoom for voice, video, and screen sharing. This setup involves some friction, but it's a great way to get started.

Unfortunately, as of 2022 there isn't a free tool as good as Live Share that can be outside of VS Code. Potential options are [Duckly](https://duckly.com/), [Saros](https://github.com/saros-project/saros) for Eclipse or IntelliJ, and tmux and ssh for vi or emacs.

If you're able to pay for a dedicated solution, [Tuple](https://tuple.app), [Pop](https://pop.com), and [Drovio](https://drovio.com) are solid applications designed for pair programming, and they all include free trials. If you use IntelliJ, [Code With Me](https://www.jetbrains.com/help/idea/code-with-me.html) is similar to Live Share and works quite well.

## Style and Etiquette

### Style

The Driver/Navigator style is a good way to get started with pair programming:
> - The driver types the code and stays focused on the current task.  
> - The navigator thinks ahead, ponders edge cases, spots bugs, suggests refactorings, asks good questions, stays zoomed out.  
>https://tuple.app/pair-programming-guide/styles

### How often to switch drivers

A pair should decide how often to switch drivers based on what feels right.

One strategy is to "ride the peaks" - if someone is in the zone, they should keep driving until they start to pause and hesitate. The other person should then jump in. The switch can happen as often as every few minutes (2-10).

Another strategy is to schedule how much time each person will spend driving. The pomodoro technique can be adapted to this. For example: first person drives for 25 minutes, 5-minute break, second person drives for 25 minutes, repeat. Take a longer break after 2 repetitions.

### What if you and your partner don't agree how to proceed?

Pairing involves continuous compromise and negotiation. In some situations, you may have to try the following:
-	Go with one idea and see if it works out. If it doesn't, try the other idea.
-	If that fails, bring in a third person who's respected by both people.

## Scheduling
How do you decide when to pair? The most common advice is to rotate pairs frequently, even as often as every day. No one should mandate how often a developer will pair or with whom. Instead, individual developers should coordinate based on their needs and on the open tickets in their sprint. 

Here are some best practices to consider adopting:
-	During sprint planning, or before picking up a new ticket, find a member of your team who agrees to work on that ticket with you.
-	For each day that you plan to pair, schedule an uninterrupted block of time in your calendar (ideally at least 2-3 hours). Cancel meetings if you can't find an open block of time.
-	Don't pair with the same person for more than 3-5 consecutive days.
-	If a task isn't done after 3-5 consecutive days of pairing, break up the pair and bring in someone else to contribute fresh ideas.
-	If one person in a pair is absent, that shouldn't block the other person.
-	Comment on what works well and what doesn't in your team's retrospective.

## How to Pair Effectively

Please consider reading the following quotes from Jason Garber's book, “Practical Pair Programming”, for some excellent insights on how to be a good pairing partner:
<details>
  <summary>Click here to view the quotes. </summary>
  

  >### Getting Started
  >You should agree on the objective of your pairing session at the outset. If one of you thinks the goal is to fix bugs as fast as possible and the other thinks it’s to learn Python, you might both be disappointed by the lack of progress you make in either direction.
  In many pairing sessions, the goal is simply to complete stories quickly and elegantly, but there may be some secondary goals you want to talk about. Perhaps you want to also get better at test-driven development or to clean up some smelly code as you go. Once you have these objectives in mind, take a moment to mention them as you’re starting and ask if your partner agrees.

  >If you’re growing into the pairing relationship, reflecting on the pairing process is important. Do you type noticeably more (or less) than your partner, and do they mind the discrepancy? If you’re pairing remotely, are you able to hear them clearly enough to communicate, or are they drowned out by background noises?

  >When you feel comfortable in your pairing environment, check in with your partner rather than assume that your feelings are shared.

  >The privilege of having more experience can shut down valuable lines of inquiry and stifle innovation with old habits, so make sure you’re deferring to a person with less power or status, even if you have to literally sit on your hands. Give them more time driving and make sure you’re using interrogatives, not imperatives. Far better to allow yourselves to explore the wrong path together than to split up in frustration and head off through the wilderness in different directions.

  >### Being a Better Partner
  >There should be a dialogue running almost continuously. The driver (the one controlling the keyboard at the moment) is constantly thinking out loud in a practice called “reflective articulation,” which helps the navigator (the one not typing) understand what they’re doing and keep up with what’s going on. The navigator should be acknowledging the driver’s narrative, filling in the gaps, questioning their choices, noting potential problems, helping remember what that thing over there was called, and helping direct where to go next.

  >Good questions are open-ended, asked with genuine curiosity, and non-judgmental.
  >-	Inquire about their reasoning.
  >-	Consider alternatives.
  >-	Be open to experiments.

  >An important job when you’re the navigator is to provide a “subliminal process check” and speak up when you think you’re working too long, trying too hard, or going too far on a task. Try questions like, “Is this something we should spend more energy on, or is it good enough? Is there something else could we be doing that’s more valuable?” Weighing the value of what you’re working on versus the effort required should always be in the back of your mind.

  >Wherever you are on the software engineering growth curve, you’re probably the best person to teach the knowledge you recently acquired to the folks just behind you. It’s a gift for you as well, because by articulating the thinking, circumstances, or history behind why things are done a certain way, you’ll get an even better grasp yourself on the principles you’ve already learned.

  >Each member of the team needs to be open to giving and receiving critical feedback. Being a good pairing partner means staying engaged, wrestling with interpersonal challenges, and not checking out and walking away when you experience adversity.

  >Soften the criticism by asking permission first. “Can I offer some feedback?” you might ask. “Can I bring up something I noticed?”

  >Frame it as an observation. “So I noticed we’ve been leaving a lot of comments about what the code does. I wonder, is that something we should be doing?” (Even if you’re sure it isn’t, make sure you ask sincerely.)

  >Emphasize what you would improve, not what went wrong. “Next time, I would like to spend more time driving, because I need to get a better feel for where things are in the codebase.” Or perhaps, “Next time we should try ping pong pairing, so we each have equal time driving. Would you be open to that?"

  >After a pairing session, conduct a nano-retro to quickly evaluate it and make improvements. On the count of three, each person scores the session on their fingers from zero to five. Take turns sharing what improvements would have made you give it a five and record the improvement ideas for the next time you pair together.

  >### Conclusion
  >Like any powerful tool, it matters who wields it and how it’s used. Pairing can join people together and make new technologists feel like they have a place in the programming world, and it can also exaggerate power differences and make a person feel like even more of an outsider. Be mindful of the power you have and of those who come to the pairing table with a history of having their contributions ignored and devalued. Be sure to keep a running dialogue, give up control easily, be open to feedback, and reflect honestly on what’s working well and what’s not.
</details>


Of course, the main way to get better at pairing is to practice it!

## Resources
Many of the ideas here are based on the following links:
-	[Tuple's guide](https://tuple.app/pair-programming-guide/), which is broken up into easily digestible individual articles.
-	[Practical Pair Programming](https://abookapart.com/products/practical-pair-programming), a very short $10 eBook that describes the essentials.
-	["I Have Pair Programmed for 27,000 Hours: Ask Me Anything!"](https://www.youtube.com/watch?v=rIcUXcyC6BA)

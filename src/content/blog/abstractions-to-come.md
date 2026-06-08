---
title: AI is Bringing Another Abstraction Paradigm
description: Generative AI as the next great abstraction in programming — not a
  shortcut past the stack, but a new top layer that speaks human and compiles
  down.
pubDate: 2026-06-08
tags:
  - AI
  - abstraction
  - software
  - programming
draft: false
---
I had a conversation with an old colleague today about something that keeps resurfacing across my peer groups and social circles: programming is on the verge of another abstraction, one where writing code in the form we know it might fade into the background entirely.

What do I mean by that? Generative AI has already proven it can produce working programmatic solutions when guided and reviewed by a human. I've personally stood up viable proofs of concept in a matter of hours, work that would have taken me weeks not long ago. That experience is what got me thinking about how we arrived here, and to understand where we might be going, it helps to look at the past.

### A Brief History of Abstraction

Programming has moved through a steady series of abstractions. Machine code gave way to assembly, assembly to C, C to C++ and C#, and the list goes on. Why did each of these take hold? Two reasons, and both matter for what comes next. Each new layer improved the human interpretability of the instructions we feed a machine, and each one handed the layer below more room to optimize. When I write in C, I'm not just spared the tedium of registers and jumps; I'm also giving the compiler the freedom to produce better machine code than I would ever write by hand. Abstraction didn't cost us performance. More often, it's where performance came from.

### My First Instinct Was Backwards

That reframing changed how I think about AI's place in this lineage. My first instinct was to picture AI as a shortcut, with natural language going straight to raw 0s and 1s, skipping the "muddied" layers we've piled up over the decades. The more I sat with it, the more I think that instinct is backwards. The performance we chase lives in the optimizer, and the optimizer is at its most powerful when it's handed rich, high-level intent to work with. Strip the stack down and you don't get a faster path to the machine. You get a weaker one, with nothing left to inspect or test along the way.

### The Real Shift: A New Layer on Top

So here's the version I actually believe. AI isn't replacing the layers beneath it. It's becoming a new layer above them. Natural language is poised to become the highest rung on the ladder, and the LLM starts to behave like a compiler front-end, lowering our intent into the high-level code and optimized machine instructions we already trust. We don't delete the middle of the stack. We make the stack taller. "Another abstraction," in the most literal sense: a new top layer that speaks human and compiles down.

### But Aren't LLMs Probabilistic?

That framing also resolves a tension I kept circling. LLMs are probabilistic, while the compilers we lean on are deterministic, so won't that mismatch eventually bite us? My honest read is that capability will keep driving correctness up, perhaps remarkably so, but determinism was never really the model's job to provide. The reason programming languages exist is that they are precise, verifiable encodings of intent. "Make the dashboard faster" describes a thousand different programs, and the language is what pins down which one. No amount of advancement collapses that ambiguity, because the missing information simply isn't in the sentence; it's something we have to specify. Which is exactly why the language stays. It isn't the part AI removes. It's the part AI compiles toward.

### A Taller Stack, Not a Black Box

Put those together and the picture gets clearer, and honestly more exciting than my first sketch. We're not flattening decades of engineering into a black box. We're adding a new highest layer, the most human-readable interface we've ever had, sitting on top of everything we've already built and translating our problem-solving into something the machine can run. The medium I was reaching for all along turns out not to be a shortcut past the stack, but a new summit on top of it. And that, to me, is an abstraction in its purest form, maybe the ultimate interface between human and machine.

### What Comes Next

What comes after that? I'm not sure. But I'm genuinely excited to find out!
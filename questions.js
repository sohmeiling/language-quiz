const questions = [
  {
    prompt: "In 1957, Noam Chomsky published ‘Syntactic Structures’, presenting a major challenge to the behaviorist view of language proposed by B. F. Skinner. Which of the following core arguments did Chomsky advance?",
    correct: 3,
    options: [
      ["Children must be explicitly taught formal grammatical rules before they can construct negative statements or ask questions.", "Research shows children naturally acquire language and follow complex grammatical rules without explicit instruction or conscious awareness of those rules."],
      ["Speech production is localized strictly to Broca's area, making cognitive mental representations irrelevant to language study.", "Chomsky emphasized studying language as a window into the properties of the mind, rejecting the view that mental representations should be excluded from psychology."],
      ["Language acquisition is entirely determined by environmental rewards and auditory imitation during early childhood.", "This describes B. F. Skinner's behaviorist approach in ‘Verbal Behavior’, which Chomsky strongly opposed."],
      ["Human language is genetically programmed, enabling children to acquire complex grammar without reliance on operant reinforcement.", "Chomsky proposed that human language capacity is coded in the genes, allowing universal language acquisition despite wide variations across cultures."]
    ]
  },
  {
    prompt: "What is the primary objective of psycholinguistics, and which two of its core concerns focus specifically on how people understand and mentally structure language?",
    correct: 3,
    options: [
      ["To map anatomical vocal structures, with focus on speech production and vocal physiology.", "While speech production is a subfield, psycholinguistics centers on psychological and cognitive mechanisms rather than physical vocal anatomy."],
      ["To catalog global dialects, with focus on historical linguistics and language evolution.", "Cataloging dialects belongs to sociolinguistics or historical linguistics, not psycholinguistics."],
      ["To treat brain trauma, with focus on brain ablation and single-unit neurophysiology.", "Brain ablation and neurotrauma treatments belong to neuropsychology and medicine rather than cognitive psycholinguistics."],
      ["To discover the psychological processes of language, with focus on comprehension and representation.", "Psycholinguistics studies how humans acquire and process language, with comprehension (how people understand spoken/written language) and representation (how language is structured in the mind) being central topics."]
    ]
  },
  {
    prompt: "In an experiment conducted by Pollack and Pickett (1964), recorded conversations of participants were analyzed by presenting individual isolated words back to them. What did the results reveal about word perception?",
    correct: 1,
    options: [
      ["Participants easily identified 100% of the words, proving that acoustic signals provide distinct boundaries between words.", "Participants only recognized about 50% of isolated words, showing that acoustic signals alone are often ambiguous out of context."],
      ["Participants could identify only about half of the isolated words, demonstrating that sentence context is vital for perceiving spoken words.", "The difficulty in identifying isolated words from one's own speech highlights that normal speech perception relies heavily on top-down context provided by surrounding words."],
      ["Participants identified words faster when presented in isolation than when embedded in fluent speech.", "Words are actually much harder to identify in isolation because the context that assists speech segmentation and word recognition is removed."],
      ["Participants' ability to recognize words was entirely dependent on working memory capacity rather than auditory context.", "The key finding demonstrated the critical role of linguistic context in speech perception, not individual working memory differences."]
    ]
  },
  {
    prompt: "Which of the following statements accurately describe universal properties of human language across different cultures?",
    correct: [0, 2, 3],
    options: [
      ["Language is present in every human culture, including historically isolated groups.", "Human communities develop and use language even when they have had little contact with other groups."],
      ["Children in non-Western cultures bypass early babbling and immediately produce complex sentences at one year of age.", "Babbling is an early stage of language development across cultures. Complex sentences develop later."],
      ["All humans with normal capacities develop a language and follow complex grammatical rules without formal instruction.", "Children acquire the grammar of the languages they are exposed to through everyday interaction, without needing formal grammar lessons."],
      ["While languages use different words and sounds, all include structural categories like nouns and verbs, as well as systems for negation and referring to time.", "Languages can negate statements and refer to time in different ways. For example, a language can refer to the past using a time expression such as ‘yesterday’."],
    ]
  },
  {
    prompt: "When measuring eye movements while a person reads a text, how does the word frequency effect influence reading behavior?",
    correct: 0,
    options: [
      ["Readers fixate for longer durations on low-frequency words because they require more time to access from the mental lexicon.", "The word frequency effect demonstrates that less familiar words require more cognitive processing, resulting in longer eye fixations during reading."],
      ["Low-frequency words are skipped entirely during visual scanning due to top-down prediction.", "High-frequency or predictable words are more likely to be skipped, whereas low-frequency words require direct fixation."],
      ["Readers fixate longer on high-frequency words because they carry more semantic complexity in a sentence.", "High-frequency words are accessed more rapidly from memory, leading to shorter fixation times, not longer."],
      ["Word frequency has no impact on eye fixations; readers spend equal time on every printed word.", "Eye-tracking studies clearly demonstrate that fixation durations vary systematically based on word frequency."]
    ]
  },
  {
    prompt: "A reader encounters the sentence: ‘After the musician played the piano was wheeled off of the stage.’ Initially, the reader assumes ‘the piano’ is the direct object of ‘played,’ but experiences confusion upon reaching ‘was wheeled.’ Which parsing principle explains this initial grouping error?",
    correct: 2,
    options: [
      ["Anaphoric inference, where pronouns are misattributed to preceding nouns.", "Anaphoric inference deals with resolving pronouns across sentences, not clause structure parsing within a sentence."],
      ["Visual world paradigm, where scene context overrides syntactic predictions.", "The visual world paradigm involves eye-tracking while observing physical objects, not parsing written text errors."],
      ["Late closure, which leads the parser to assume that each new word belongs to the current phrase being processed.", "Under the garden path model, the syntactic principle of late closure attaches incoming words to the ongoing clause, causing a misinterpretation when the main verb appears."],
      ["Biased dominance, where a low-frequency word meaning suppresses a high-frequency meaning.", "Biased dominance refers to lexical ambiguity at the single-word level, not structural phrase parsing."]
    ]
  },
  {
    prompt: "Consider the sentence pair: ‘We checked the picnic supplies. The beer was warm.’ According to the given–new contract, why does a reader take longer to process the second sentence compared to when it follows ‘We got some beer out of the trunk’?",
    correct: 0,
    options: [
      ["The reader must perform a bridging inference to connect ‘picnic supplies’ to ‘beer’, as ‘beer’ was not explicitly introduced as given information.", "When the given information does not explicitly mention the item, the reader must take extra time to infer that beer was part of the picnic supplies."],
      ["The syntactic structure of the first sentence violates late closure rules.", "The sentence contains no temporary syntactic ambiguity or garden path structure."],
      ["The reader experiences a P600 ERP spike due to an ungrammatical verb phrase.", "The sentence is grammatically correct; the processing delay is caused by thematic inference, not syntactic errors."],
      ["The word ‘warm’ exhibits biased dominance in the context of beverages.", "Dominance refers to multiple word meanings in lexical processing, not establishing narrative connections between sentences."]
    ]
  },
  {
    prompt: "Which of the following lines of evidence support the constraint-based approach to parsing over the syntax-first garden path model?",
    correct: [0, 2, 3],
    options: [
      ["Information from the surrounding visual scene (visual world paradigm) influences syntactic parsing before a sentence is completed.", "The objects a listener can see can guide how they interpret an ambiguous phrase while the sentence is still unfolding."],
      ["Syntactic rules like late closure operate in complete isolation from context during initial sentence processing.", "This statement describes the syntax-first prediction that initial parsing relies on syntactic rules alone."],
      ["Word meaning (semantics) can immediately alter how a sentence is parsed as it unfolds.", "A word’s meaning can make one grammatical interpretation more plausible, influencing which structure the reader adopts as they read."],
      ["A reader's memory load and prior experience with specific language constructions affect how easily a sentence is parsed.", "Familiar constructions can be easier to recognize, and memory load affects how much of the sentence the reader can keep in mind while interpreting it."]
    ]
  },
  {
    prompt: "An investigator reads a story to a subject: ‘William Shakespeare wrote Hamlet while sitting at his desk.’ Later, the subject reports that Shakespeare was using a quill pen, even though no writing tool was mentioned in the text. What cognitive mechanism accounts for this memory insertion?",
    correct: 3,
    options: [
      ["Anaphoric inference, where a pronoun is incorrectly assigned to a noun antecedent.", "Anaphoric inferences connect pronouns (e.g., ‘he’) to nouns across sentences, rather than inferring unstated objects."],
      ["Syntactic priming, where a speaker repeats the grammatical structure of a conversational partner.", "Syntactic priming involves copying sentence syntax in speech production, not memory inferences during comprehension."],
      ["Causal inference, where an event in one clause is assumed to cause an event in the next.", "Causal inferences establish cause-and-effect relationships between sequential events, not tools used in an action."],
      ["Instrument inference, where general knowledge about a historical era leads the listener to infer the tool used to perform an action.", "Instrument inference occurs when a reader or listener fills in unstated details about tools or methods based on world knowledge."]
    ]
  },
  {
    prompt: "In an event-related potential (ERP) experiment, researchers measure brain activity while participants listen to sentences containing errors. How do brain responses differ between semantic violations and syntactic violations?",
    correct: 1,
    options: [
      ["Semantic violations suppress frontal lobe activity, while syntactic violations deactivate Wernicke's area completely.", "ERP measures electrical voltage fluctuations on the scalp over time, not complete regional deactivations."],
      ["Semantic violations produce a larger N400 wave, whereas syntactic violations produce a larger P600 wave.", "The N400 wave is sensitive to word meaning anomalies (e.g., ‘The cat won't bake’), whereas the P600 wave responds to grammatical structure errors (e.g., ‘The cats won't eating’)."],
      ["Both semantic and syntactic violations generate identical ERP patterns, demonstrating shared neural timing.", "The distinct timing and polarity of N400 and P600 show that the brain processes semantic and syntactic errors through distinct electrophysiological responses."],
      ["Syntactic violations trigger an N400 response, whereas semantic violations trigger a P600 response.", "This reverses the established ERP components; N400 tracks semantics and P600 tracks syntax."]
    ]
  },
  {
    prompt: "Two participants engage in a task where one describes a complex geometric arrangement over an intercom so the other can assemble it. Initially, descriptions are long and detailed, but over successive trials, the partners adopt concise, shared terms like ‘the staircase’. What conversational mechanism is demonstrated?",
    correct: 3,
    options: [
      ["Biased dominance, where a word's secondary meaning replaces its primary definition.", "Biased dominance relates to the relative frequency of multiple meanings of a single lexical item in memory."],
      ["Speech segmentation, where sound waves are broken into distinct phonemes.", "Speech segmentation is the perceptual process of distinguishing individual words within a continuous acoustic stream."],
      ["Syntactic priming, where partners align grammatical structures without altering word choice.", "Syntactic priming involves repeating sentence structures, whereas establishing common ground refines conceptual meaning and terminology."],
      ["Establishing common ground, where conversational partners collaborate to create shared understandings and efficient references.", "Through collaborative interaction, speakers establish common ground, developing shared vocabulary and referential shorthand to optimize communication."]
    ]
  },
  {
    prompt: "When a word has multiple meanings, how does meaning dominance (balanced vs. biased dominance) interact with sentence context during lexical access?",
    correct: 1,
    options: [
      ["Subordinate meanings are never activated under any circumstances if a dominant meaning exists.", "Subordinate meanings can be activated, especially when favored by context or when dominance is balanced."],
      ["For words with biased dominance, if prior context favors the less frequent (subordinate) meaning, both meanings are activated, resulting in slower processing.", "When context points to a subordinate meaning, the dominant meaning still gets activated due to its frequency, creating competition that slows down reading."],
      ["For words with balanced dominance, sentence context completely prevents the non-target meaning from being activated.", "When meanings are similarly frequent, both can initially be activated before the reader settles on the interpretation that fits the sentence."],
      ["Lexical access bypasses word frequency effects entirely whenever any sentence context is present.", "Word frequency and dominance continuously interact with context rather than being bypassed by it."]
    ]
  },
  {
    prompt: "Which of the following statements accurately summarize research findings regarding cognitive and neural overlaps between music and language processing?",
    correct: [1, 2, 3],
    options: [
      ["Music processing is strictly localized to the right hemisphere, while language is localized exclusively to the left hemisphere.", "Both hemispheres can contribute to music and language processing. The balance of activity depends on the task and the feature being processed."],
      ["Brain imaging shows that while music and language can activate overlapping cortical regions, they can also recruit functionally distinct networks.", "Activity in the same broad cortical region can come from different populations of neurons. Imaging can identify areas with different responses to music and language."],
      ["Some studies of people with agrammatic Broca's aphasia have reported difficulties processing complex structures in both language and music.", "Some studies have found difficulties with both sentence grammar and musical structure. Other studies have found that musical structure processing can be preserved."],
      ["Violations of musical syntax (e.g., an out-of-key chord) can elicit a P600 ERP wave similar to that elicited by grammatical errors in language.", "ERP studies have observed a late positive response to unexpected chords and to grammatical violations in sentences."]
    ]
  },
  {
    prompt: "Tanenhaus and coworkers (1995) tracked participants' eye movements while presenting spoken commands like ‘Put the apple on the towel in the box’ with different visual scene arrangements. What key conclusion emerged from this visual world paradigm experiment?",
    correct: 2,
    options: [
      ["Visual scene context has no impact on sentence parsing until after syntactic rules have fully built a sentence tree.", "Participants' eye movements changed with the visual context while they were still hearing the instruction."],
      ["Eye movements are purely random until the final word of an utterance is spoken.", "Eye movements were tightly locked to the spoken words as the sentence unfolded in real time."],
      ["Listeners use real-time visual scene context immediately to resolve temporary syntactic ambiguities, supporting constraint-based models.", "When two apples were present, participants interpreted ‘on the towel’ as identifying which apple to pick. Their eye movements showed that the visual scene influenced parsing as they listened."],
      ["Sentence parsing is governed exclusively by working memory span, regardless of visual environment.", "The presence of visual objects directly altered how listeners parsed ambiguous prepositional phrases."]
    ]
  },
  {
    prompt: "Syntactic priming is a phenomenon observed during natural dialogue. Which of the following statements correctly describe its mechanism and cognitive significance?",
    correct: [1, 2, 3],
    options: [
      ["Syntactic priming occurs only when speakers share identical vocabulary and talk about the exact same subject matter.", "Speakers can reuse a grammatical structure with different words and on different topics."],
      ["Syntactic priming can ease speech planning by allowing conversational partners to coordinate grammatical structures.", "A recently used structure is more readily available when planning the next utterance."],
      ["In Branigan et al. (2000), participants were more likely to describe a picture using a prepositional dative after hearing a partner use that structure.", "After hearing a construction such as ‘showed a book to the chef,’ participants were more likely to use the same grammatical pattern in their own picture description."],
      ["Hearing or producing a sentence with a specific syntactic construction increases the likelihood of using that same grammatical form in subsequent speech.", "Recently encountered or produced structures are more likely to be selected again, even when the new sentence conveys a different message."]
    ]
  }
];

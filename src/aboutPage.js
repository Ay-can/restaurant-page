export default function createAboutContent() {
  const content = document.querySelector("#content");
  const p = document.createElement("p");

  p.innerText = `
    Damn, here we go again
    Common passed on this beat
    I made it to a jam
    Now everything I'm not, made me everything I am
    Damn, here we go again
    People talkin' shit, but when the shit hit the fan
    Everything I'm not, made me everything I am

    I'll never be picture-perfect Beyonce'
    Be light as Albi or black as Chauncey
    Remember him from blackstreet
    He was as black as the street was
    I'll never be as laid back as this beat was
    I never could see why people'll reach a
    Fake-ass facade that they couldn't keep up
    Ya see how I creeped up?
    Ya see how I played a big role in Chicago like Queen Latifah?
    I never rock a mink coat in a winter time like Killa Cam
    Or rock some mink boots in the summertime like Will.I.Am

    Let me know if you feel it man
    Cause everything I'm not, made me everything I am
    Damn, here we go again
    Everybody sayin' what's not for him
    Everything I'm not, made me everything I am
    Damn, here we go again
    People talkin' shit, but when the shit hit the fan
    Everything I'm not, made me everything I am

    And I'm back to tear it up
    Haters, start your engines
    I hear 'em gearin' up
    People talkin' so much shit about me at barbershops
    They forget to get their haircut
    Okay fair enough, the streets is flarin' up
    Cause they want gun-talk, or I don't wear enough
    Baggy clothes, Reebok's, or A-di-dos
    Can I add that he do spaz out at his shows
    So say goodbye to the N-double-A-C-P award
    Goodbye to the India Arie award
    They'd rather give me the nigga-please award
    But I'll just take the I-got-a-lot a-cheese award

    Damn, here we go again
    Everything I'm not, made me everything I am
    Damn, here we go again
    People talkin' shit, but when the shit hit the fan
    Everything I'm not, made me everything I am

    I know that people wouldn't usually rap this
    But I got the facts to back this
    Just last year, Chicago had over six hundred caskets
    Man, killin's some wack shit
    Oh, I forgot, 'cept for when niggas is rappin'
    Do you know what it feel like when people is passin'?
    He got changed over his chains, a block off Ashlin
    I need to talk to somebody, pastor
    The church want time, so I can't afford to pay
    The slip on the door, cause I can't afford to stay
    My 15 seconds up, but I got more to say
    That's enough Mr. West, please no more today

    Damn, here we go again
    Everybody sayin' what's not for him
    But Everything I'm not, made me everything I am
    Damn, here we go again
    People talkin' shit, but when the shit hit the fan
    Everything I'm not, made me everything I am 
      `;

  p.id = "about-text";
  content.appendChild(p);
}

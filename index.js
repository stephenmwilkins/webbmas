

const zeroPad = (num, places) => String(num).padStart(places, '0')

const content_text = [
  "Webb’s primary mirror is made up of 18 segments and is 6.6m wide - this is almost a 6 times larger area than Hubble’s.",
  "Webb is about the same size as a tennis court but also 8m high.",
  "Webb’s mirrors are coated in gold to better reflect infrared light. The mirrors contain about 50g of gold, currently worth about £2000.",
  "Webb will operate at –223°C, almost as cold as Pluto.",
  "Webb will be launched from the European Space Agency’s Guiana Space Centre in South America.",
  "Webb will be launched using an Ariane 5 rocket.",
  "Webb is a joint endeavour of NASA together with the European and Canadian space agencies. Thousands of astronomers across the world will use Webb to answer a range of scientific questions.",
  "Webb has 4 scientific instruments: NIRCam, NIRSpec, NIRISS, and MIRI.",
  "The UK built one of the main instruments on Webb: the Mid Infrared Instrument (MIRI) - a powerful camera and spectrometer to produce images and measure the light from distant targets.",
  "Over the course of 6 months Webb can observe almost any point in the sky. However, it would overheat if it tried to observe the Sun, Mercury, Venus, Earth, or Moon.",
  "Webb will orbit the Sun once a year, staying 1.5 million km further out than the Earth, almost 5 times further away than the Moon. ",
  "It will take Webb a month to reach its final location and it will be 6 months before routine science operations begin.",
  "Webb’s five-layer sunshield protects it from the strong infrared light from the Sun, Earth, and Moon so it can accurately detect faint infrared light from distant objects in the universe.",
  "Webb will be able to detect oxygen and other organic molecules in the atmospheres of nearby exoplanets using its sensitive spectrographs. These molecules will reveal clues to the potential habitability of other worlds.",
  "Webb will be able to observe certain hot, young exoplanets using a technique called direct imaging.",
  "Webb will observe the planets and minor bodies of the Solar System in the infrared.",
  "Webb will observe galaxies stretching back over almost the entire history of the Universe. The most distant objects it will observe will be more than 40 billion light years away.",
  "Webb will be able to peer through dust and gas to see stars and planets forming."
];

const credits_text = [
"Credit: NASA/Chris Gunn.",
"Artist's impression of Webb. Credit: NASA, ESA.",
"A single mirror segment. Credit: NASA.",
"The James Webb Space Telescope sitting in front of a giant thermal–vacuum chamber in NASA’s Johnson Space Center, where it has been undergoing tests at cryogenic temperatures. Credit: NASA/D. Stover.",
"The Guiana Space Centre. Credit: ESA.",
"Webb’s Ariane 5 core stage. Credit: ESA/CNES/Arianespace.",
"The NASA, ESA, and Canadian Space Agency logos. Credit: NASA, ESA, CSA.",
"Webb’s four instruments being lowered into the telescope. Credit: NASA/Chris Gunn.",
"MIRI, the mid-infrared camera and spectrograph (left), was installed in the science payload module of the James Webb Space Telescope (right) on 29 April 2013 at the NASA Goddard Space Flight Center. Credit: NASA/C. Gunn.",
"Credit: University of Sussex/Stephen Wilkins.",
"Credit: University of Sussex/Stephen Wilkins. ",
"Credit: University of Sussex/Stephen Wilkins. ",
"Credit: Northrop Grumman.",
"Artist’s impression of the planet K2-18b. Credit: ESA/Hubble, M. Kornmesser.",
"This image from ESO's Very Large Telescope (VLT) shows the newly discovered planet HD95086 b, next to its parent star. Credit. ESO/J. Rameau.",
"Infrared view of Jupiter captured by the Near-InfraRed Imager on the Gemini North telescope in Hawaii. Credit: International Gemini Observatory/NOIRLab/NSF/AURA, M.H. Wong (UC Berkeley) et al. Acknowledgments: M. Zamani.",
"Credit: NASA, ESA, and S. Beckwith (STScI) and the HUDF Team.",
"A portion of the Eagle nebula as seen by Hubble in infrared light. Credit: NASA, ESA/Hubble and the Hubble Heritage Team."
];








$(document).ready(function(){

  $(".panel-inner").click(function(event){
    var day = event.target.id;
    const today = new Date();
    const thisday = new Date(2021, 10, day);
    if (today.getTime() > thisday.getTime()) {
      $(this).toggleClass('panel-inner-active');
    } else {
      // alert("It's not yet December "+day);
      // console.log()
    }
  });

  $(".content_container").click(function(){
    $('.content_container').css('visibility','hidden');
    $('.blackout').css('visibility','hidden');
  });

  $(".panel-back").click(function(event){
    $('.blackout').css('visibility','visible');
    var day = event.target.id;
    $('.content_container').css('visibility','visible');
    $("#content_text").html(content_text[day-1]);
    $("#credits_text").html(credits_text[day-1]);
    $('.content').css('background-image', 'url(imgs/images/images.' + zeroPad(day, 3) + '.jpeg)');
  });
});

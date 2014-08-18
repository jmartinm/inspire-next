define(function(require, exports, module) {
var conferencesMock = [{
  "meeting_name": [{
    "date": "9-16 Oct 1968",
    "coference_code": "C68-10-09",
    "meeting": "USSR National Particle Accelerator Conference",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "16 Jun - 25 Jul 1969",
    "coference_code": "C69-06-16",
    "meeting": "Brandeis Summer Institute in Theoretical Physics",
    "location": "Waltham, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "3-19 July 1969",
    "coference_code": "C69-07-03",
    "meeting": "7th International School of Subnuclear Physics (Ettore Majorana): Subnuclear Phenomena",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Sep 1969",
    "coference_code": "C69-09-23",
    "meeting": "International Seminar on Vector Mesons and Electromagnetic Interactions",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Jan 1970",
    "coference_code": "C70-01-21",
    "meeting": "Coral Gables Conference on Fundamental Interactions at High Energy",
    "location": "Coral Gables, Florida"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-13 Mar 1970",
    "coference_code": "C70-03-11",
    "meeting": "12th Scintillation and Semiconductor Conference",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Apr 1970",
    "coference_code": "C70-04-14",
    "meeting": "Symposium on the Past Decade in Particle Theory",
    "location": "Austin, Tex."
  }]
}, {
  "meeting_name": [{
    "date": "8-12 Sep 1970",
    "coference_code": "C70-09-08",
    "meeting": "International Conference on Instrumentation for High-Energy Physics,",
    "location": "Dubna, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 Apr 1971",
    "coference_code": "C71-04-14",
    "meeting": "International Conference on Meson Resonances and Related Electromagnetic Phenomena",
    "location": "Bologna, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "5-10 May 1971",
    "coference_code": "C71-05-05",
    "meeting": "2nd GIFT Seminar in Theoretical Physics",
    "location": "Madrid, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "30 Jun - 6 Jul 1971",
    "coference_code": "C71-06-30",
    "meeting": "International Conference on Elementary Particles",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "8-26 Jul 1974",
    "coference_code": "C71-07-08",
    "meeting": "9th International Conference on Subnuclear Physics: Properties of the Fundamental Interactions",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "7-11 Jul 1971",
    "coference_code": "C71-07-09",
    "meeting": "Symposium on Nucleons and Weak Interactions",
    "location": "Zagreb, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "2-20 Aug 1971",
    "coference_code": "C71-08-01",
    "meeting": "International Seminar Course on Computing as a Language of Physics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "2-14 Aug 1971",
    "coference_code": "C71-08-03",
    "meeting": "International School of Physics, 'Enrico Fermi'.",
    "location": "Varenna, Italy"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-25 Aug 1971",
    "coference_code": "C71-08-16",
    "meeting": "12th International Cosmic Ray Conference",
    "location": "Hobart, Australia"
  }]
}, {
  "meeting_name": [{
    "date": "7-11 Sep 1971",
    "coference_code": "C71-09-07",
    "meeting": "4th International Conference on High-Energy Physics and Nuclear Structure",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "23-30 Sep 1971",
    "coference_code": "C71-09-23",
    "meeting": "6th International Symposium on Nuclear Electronics",
    "location": "Warsaw, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "8-10 Oct 1971",
    "coference_code": "C71-10-08",
    "meeting": "Informal Conference on Local Currents and their Applications",
    "location": "Princeton, New Jersey"
  }]
}, {
  "meeting_name": [{
    "date": "2-13 Aug 1971",
    "coference_code": "C71-08-04",
    "meeting": "4th Hawaii Topical Conference in Particle Physics",
    "location": "Honolulu, Hawaii"
  }]
}, {
  "meeting_name": [{
    "date": "12-16 Oct 1971",
    "coference_code": "C71-10-12",
    "meeting": "International Symposium on Data Handling of Bubble and Spark Chambers",
    "location": "Dubna, USSR"
  }, {
    "meeting": "International Symposium on Data-handling of Bubble and Spark Chambers"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Nov 1971",
    "coference_code": "C71-11-19",
    "meeting": "K-Meson Physics Below 5-GeV/c",
    "location": "Chilton, England"
  }]
}, {
  "meeting_name": [{
    "date": "4-23 Jan 1972",
    "coference_code": "C72-01-04",
    "meeting": "4th Brasilian Symposium on Theoretical Physics",
    "location": "Rio de Janeiro, Brasil"
  }, {
    "meeting": "IV"
  }]
}, {
  "meeting_name": [{
    "date": "9-11 Feb 1972",
    "coference_code": "C72-02-09",
    "meeting": "Triangle Seminar on Experimental Topics",
    "location": "Budapest, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "21 Feb - 4 Mar, 1972",
    "coference_code": "C72-02-21",
    "meeting": "11th International Universitatswochen fur Kernphysik: (International School of Particle Physics: Elementary Particle Physics - Multiparticle Aspects)",
    "location": "Schladming, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "5-17 Mar 1972",
    "coference_code": "C72-03-05",
    "meeting": "Rencontre de Moriond, 7th",
    "location": "Meribel les Allues, France"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Mar 1972",
    "coference_code": "C72-03-27",
    "meeting": "Symposium on Nucleon-Antinucleon Annihilations",
    "location": "Chexbres, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Apr 1972",
    "coference_code": "C72-04-05",
    "meeting": "4th International Conference on High-Energy Collisions",
    "location": "Oxford, England"
  }]
}, {
  "meeting_name": [{
    "date": "10-14 Apr 1972",
    "coference_code": "C72-04-10",
    "meeting": "1st European Conference on Computational Physics",
    "location": "Geneva, Switzerland (CERN)"
  }]
}, {
  "meeting_name": [{
    "date": "17-28 Apr 1972",
    "coference_code": "C72-04-17",
    "meeting": "Spring Study on Accelerator Theory",
    "location": "Geneva, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "28-29 Apr 1972",
    "coference_code": "C72-04-28",
    "meeting": "International Conference on Experimental Meson Spectroscopy, 3rd",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "1-3 May 1972",
    "coference_code": "C72-05-01",
    "meeting": "5th Applied Superconductivity Conference",
    "location": "Annapolis, Maryland"
  }]
}, {
  "meeting_name": [{
    "date": "2-3 May 1972",
    "coference_code": "C72-05-02",
    "meeting": "Informal Meeting on Electromagnetic Interactions",
    "location": "Frascati, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "4-5 May 1972",
    "coference_code": "C72-05-04",
    "meeting": "Topical Meeting on the Outlook for Broken Conformal Symmetry in Elementary Particle Physics",
    "location": "Frascati, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "15-31 May 1972",
    "coference_code": "C72-05-15",
    "meeting": "CERN School of Physics",
    "location": "Grado, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "30 May - 1 Jun 1972",
    "coference_code": "C72-05-30",
    "meeting": "European Spiral Reader Symposium",
    "location": "Stockholm, Sweden"
  }]
}, {
  "meeting_name": [{
    "date": "5-9 Jun 1972",
    "coference_code": "C72-06-05",
    "meeting": "Colloquium on Group Theoretical Methods in Physics",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "8-18 Jun 1972",
    "coference_code": "C72-06-08",
    "meeting": "12th Cracow School of Theoretical Physics",
    "location": "Zakopane, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "11-17 Jun 1972",
    "coference_code": "C72-06-11",
    "meeting": "1st Europhysics Conference on Neutrinos -- Neutrino '72",
    "location": "Balatonfured, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "19-23 Jun 1972",
    "coference_code": "C72-06-19",
    "meeting": "All Union Conference on Nuclear Reactions at High Energies",
    "location": "Tbilisi, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "20-24 Jun 1972",
    "coference_code": "C72-06-20",
    "meeting": "3rd International Colloquium on Multiparticle Reactions",
    "location": "Zakopane, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "19-23 Jun 1972",
    "coference_code": "C72-06-22",
    "meeting": "Colloquium on Renormalization of Yang-Mills Fields and Applications to Particle Physics",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "26 Jun - 7 Jul 1972",
    "coference_code": "C72-06-26",
    "meeting": "7th Finnish Summer School in Physics",
    "location": "Loma Koli, Finland"
  }]
}, {
  "meeting_name": [{
    "date": "10-15 Jul 1972",
    "coference_code": "C72-07-10",
    "meeting": "8th International Conference on Nuclear Photography and Solid State Track Detectors",
    "location": "Bucharest, Romania"
  }]
}, {
  "meeting_name": [{
    "date": "17-21 Jul 1972",
    "coference_code": "C72-07-17",
    "meeting": "National Laboratory for High-Energy Physics Summer SCHOOL",
    "location": "Ibaraki, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "17-28 Jul 1972",
    "coference_code": "C72-07-18",
    "meeting": "5th International Summer Institute on Theoretical Physics",
    "location": "Kaiserslautern,Germany"
  }]
}, {
  "meeting_name": [{
    "date": "17-21 Jul 1972",
    "coference_code": "C72-07-20",
    "meeting": "International Conference on Pade Approximants and their Applications",
    "location": "Canterbury, England"
  }]
}, {
  "meeting_name": [{
    "date": "18-21 Jul 1972",
    "coference_code": "C72-07-22",
    "meeting": "6th International Cyclotron Conference",
    "location": "Vancouver, British Columbia, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "7-11 Aug 1972",
    "coference_code": "C72-08-07",
    "meeting": "3rd International Conference on Atomic Physics",
    "location": "Boulder, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "21-25 Aug 1972",
    "coference_code": "C72-08-21",
    "meeting": "XIIIth International Conference on Low Temperature Physics",
    "location": "Boulder, Colo."
  }, {}, {}]
}, {
  "meeting_name": [{
    "date": "28 Aug-2 Sep 1972",
    "coference_code": "C72-08-28",
    "meeting": "Canadian Institute of Particle Physics Summer School",
    "location": "Montreal, Quebec, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "28 Aug- 1 Sep 1972",
    "coference_code": "C72-08-29",
    "meeting": "International Conference on Few Particle Problems in the Nuclear Interaction",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "4-8 Sep 1972",
    "coference_code": "C72-09-04",
    "meeting": "International Conference on Nuclear Moments and Nuclear Structure",
    "location": "Osaka, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "6-13 Sep 1972",
    "coference_code": "C72-09-06",
    "meeting": "16th International Conference on High-Energy Physics",
    "location": "Batavia, Illinois"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-15 Sep 1972",
    "coference_code": "C72-09-14",
    "meeting": "International Conference on Streamer Chamber Technology",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "20-29 Sep 1972",
    "coference_code": "C72-09-20",
    "meeting": "2nd Tirrenia Study Week",
    "location": "Tirrenia, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "3-9 Oct 1972",
    "coference_code": "C72-10-03.1",
    "meeting": "2nd International Symposium on High-Energy and Elementary Particle Physics",
    "location": "Strbske Pleso, Czechoslovakia"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "3-6 Oct 1972",
    "coference_code": "C72-10-04",
    "meeting": "2nd General Conference of the European Physical Society",
    "location": "Wiesbaden, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "5-16 Oct 1972",
    "coference_code": "C72-10-05",
    "meeting": "School of Young Scientists in High-Energy Physics",
    "location": "Sukhumi, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "9-10 Oct 1972",
    "coference_code": "C72-10-09",
    "meeting": "Triangle Seminar on Experimental High-Energy Physics",
    "location": "Vienna, Austria"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "10-13 Oct 1972",
    "coference_code": "C72-10-10",
    "meeting": "Proton Linear Accelerator Conference",
    "location": "Los Alamos, N.Mex."
  }]
}, {
  "meeting_name": [{
    "date": "2-4 Oct 1972",
    "coference_code": "C72-10-12",
    "meeting": "3rd All Union Conference on Charged Particle Accelerators",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "12-18 Dec 1972",
    "coference_code": "C72-12-12",
    "meeting": "International Conference on Mathematical Problems in Quantum Field Theory & Quantum Statistics",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "12-16 Dec 1972",
    "coference_code": "C72-12-13",
    "meeting": "1st Symposium on High-Energy Physics",
    "location": "Bombay, India"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "3-27 Jan 1973",
    "coference_code": "C73-01-03",
    "meeting": "2nd Argentine Symposium on the Theoretical Physics of Particles and Fields",
    "location": "Bariloche, Argentina"
  }]
}, {
  "meeting_name": [{
    "date": "4-7 Jan 1973",
    "coference_code": "C73-01-04",
    "meeting": "International Symposium for Synchrotron Radiation Users",
    "location": "Daresbury, England"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jan - 1 Feb 1973",
    "coference_code": "C73-01-29",
    "meeting": "American Physical Society Meeting",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "1-2 Feb 1973",
    "coference_code": "C73-02-01",
    "meeting": "Workshop on Kaon Physics",
    "location": "Tsukuba, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "5-16 Feb 1973",
    "coference_code": "C73-02-05",
    "meeting": "12th Internationale Universitatswochen fur Kernphysik: (International School of Particle Physics: Recent Developments in Mathematical Physics)",
    "location": "Schladming, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "6-10 Feb 1973",
    "coference_code": "C73-02-06",
    "meeting": "1st International Winter Meeting on Fundamental Physics",
    "location": "Formigal, Sallent de Gallego, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "14 Feb 1973",
    "coference_code": "C73-02-14",
    "meeting": "Seminar on Track Analysis for Rapid Cycling Bubble Chambers",
    "location": "Chilton, England"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-27 Feb 1973",
    "coference_code": "C73-02-16",
    "meeting": "8th Winter School on Nuclear Physics and Elementary Particles",
    "location": "Leningrad,USSR"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Feb 1973",
    "coference_code": "C73-02-21",
    "meeting": "Heidelberg Spring Meeting: Particle Physics",
    "location": "Heidelberg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "24-25 Feb 1973",
    "coference_code": "C73-02-24",
    "meeting": "Rutherford Informal Meetings on Links Between Weak and Electromagnetic Interactions",
    "location": "Chilton, England"
  }]
}, {
  "meeting_name": [{
    "date": "1 Mar 1973",
    "coference_code": "C73-03-01",
    "meeting": "Symposium on the Pomeron",
    "location": "Argonne, Illinois"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "2-3 Mar 1973",
    "coference_code": "C73-03-02",
    "meeting": "NAL Topical Conference: Diffraction Phenomena - Issues and Answers",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "4-16 Mar 1973",
    "coference_code": "C73-03-04",
    "meeting": "8th Rencontre de Moriond",
    "location": "Meribel-les-Allues, France"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Mar 1973",
    "coference_code": "C73-03-05",
    "meeting": "5th Particle Accelerator Conference: Accelerator Engineering and Technology",
    "location": "San Francisco, California"
  }, {
    "meeting": "PAC 73"
  }]
}, {
  "meeting_name": [{
    "date": "8 Mar 1973",
    "coference_code": "C73-03-08",
    "meeting": "Meeting of the Royal Society on Proton-Proton Scattering at High Energies",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "15-17 Mar 1973",
    "coference_code": "C73-03-15",
    "meeting": "Conference on Recent Advances in Particle Physics",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "17-18 Mar 1973",
    "coference_code": "C73-03-17",
    "meeting": "Informal Meeting on Physics with Polarized Targets at High Energy",
    "location": "Abingdon, England"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "19-22 Mar 1973",
    "coference_code": "C73-03-19",
    "meeting": "American Physical Society Meeting",
    "location": "San Diego, California"
  }]
}, {
  "meeting_name": [{
    "date": "23 Mar 1973",
    "coference_code": "C73-03-23",
    "meeting": "Pion Exchange Meeting",
    "location": "Daresbury, England"
  }]
}, {
  "meeting_name": [{
    "date": "26-30 Mar 1973",
    "coference_code": "C73-03-26",
    "meeting": "International Conference on Photonuclear Reactions and Applications",
    "location": "Asilomar, California"
  }]
}, {
  "meeting_name": [{
    "date": "26-28 Mar 1973",
    "coference_code": "C73-03-27",
    "meeting": "International Conference on New Results from Experiments on High Energy Collisions",
    "location": "Nashville, Tennessee"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "27-30 Mar 1973",
    "coference_code": "C73-03-27.1",
    "meeting": "Symposium on Proportional Chamber Techniques",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "26-31 Mar 1973",
    "coference_code": "C73-03-29",
    "meeting": "Informal Meeting on Recent Developments in High-Energy Physics",
    "location": "Frascati, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "28-30 Mar 1973",
    "coference_code": "C73-03-30",
    "meeting": "5th Conference on Nuclear Structure and High-Energy Physics",
    "location": "Liverpool, England"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "28-30 Mar 1973",
    "coference_code": "C73-03-31",
    "meeting": "International Conference on Pi-Pi Scattering and Associated Topics",
    "location": "Tallahassee,Fla."
  }]
}, {
  "meeting_name": [{
    "date": "4-13 Apr 1973",
    "coference_code": "C73-04-04",
    "meeting": "Topical Meeting on Intermediate Energy Physics",
    "location": "Zouz, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "9-11 Apr 1973",
    "coference_code": "C73-04-09",
    "meeting": "Mexican-Israeli Scientific Symposium",
    "location": "Mexico City, Mexico"
  }]
}, {
  "meeting_name": [{
    "date": "11-18 Apr 1973",
    "coference_code": "C73-04-11",
    "meeting": "4th GIFT Seminar on Theoretical Physics: Strong Interactions and High Energies",
    "location": "Barcelona, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "20-21 Apr 1973",
    "coference_code": "C73-04-20",
    "meeting": "Conference on Baryon Resonances",
    "location": "West Lafayette, Indiana"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Apr 1973",
    "coference_code": "C73-04-23",
    "meeting": "American Physical Society Meeting",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "Apr 1973",
    "coference_code": "C73-04-23.1",
    "meeting": "3rd International Seminar on Nonlocal Quantum Field Theory",
    "location": "Alushta, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "26-27 Apr 1973",
    "coference_code": "C73-04-26",
    "meeting": "Conference on Cosmic Rays and Nuclear Physics",
    "location": "Durham, England"
  }]
}, {
  "meeting_name": [{
    "date": "8-12 May 1973",
    "coference_code": "C73-05-08",
    "meeting": "International Conference on Instrumentation for High-Energy Physics",
    "location": "Frascati, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-12 May 1973",
    "coference_code": "C73-05-11",
    "meeting": "Conference on Causality and Physical Theories",
    "location": "Detroit, Mich."
  }]
}, {
  "meeting_name": [{
    "date": "16-18 May 1973",
    "coference_code": "C73-05-16",
    "meeting": "3rd European Seminar on Real Time Programming",
    "location": "Ispra, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "17 May 1973",
    "coference_code": "C73-05-17",
    "meeting": "Symposium on Advanced Technology Arising from Particle Physics Research",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 May 1973",
    "coference_code": "C73-05-21",
    "meeting": "12th Symposium on Electron, Ion, and Laser Beam Technology",
    "location": "Cambridge, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "21-30 May 1973",
    "coference_code": "C73-05-22",
    "meeting": "Meeting on Hyperfunctions and Theoretical Physics",
    "location": "Nice, France"
  }]
}, {
  "meeting_name": [{
    "date": "28-30 May 1973",
    "coference_code": "C73-05-28",
    "meeting": "Colloque de Physique des Particules (Colloquium on Particle Physics)",
    "location": "Vittel, France"
  }]
}, {
  "meeting_name": [{
    "date": "28-29 May 1973",
    "coference_code": "C73-05-28.2",
    "meeting": "3rd Experimental Triangle Seminar on High-Energy Nuclear Physics",
    "location": "Trieste, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "29-31 May 1973",
    "coference_code": "C73-05-29",
    "meeting": "Conference on Renormalization Group in Critical Phenomena and Quantum Field Theory",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "1-12 Jun 1973",
    "coference_code": "C73-06-01",
    "meeting": "13th Cracow School of Theoretical Physics: Multiparticle Production at High Energies",
    "location": "Zakopane, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "4-6 Jun 1973",
    "coference_code": "C73-06-04",
    "meeting": "Triangle Meeting on Weak Interactions",
    "location": "Smolenice, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "4-8 Jun 1973",
    "coference_code": "C73-06-04.1",
    "meeting": "1973 National Computer Conference and Exposition",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "4 Jun - 4 Sep 1973",
    "coference_code": "C73-06-04.2",
    "meeting": "1973 Physics-Astrophysics Program",
    "location": "Aspen, Colo"
  }]
}, {
  "meeting_name": [{
    "date": "5-16 Jun 1973",
    "coference_code": "C73-06-05",
    "meeting": "International School of Applied Physics 'Ettore Majorana', 5th: High Intensity Relativistic Particle Beams",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "June 1973",
    "coference_code": "C73-06-07.1",
    "meeting": "International Seminar on Deep Inelastic and Multiple Processes and High Energy",
    "location": "Dubna, USSR"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-15 Jun 1973",
    "coference_code": "C73-06-11",
    "meeting": "High-Energy Multiparticle Production Processes (Gordon Research Conference)",
    "location": "Plymouth, New Hampshire"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "17-30 Jun 1973",
    "coference_code": "C73-06-17",
    "meeting": "CERN-JINR SCHOOL OF PHYSICS",
    "location": "Ebeltoft, Denmark"
  }]
}, {
  "meeting_name": [{
    "date": "18-22 Jun 1973",
    "coference_code": "C73-06-18",
    "meeting": "5th International Conference on High-Energy Physics and Nuclear Structure (ICOHEPANS)",
    "location": "Uppsala, Sweden"
  }]
}, {
  "meeting_name": [{
    "date": "12-14 Apr 1972",
    "coference_code": "C72-04-12",
    "meeting": "Conference on Machine Perception of Patterns and Pictures",
    "location": "Teddington, England"
  }]
}, {
  "meeting_name": [{
    "date": "22-26 Jan 1973",
    "coference_code": "C73-01-22",
    "meeting": "10th Coral Gables Conference on Fundamental Interactions",
    "location": "Coral Gables, Florida"
  }]
}, {
  "meeting_name": [{
    "date": "19 Feb - 4 Mar 1973",
    "coference_code": "C73-02-19",
    "meeting": "10th Annual Winter School of Theoretical Physics",
    "location": "Karpacz, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "26-30 Mar 1973",
    "coference_code": "C73-03-26.3",
    "meeting": "5th Aussois Study Session (In French)",
    "location": "Aussois, France"
  }]
}, {
  "meeting_name": [{
    "date": "2-4 Apr 1973",
    "coference_code": "C73-04-02",
    "meeting": "MINERVA Symposium on Physics",
    "location": "Rehovoth, Israel (Weizmann Inst.)"
  }]
}, {
  "meeting_name": [{
    "date": "18-20 Jun 1973",
    "coference_code": "C73-06-18.1",
    "meeting": "American Physical Society Meeting",
    "location": "East Lansing, Mich."
  }]
}, {
  "meeting_name": [{
    "date": "20-23 Jun 1973",
    "coference_code": "C73-06-20",
    "meeting": "Symposium on Symmetry in Nature",
    "location": "Mexico City, Mexico"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Jun 1973",
    "coference_code": "C73-06-25",
    "meeting": "Group Theoretical Methods in Physics",
    "location": "Nijmegen, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "25 Jun - 6 Jul 1973",
    "coference_code": "C73-06-25.2",
    "meeting": "Santa Cruz Summer School in Particle Physics",
    "location": "Santa Cruz, California"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Jun 1973",
    "coference_code": "C73-06-25.1",
    "meeting": "3rd Colloquium on Advanced Computing Methods in Theoretical Physics",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "26-29 Jun 1973",
    "coference_code": "C73-06-26",
    "meeting": "Topical Seminar on Weak Interactions",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "1 Jul - 30 Aug 1973",
    "coference_code": "C73-07-01",
    "meeting": "Summer Session on Theoretical Astrophysics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "1-14 Jul 1973",
    "coference_code": "C73-07-01.1",
    "meeting": "NATO Advanced Study Institute on Renormalization and Invariance in Quantum Field Theory",
    "location": "Capri, Italy"
  }, {
    "meeting": "ASI"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "2-28 July 1973",
    "coference_code": "C73-07-02",
    "meeting": "Cargese Summer Institute: Critical Phenomena and Field Theory",
    "location": "Cargese, France"
  }]
}, {
  "meeting_name": [{
    "date": "2-6 Jul 1973",
    "coference_code": "C73-07-02.1",
    "meeting": "Conference on Nuclear and Hypernuclear Physics with Kaon Beams",
    "location": "Upton, New York"
  }, {
    "meeting": "Summer Study Meeting on Nuclear and Hypernuclear Physics with Kaon Beams"
  }]
}, {
  "meeting_name": [{
    "date": "2-12 Jul 1973",
    "coference_code": "C73-07-02.2",
    "meeting": "Workshop on Weak Interactions with very High-Energy Beams",
    "location": "Billingehus, Sweden"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "6 Jul 1973",
    "coference_code": "C73-07-07",
    "meeting": "Meeting on Experimental Tests for Exotic Electromagnetic Currents",
    "location": "Daresbury, England"
  }]
}, {
  "meeting_name": [{
    "date": "9-28 Jul 1973",
    "coference_code": "C73-07-09",
    "meeting": "1st SLAC Summer Institute on Particle Physics (SSI 73)",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "9 Jul - 3 Aug 1973",
    "coference_code": "C73-07-09.1",
    "meeting": "1973 NAL Summer Study",
    "location": "Aspen, Colo (Chateaux Conf Ctr)"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Jul 1973",
    "coference_code": "C73-07-09.2",
    "meeting": "Current Problems in Quantum Field Theory",
    "location": "Dublin, Ireland"
  }]
}, {
  "meeting_name": [{
    "date": "15-27 Jul 1973",
    "coference_code": "C73-07-15",
    "meeting": "Rutherford School for High-Energy Physicists",
    "location": "Chilton, England"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "17-21 Jul 1973",
    "coference_code": "C73-07-17",
    "meeting": "National Laboratory for High-Energy Physics Summer School",
    "location": "Ibaraki, Japan"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "23-27 Jul 1973",
    "coference_code": "C73-07-23",
    "meeting": "International Symposium of High-Energy Physics",
    "location": "Tokyo, Japan"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Jul 1973",
    "coference_code": "C73-07-23.1",
    "meeting": "IEEE Annual Conference on Nuclear and Space Radiation Effects",
    "location": "Logan, Utah"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Jul 1973",
    "coference_code": "C73-07-24",
    "meeting": "LAMPF Summer School on the Theory of Pion-Nucleus Scattering",
    "location": "Los Alamos, N.Mex."
  }]
}, {
  "meeting_name": [{
    "date": "25 Jul - 6 Aug 1973",
    "coference_code": "C73-07-25",
    "meeting": "International School of Mathematical Physics, Ettore Majorana: 1st course: Constructive Quantum Field Theory",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jul - 8 Aug 1973",
    "coference_code": "C73-07-29",
    "meeting": "14th Scottish Universities Summer School in Physics: Phenomenology of Particles at High Energies",
    "location": "Middleton Hall (Edinburgh), Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jul - 1 Sep 1973",
    "coference_code": "C73-07-29.1",
    "meeting": "Summer School in Theoretical Physics: molecular fluids",
    "location": "Les Houches, France"
  }]
}, {
  "meeting_name": [{
    "date": "6-17 Aug 1973",
    "coference_code": "C73-08-06",
    "meeting": "Vancouver Physics Summer School on Particle Physics",
    "location": "Vancouver, British Columbia, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "6-31 Aug 1973",
    "coference_code": "C73-08-06.1",
    "meeting": "1973 PEP Summer Study",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "7-9 Aug 1973",
    "coference_code": "C73-08-07",
    "meeting": "3rd International Positron Annihilation Conference (Solid State Physics)",
    "location": "Otaniemi, Finland"
  }]
}, {
  "meeting_name": [{
    "date": "8-21 Aug 1973",
    "coference_code": "C73-08-08",
    "meeting": "5th Hawaii Topical Conference in Particle Physics",
    "location": "Honolulu, Hawaii"
  }]
}, {
  "meeting_name": [{
    "date": "8-10 Aug 1973",
    "coference_code": "C73-08-08.1",
    "meeting": "Cryogenic Engineering Conference",
    "location": "Atlanta, Georgia"
  }]
}, {
  "meeting_name": [{
    "date": "13-17 Aug 1973",
    "coference_code": "C73-08-13",
    "meeting": "APS Division of Particles and Fields Symposium",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "13-25 Aug 1973",
    "coference_code": "C73-08-14",
    "meeting": "2nd Summer Institute on Particle Interactions at Very High Energies: Duality in Elementary Particle Physics",
    "location": "Louvain-la-Neuve, Belgium"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "17-30 Aug 1973",
    "coference_code": "C73-08-17",
    "meeting": "13th International Cosmic Ray Conference",
    "location": "Denver, Colorado"
  }]
}, {
  "meeting_name": [{
    "date": "23-24 Aug 1973",
    "coference_code": "C73-08-23",
    "meeting": "5th International Conference on High-Energy Collisions",
    "location": "Stony Brook, New York"
  }]
}, {
  "meeting_name": [{
    "date": "25 Aug - 5 Sep 1973",
    "coference_code": "C73-08-25",
    "meeting": "International School of Young Physicists on High-Energy Physics",
    "location": "Gomel, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "27-31 Aug 1973",
    "coference_code": "C73-08-27",
    "meeting": "6th International Symposium on Electron and Photon Interactions at High Energies",
    "location": "Bonn, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "8-26 Jul 1973",
    "coference_code": "C73-07-08",
    "meeting": "11th International School of Subnuclear Physics: Laws of Hadronic Matter",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "3-4 Sep 1973",
    "coference_code": "C73-09-03",
    "meeting": "International Colloquium on Photon - Photon Collisions in Electron - Positron Storage Rings",
    "location": "Paris, France"
  }]
}, {
  "meeting_name": [{
    "date": "13-22 Sep 1973",
    "coference_code": "C73-09-13",
    "meeting": "Herbstschule fur Hochenergiephysik in Deutschland: Physik an Elektron-Positron-Speicherringen",
    "location": "Maria Laach, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "14-28 Sep 1973",
    "coference_code": "C73-09-14",
    "meeting": "Summer Institute in Theoretical Physics. Pt.2: Recent Developments in Field Theory and Statistical Mechanics",
    "location": "Mexico City, Mexico"
  }]
}, {
  "meeting_name": [{
    "date": "16-30 Sep 1973",
    "coference_code": "C73-09-16",
    "meeting": "International School of Elementary Particle Physics: Weak Interactions",
    "location": "Basko Polje, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "17-23 Sep 1973",
    "coference_code": "C73-09-17",
    "meeting": "7th International Symposium on Nuclear Electronics",
    "location": "Budapest, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "18-19 Sep 1973",
    "coference_code": "C73-09-18",
    "meeting": "11th Modulator Symposium",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Sep 1973",
    "coference_code": "C73-09-19",
    "meeting": "International Discussion Meeting on e+ e- Annihilation",
    "location": "Bielefeld, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "21 Sep 1973",
    "coference_code": "C73-09-21",
    "meeting": "HPD Collaboration Meeting",
    "location": "Bologna, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "23 Sep - 5 Oct 1973",
    "coference_code": "C73-09-23",
    "meeting": "Adriatic Summer Meeting on Particle Physics",
    "location": "Rovinj, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "24 Sep - 6 Oct 1973",
    "coference_code": "C73-09-24",
    "meeting": "Ecole d'Ete de Physique des Particules (Summer School on Particle Physics, 5th)",
    "location": "Gif-sur-Yvette, France"
  }]
}, {
  "meeting_name": [{
    "date": "25-28 Sep 1973",
    "coference_code": "C73-09-25",
    "meeting": "Conference on Cosmic Rays",
    "location": "Kharkov, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "2-10 Oct 1973",
    "coference_code": "C73-10-02",
    "meeting": "3rd International Symposium on High-Energy and Elementary Particle Physics",
    "location": "Sinaia, Romania"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "8-12 Oct 1973",
    "coference_code": "C73-10-08",
    "meeting": "Seminar on e-p and e-e Storage Rings",
    "location": "Hamburg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 Oct 1973",
    "coference_code": "C73-10-25",
    "meeting": "12th Eastern Theoretical Physics Conference",
    "location": "Blacksburg, Virginia"
  }]
}, {
  "meeting_name": [{
    "date": "30 Oct - 3 Nov 1973",
    "coference_code": "C73-10-30",
    "meeting": "Conference on Programming and Mathematical Methods for Solving Physical Problems",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "30 Oct - 1 Nov 1973",
    "coference_code": "C73-10-30.1",
    "meeting": "1st International Joint Conference on Pattern Recognition",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "5-9 Nov 1973",
    "coference_code": "C73-11-05",
    "meeting": "U.S.-Japan Seminar on High-Energy Accelerator Science",
    "location": "Tokyo, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Nov 1973",
    "coference_code": "C73-11-05.1",
    "meeting": "Triangle Meeting",
    "location": "Bratislava, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 Nov 1973",
    "coference_code": "C73-11-14",
    "meeting": "IEEE 1973 Nuclear Science Symposium (NSS)",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "17 Nov 1973",
    "coference_code": "C73-11-17",
    "meeting": "IEEE Nuclear Techniques in Medical Applications: One-day Tutorial Short Course",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Nov 1973",
    "coference_code": "C73-11-21",
    "meeting": "Colloquium on Hadronic Physics at ISR Energies",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Nov 1973",
    "coference_code": "C73-11-22",
    "meeting": "17th Strasbourg Meeting, R.C.P. 25",
    "location": "Strasbourg, France"
  }]
}, {
  "meeting_name": [{
    "date": "30 Nov - 1 Dec 1973",
    "coference_code": "C73-11-30",
    "meeting": "NAL Topical Conference on Physics at Large Transverse Momenta (Informal Topical Meeting)",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "2-3 Dec 1973",
    "coference_code": "C73-12-02",
    "meeting": "Triangle Meeting",
    "location": "Vienna, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "4-6 Dec 1973",
    "coference_code": "C73-12-04",
    "meeting": "1st International Symposium on CAMAC in Real-Time Computer Applications",
    "location": "Luxembourg"
  }]
}, {
  "meeting_name": [{
    "date": "7-8 Dec 1973",
    "coference_code": "C73-12-07",
    "meeting": "Conference on Lepton Induced Reactions",
    "location": "Irvine, California"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Dec 1973",
    "coference_code": "C73-12-27",
    "meeting": "American Physical Society Meeting",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "1974",
    "coference_code": "C74-00-00",
    "meeting": "Advanced Problems in Particle Physics",
    "location": "Padua, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "1974",
    "coference_code": "C74-00-00.1",
    "meeting": "24th Conference on Nuclear Spectroscopy and Nuclear Theory",
    "location": "Kharkov, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "7-25 Jan 1974",
    "coference_code": "C74-01-07",
    "meeting": "5th Brazilian Symposium on Theoretical Physics dedicated to Guido Beck on his 70th Birthday",
    "location": "Rio de Janeiro, Brazil"
  }]
}, {
  "meeting_name": [{
    "date": "7-12 Jan 1974",
    "coference_code": "C74-01-07.1",
    "meeting": "International Research Symposium on Statistical Physics",
    "location": "Calcutta, India"
  }]
}, {
  "meeting_name": [{
    "date": "7-12 Jan 1974",
    "coference_code": "C74-01-07.2",
    "meeting": "Orbis Scientiae, 1st",
    "location": "Coral Gables, Florida"
  }, {
    "meeting": "1st Orbis Scientiae -- Fundamental theories in physics"
  }]
}, {
  "meeting_name": [{
    "date": "7-11 Jan., 1974",
    "coference_code": "C74-01-07.3",
    "meeting": "3rd Nordic Meeting on High-Energy Physics",
    "location": "Spatind, Norway"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "17-18 Jan 1974",
    "coference_code": "C74-01-17",
    "meeting": "SEAS Winter Project Meeting",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "18-19 Jan 1974",
    "coference_code": "C74-01-18",
    "meeting": "Johns Hopkins Workshop on Current Problems in High-Energy Particle Theory",
    "location": "Baltimore, Maryland"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "19 Jan 1974",
    "coference_code": "C74-01-19",
    "meeting": "Annual Bevatron Users Meeting",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "25 Jan 1974",
    "coference_code": "C74-01-25",
    "meeting": "Seminar on Book-keeping Systems (for Counter Experiments)",
    "location": "Chilton, England"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jan - 2 Feb 1974",
    "coference_code": "C74-01-28",
    "meeting": "2nd International Winter Meeting on Fundamental Physics",
    "location": "Formigal, Sallent de Gallego, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "4-7 Feb 1974",
    "coference_code": "C74-02-04",
    "meeting": "American Physical Society Meeting",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "4-16 Feb 1974",
    "coference_code": "C74-02-04.1",
    "meeting": "13th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Progress in Particle Physics)",
    "location": "Schladming, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "8 Feb., 1974",
    "coference_code": "C74-02-08",
    "meeting": "Symposium on High-Energy Physics with Polarized Beams",
    "location": "Argonne, Illinois"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-13 Feb 1974",
    "coference_code": "C74-02-11",
    "meeting": "4th Australian Vacuum Conference",
    "location": "Canberra, Australia"
  }]
}, {
  "meeting_name": [{
    "date": "12-14 Feb 1974",
    "coference_code": "C74-02-12",
    "meeting": "2nd Computer Science Conference",
    "location": "Detroit, Mich."
  }]
}, {
  "meeting_name": [{
    "date": "15-26 Feb 1974",
    "coference_code": "C74-02-15",
    "meeting": "Leningrad Winter School on Nuclear Physics and Elementary Particles",
    "location": "Leningrad, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "18 Feb - 3 Mar, 1974",
    "coference_code": "C74-02-18",
    "meeting": "11th Annual Winter School of Theoretical Physics",
    "location": "Karpacz, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "3-9 Mar 1974",
    "coference_code": "C74-03-03",
    "meeting": "9th Rencontre de Moriond",
    "location": "Meribel-les-Allues, France"
  }, {
    "meeting": "9th Rencontre de Moriond -- Interactions Hadroniques a Hautes Energies High-energy Hadronic Interactions Interactions Leptoniques a Hautes Energies High-energy Leptonic Interactions"
  }]
}, {
  "meeting_name": [{
    "date": "8 Mar 1974",
    "coference_code": "C74-03-08",
    "meeting": "Symposium on Production of Heavy Excited Hadrons",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "24-29 Mar 1974",
    "coference_code": "C74-03-24",
    "meeting": "6th International Vacuum Congress",
    "location": "Kyoto, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "25-28 Mar 1974",
    "coference_code": "C74-03-25",
    "meeting": "American Physical Society Meeting",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "25-30 Mar 1974",
    "coference_code": "C74-03-25.1",
    "meeting": "International Symposium on Mathematical Physics",
    "location": "Warsaw, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "26-29 Mar 1974",
    "coference_code": "C74-03-26",
    "meeting": "IEEE - INTERCON/74",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Mar 1974",
    "coference_code": "C74-03-27",
    "meeting": "6th Conference on Nuclear Structure and High-Energy Physics",
    "location": "Glasgow, Scotland"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "29-30 Mar 1974",
    "coference_code": "C74-03-29",
    "meeting": "4th NAL Topical Conference: Neutrino Physics - Past and Future",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "1-2 Apr 1974",
    "coference_code": "C74-04-01",
    "meeting": "Synchrotron Radiation and its Applications to the Analysis of Problems in Scientific Investigation",
    "location": "Reading, England"
  }]
}, {
  "meeting_name": [{
    "date": "1-3 Apr 1974",
    "coference_code": "C74-04-01.1",
    "meeting": "4th Annual Conference on Vacuum",
    "location": "Liverpool, England"
  }]
}, {
  "meeting_name": [{
    "date": "2-5 Apr 1974",
    "coference_code": "C74-04-02",
    "meeting": "International Conference on Computer Scanning",
    "location": "Oxford, England"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "5-9 Apr 1974",
    "coference_code": "C74-04-05",
    "meeting": "Franco-British Centenary Conference",
    "location": "St. Helier, Jersey, Channel Islands"
  }]
}, {
  "meeting_name": [{
    "date": "22-25 Apr 1974",
    "coference_code": "C74-04-22",
    "meeting": "American Physical Society Meeting",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "24-26 Apr 1974",
    "coference_code": "C74-04-24",
    "meeting": "Meeting on Technology Arising from High-Energy Physics",
    "location": "Geneva, Switzerland (CERN)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "26-27 Apr 1974",
    "coference_code": "C74-04-26",
    "meeting": "4th International Conference on Experimental Meson Spectroscopy",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "26-28 Apr 1974",
    "coference_code": "C74-04-26.1",
    "meeting": "2nd International Conference on Neutrino Physics and Astrophysics",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "2-3 May 1974",
    "coference_code": "C74-05-02.1",
    "meeting": "AEC Scientific Computer Information Exchange Meeting",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "4-5 May 1974",
    "coference_code": "C74-05-04",
    "meeting": "Week-end Meeting on Deep Inelastic Phenomena",
    "location": "Rutherford Lab."
  }]
}, {
  "meeting_name": [{
    "date": "6-10 May 1974",
    "coference_code": "C74-05-06",
    "meeting": "1974 National Computer Conference",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "7-10 May 1974",
    "coference_code": "C74-05-07",
    "meeting": "5th International Cryogenic Engineering Conference (ICEC 5)",
    "location": "Kyoto, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "8-20 May 1974",
    "coference_code": "C74-05-08",
    "meeting": "International School of Cosmology and Gravitation, Ettore Majorana",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "13-17 May 1974",
    "coference_code": "C74-05-13",
    "meeting": "6th International Conference on Electron & Ion Beams in Science & Technology",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 May 1974",
    "coference_code": "C74-05-14",
    "meeting": "International Magnetics Conference (INTERMAG 74)",
    "location": "Toronto, Ontario, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "2-6 Jun 1974",
    "coference_code": "C74-06-02",
    "meeting": "International Symposium on Radiation Protection - Philosophy and Implementation",
    "location": "Aviemore, Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "3-7 Jun 1974",
    "coference_code": "C74-06-03",
    "meeting": "5th GIFT Seminar on Theoretical Physics: Some Topics in Weak Interactions",
    "location": "Zaragoza, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "4-10 Jun 1974",
    "coference_code": "C74-06-04",
    "meeting": "5th International Symposium on Multiparticle Hadrodynamics",
    "location": "Leipzig, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Jun 1974",
    "coference_code": "C74-06-05",
    "meeting": "Role of Magnetic Fields in Physics and Astronomy",
    "location": "Copenhagen, Denmark"
  }]
}, {
  "meeting_name": [{
    "date": "10-13 Jun 1974",
    "coference_code": "C74-06-10",
    "meeting": "International Conference on Quantum Electronics",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "10-15 Jun 1974",
    "coference_code": "C74-06-10.1",
    "meeting": "International Conference on Hyperfine Interactions Studied in Nuclear Reactions and Decay",
    "location": "Uppsala, Sweden"
  }]
}, {
  "meeting_name": [{
    "date": "12-18 Jun 1974",
    "coference_code": "C74-06-12",
    "meeting": "9th Balaton Symposium on Particle Physics",
    "location": "Balatonfured, Hungary"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "13-14 Jun 1974",
    "coference_code": "C74-06-13",
    "meeting": "American Physical Society Meeting",
    "location": "Salt Lake City, Utah"
  }]
}, {
  "meeting_name": [{
    "date": "15-29 Jun 1974",
    "coference_code": "C74-06-15",
    "meeting": "Cracow School of Theoretical Physics, 1974",
    "location": "Zakopane, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "16-29 Jun 1974",
    "coference_code": "C74-06-16",
    "meeting": "CERN School of Physics",
    "location": "Lake Windermere, England"
  }]
}, {
  "meeting_name": [{
    "date": "17-21 Jun 1974",
    "coference_code": "C74-06-17",
    "meeting": "3rd International Colloquium on Group Theoretical Methods in Physics",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "20-22 Jun 1974",
    "coference_code": "C74-06-20",
    "meeting": "Topical Seminar on the Physics of Colliding Beams",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "20-28 Jun 1974",
    "coference_code": "C74-06-20.1",
    "meeting": "9th Finnish Summer School in Theoretical Physics: Advances in Particle Physics",
    "location": "Ekenas, Finland"
  }]
}, {
  "meeting_name": [{
    "date": "23-28 Jun 1974",
    "coference_code": "C74-06-23",
    "meeting": "7th International Conference on Gravitation and Relativity",
    "location": "Tel Aviv, Israel"
  }]
}, {
  "meeting_name": [{
    "date": "24-28 Jun 1974",
    "coference_code": "C74-06-24",
    "meeting": "Symposium on Antinucleon - Nucleon Interactions",
    "location": "Prague - Liblice, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "24-29 June, 1974",
    "coference_code": "C74-06-24.1",
    "meeting": "Marseille Colloquium on Lagrangian Field Theory",
    "location": "Marseille, France"
  }, {
    "meeting": "Colloquium on Recent Progress Lagrangian Field Theory and Applications"
  }]
}, {
  "meeting_name": [{
    "date": "24-28 Jun 1974",
    "coference_code": "C74-06-24.2",
    "meeting": "Colloque Internationale de Geometrie Symplectique et Physique Mathematique",
    "location": "Aix-en-Provence, France"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 Jun 1974",
    "coference_code": "C74-06-25",
    "meeting": "Seminar on Quark and Parton Problems",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "1-10 Jul 1974",
    "coference_code": "C74-07-01",
    "meeting": "17th International Conference on High-Energy Physics",
    "location": "London, England"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "1 Jul - 24 Aug 1974",
    "coference_code": "C74-07-01.2",
    "meeting": "Les Houches Summer School in Theoretical Physics: Atomic and Molecular Physics and Interstellar Matter",
    "location": "Les Houches, France"
  }]
}, {
  "meeting_name": [{
    "date": "14-20 Jul 1974",
    "coference_code": "C74-07-14",
    "meeting": "5th International Congress of Radiation Research",
    "location": "Seattle, Washington"
  }]
}, {
  "meeting_name": [{
    "date": "14-31 Jul 1974",
    "coference_code": "C74-07-14.1",
    "meeting": "12th International School of Subnuclear Physics: Lepton and Hadron Structures",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "15-18 Jul 1974",
    "coference_code": "C74-07-15",
    "meeting": "IEEE Annual Conference on Nuclear and Space Radiation Effects",
    "location": "Ft. Collins, Colo"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Jul 1974",
    "coference_code": "C74-07-15.1",
    "meeting": "6th International Symposium on Discharges and Electrical Insulation in Vacuum",
    "location": "Swansea, England"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Jul 1974",
    "coference_code": "C74-07-15.2",
    "meeting": "Dublin Conference on Current Problems in Particle Physics",
    "location": "Dublin, Ireland"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Jul 1974",
    "coference_code": "C74-07-15.3",
    "meeting": "Feldafing Conference of the Max-Planck Inst. on Quantum Theory and the Structure of Space-time",
    "location": "Starnberg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "15-26 Jul 1974",
    "coference_code": "C74-07-15.4",
    "meeting": "High-Energy Heavy Ion Summer Study, 2nd",
    "location": "Berkeley, California"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-19 Jul 1974",
    "coference_code": "C74-07-16",
    "meeting": "3rd KEK Summer School",
    "location": "Ibaraki, Japan"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "21 Jul - 10 Aug 1974",
    "coference_code": "C74-07-21",
    "meeting": "15th Scottish Universities Summer School in Physics: The Helium Liquids",
    "location": "St. Andrews, Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "22-26 Jul 1974",
    "coference_code": "C74-07-22",
    "meeting": "4th International Conference on Vacuum Ultraviolet Radiation Physics",
    "location": "Hamburg, Germany (DESY)"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jul - 10 Aug 1974",
    "coference_code": "C74-07-29",
    "meeting": "2nd SLAC Summer Institute on Particle Physics: The Strong Interactions (Topical Conference last 3 days) (SSI 74)",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jul - 15 Aug 1974",
    "coference_code": "C74-07-29.1",
    "meeting": "International Summer School on Fundamental Problems in Statistical Mechanics",
    "location": "Wageningen, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jul - 9 Aug 1974",
    "coference_code": "C74-07-29.2",
    "meeting": "International Summer Institute for Theoretical Physics: Trends in Elementary Particle Theory",
    "location": "Bonn, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "5-30 Aug 1974",
    "coference_code": "C74-08-05",
    "meeting": "1974 PEP Summer Study",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "5-14 Aug 1974",
    "coference_code": "C74-08-05.1",
    "meeting": "Summer Seminar on Inverse Problems",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "5-10 Aug 1974",
    "coference_code": "C74-08-05.2",
    "meeting": "International Federation for Information Processing Congress",
    "location": "Stockholm, Sweden"
  }]
}, {
  "meeting_name": [{
    "date": "11-24 Aug 1974",
    "coference_code": "C74-08-11",
    "meeting": "3rd CERN School of Computing",
    "location": "Godoysund (Bergen) Norway"
  }]
}, {
  "meeting_name": [{
    "date": "19-23 Aug 1974",
    "coference_code": "C74-08-19",
    "meeting": "Internal Structure of Hadrons",
    "location": "Andover, New Hampshire"
  }]
}, {
  "meeting_name": [{
    "date": "19-23 Aug 1974",
    "coference_code": "C74-08-19.1",
    "meeting": "Conference on Tradition and Change in Physics Graduate Education",
    "location": "University Park, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "27 Aug - 6 Sep 1974",
    "coference_code": "C74-08-26",
    "meeting": "Origin of Cosmic Rays (NATO Advanced Study Institute)",
    "location": "Durham, England"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "27-31 Aug 1974",
    "coference_code": "C74-08-27",
    "meeting": "International Conference on Few Body Problems in Nuclear and Particle Physics",
    "location": "Quebec, Canada (Laval U)"
  }]
}, {
  "meeting_name": [{
    "date": "Sep 1974",
    "coference_code": "C74-09-00",
    "meeting": "Pi-Mu Study Week",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "4-6 Sep 1974",
    "coference_code": "C74-09-04",
    "meeting": "Conference on Elementary Particle Physics at Ultra-high Energies",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Sep 1974",
    "coference_code": "C74-09-05",
    "meeting": "1974 Meeting of the Division of Particles and Fields of the APS",
    "location": "Williamsburg, Virginia"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Sep 1974",
    "coference_code": "C74-09-09",
    "meeting": "International Conference on Nuclear Structure and Spectroscopy",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Sep 1974",
    "coference_code": "C74-09-09.1",
    "meeting": "Topical Meeting on High-Energy Collisions Involving Nuclei",
    "location": "Trieste, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Sep 1974",
    "coference_code": "C74-09-09.2",
    "meeting": "6th Symposium on Photoelectronic Image Devices",
    "location": "London, England"
  }, {
    "meeting": "IEDM"
  }]
}, {
  "meeting_name": [{
    "date": "9-21 Sep 1974",
    "coference_code": "C74-09-09.3",
    "meeting": "Ecole d'Ete de Physique des Particules",
    "location": "Gif-sur-Yvette, France"
  }, {
    "meeting": "6eme Ecole d'ete de Physique des Particules : 6th Particle Physics Summer School -- t.1 Interactions faibles, t.2 Interactions photons-hadrons"
  }]
}, {
  "meeting_name": [{
    "date": "9-27 Sep 1974",
    "coference_code": "C74-09-09.4",
    "meeting": "School for Young High-Energy Physicists",
    "location": "Chilton, England"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-20 Sept., 1974",
    "coference_code": "C74-09-11.1",
    "meeting": "Autumn School for High-Energy Physics",
    "location": "Maria Laach, Germany"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "15-29 Sep 1974",
    "coference_code": "C74-09-15",
    "meeting": "International School of Elementary Particle Physics: Weak Interactions",
    "location": "Basko Polje, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "15-21 Sep 1974",
    "coference_code": "C74-09-15.1",
    "meeting": "11th INTERNATIONAL Congress on High Speed Photography",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "16-19 Sep 1974",
    "coference_code": "C74-09-16",
    "meeting": "6th International Symposium on the IMEKO Subcommittee Photon Detectors",
    "location": "Siofok (Lake Balaton), Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "16-25 Sep 1974",
    "coference_code": "C74-09-16.1",
    "meeting": "2nd Workshop on Weak Interactions with very High-Energy Beams",
    "location": "Strobl - St. Wolfgang, Austria"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-20 Sep 1974",
    "coference_code": "C74-09-16.2",
    "meeting": "Fourth European Symposium on Cosmic Rays & Extended Air Shower Section",
    "location": "Lodz, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "17-19 Sep 1974",
    "coference_code": "C74-09-17",
    "meeting": "Physics in High Magnetic Fields",
    "location": "Grenoble, France"
  }]
}, {
  "meeting_name": [{
    "date": "22 Sep - 1 Oct 1974",
    "coference_code": "C74-09-22",
    "meeting": "International School of Nuclear Physics: 1st Course, Investigation of Nuclear Structure",
    "location": "Erice, Italy"
  }, {
    "meeting": "Ettore Majorana"
  }]
}, {
  "meeting_name": [{
    "date": "23-28 Sep 1974",
    "coference_code": "C74-09-23",
    "meeting": "Topical Meeting on the Interactions of Elementary Particles with Nuclei",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "16-25 Oct 1974",
    "coference_code": "C74-10-16",
    "meeting": "First Workshop on Theoretical Physics 'Hadrons and their Constituents'",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "24-25 Oct 1974",
    "coference_code": "C74-10-24",
    "meeting": "Workshop on Research Goals for Cosmic Ray Astrophysics in the 1980s",
    "location": "Frascati, Italy (Esrin)"
  }]
}, {
  "meeting_name": [{
    "date": "24-25 Oct 1974",
    "coference_code": "C74-10-24.1",
    "meeting": "SSRP Users Group Meeting, 1st",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "5-8 Nov 1975",
    "coference_code": "C74-11-05",
    "meeting": "International Colloquium 3: Cosmology . History . Theology",
    "location": "Denver, Colorado"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Nov 1974",
    "coference_code": "C74-11-09",
    "meeting": "2nd Symposium on High-Energy Physics (Visva-Bharati Univ.)",
    "location": "Shantiniketan, India"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "15-16 Nov 1974",
    "coference_code": "C74-11-15",
    "meeting": "Fermilab Topical Conference. Nuclei As Targets: Are they worth the trouble?",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "18-20 Nov 1974",
    "coference_code": "C74-11-18",
    "meeting": "4th All Union Accelerator Conference",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "18-22 Nov 1974",
    "coference_code": "C74-11-18.1",
    "meeting": "International Symposium on Mathematical Physics",
    "location": "Austin, Tex."
  }]
}, {
  "meeting_name": [{
    "date": "18-20 Nov 1974",
    "coference_code": "C74-11-18.2",
    "meeting": "Colloquium on Numerical Methods in Scientific and Technical Calculations",
    "location": "Paris, France"
  }]
}, {
  "meeting_name": [{
    "date": "19-15 Nov 1974",
    "coference_code": "C74-11-19",
    "meeting": "International Cosmic Ray Symposium on High-Energy Phenomena",
    "location": "Tokyo, Japan"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Dec 1974",
    "coference_code": "C74-12-05",
    "meeting": "American Phys. Soc. General Meeting",
    "location": "Atlanta, Georgia"
  }]
}, {
  "meeting_name": [{
    "date": "11-13 Dec 1974",
    "coference_code": "C74-12-11",
    "meeting": "IEEE 1974 Nuclear Science Symposium (NSS)",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "11-13 Dec 1974",
    "coference_code": "C74-12-11.1",
    "meeting": "14th Scintillation and Semiconductor Counter Symposium",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "16-20 Dec 1974",
    "coference_code": "C74-12-16",
    "meeting": "7th Texas Symposium on Relativistic Astrophysics",
    "location": "Dallas, Tex."
  }]
}, {
  "meeting_name": [{
    "date": "16-17 Jan 1975",
    "coference_code": "C75-01-16",
    "meeting": "SEAS Winter Projects Meeting",
    "location": "Juelich, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "17 Jan 1975",
    "coference_code": "C75-01-17",
    "meeting": "Workshop on Future Muon Experiments at Fermilab",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "20-25 Jan 1975",
    "coference_code": "C75-01-20",
    "meeting": "Orbis Scientiae II",
    "location": "Coral Gables, Florida"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "23-29 Jan 1975",
    "coference_code": "C75-01-23",
    "meeting": "International Symposium on Mathematical Problems in Theoretical Physics",
    "location": "Kyoto, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "28-29 Jan 1975",
    "coference_code": "C75-01-28",
    "meeting": "Working Seminar on Data Communications",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jan - 2 Feb 1975",
    "coference_code": "C75-01-29",
    "meeting": "American Physical Society Annual/wAAPT Meeting",
    "location": "Anaheim, California"
  }]
}, {
  "meeting_name": [{
    "date": "1-2 Feb 1975",
    "coference_code": "C75-02-01",
    "meeting": "Daresbury Study Weekend - Analysis of Three-particle Decays and Meson Resonance Production",
    "location": "Daresbury, England"
  }]
}, {
  "meeting_name": [{
    "date": "6-8 Feb 1975",
    "coference_code": "C75-02-06",
    "meeting": "Symposium on New Particles and Neutral Currents",
    "location": "Tokyo, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "10-15 Feb 1975",
    "coference_code": "C75-02-10",
    "meeting": "III International Winter Meeting on Fundamental Physics",
    "location": "Sierra Nevada (Granada) Spain"
  }]
}, {
  "meeting_name": [{
    "date": "15 Feb 1975",
    "coference_code": "C75-02-15",
    "meeting": "Bevatron/Bevalac Users Meeting",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "17 Feb - 2 Mar 1975",
    "coference_code": "C75-02-17",
    "meeting": "12th Annual Winter School of Theoretical Physics",
    "location": "Karpacz, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "17-20 Feb 1975",
    "coference_code": "C75-02-17.1",
    "meeting": "International Symposium on Interaction Studies in Nuclei",
    "location": "Mainz, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "20-21 Feb 1975",
    "coference_code": "C75-02-20",
    "meeting": "4th Annual Symposium on Applied Vacuum Science and Technology",
    "location": "Tampa, Florida"
  }]
}, {
  "meeting_name": [{
    "date": "21 Feb 1975",
    "coference_code": "C75-02-21",
    "meeting": "Meeting on Particle Detectors & Dosimeters",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "24 Feb - 1 Mar 1975",
    "coference_code": "C75-02-24",
    "meeting": "Conference on Hartree-Fock and Self-consistent Field Theories in Nuclei",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "24 Feb - 7 Mar 1975",
    "coference_code": "C75-02-24.1",
    "meeting": "14th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Electromagnetic Interactions & Field Theory)",
    "location": "Schladming, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 Feb 1975",
    "coference_code": "C75-02-25",
    "meeting": "COMPCON Spring 1975",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "2-14 Mar 1975",
    "coference_code": "C75-03-02",
    "meeting": "10th Rencontre de Moriond, Session I: Phenomenology of Hadron Structure. Session II:Leptons & Unified Theory",
    "location": "Meribel-les-Allues, France"
  }]
}, {
  "meeting_name": [{
    "date": "5-7 Mar 1975",
    "coference_code": "C75-03-05",
    "meeting": "Particle Physics: Meeting of the German Physical Society",
    "location": "Munich, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "12-14 Mar 1975",
    "coference_code": "C75-03-12",
    "meeting": "6th National Particle Accelerator Conference (PAC 75)",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "12-18 Mar 1975",
    "coference_code": "C75-03-12.1",
    "meeting": "Conference on C* Algebras and its Application in Theoretical Physics",
    "location": "Rome, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "14-15 Mar 1975",
    "coference_code": "C75-03-14",
    "meeting": "13th Eastern Conference on Theoretical Physics",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "17-19 Mar 1975",
    "coference_code": "C75-03-17",
    "meeting": "American National Metric Council Conference and Exposition",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "17-19 Mar 1975",
    "coference_code": "C75-03-17.1",
    "meeting": "Conference on Duality and Symmetry",
    "location": "Tokyo, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "18 Mar 1975",
    "coference_code": "C75-03-18",
    "meeting": "Meeting on Linear Accelerators",
    "location": "Ibaraki, Japan"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "18-20 Mar 1975",
    "coference_code": "C75-03-18.1",
    "meeting": "International Colloquium on High-Energy Neutrino Interactions",
    "location": "Paris, France"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "24-27 Mar 1975",
    "coference_code": "C75-03-24",
    "meeting": "International Conference on Automatic Image Processing in Astronomy",
    "location": "Utrecht, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "31 Mar - 3 Apr 1975",
    "coference_code": "C75-03-31",
    "meeting": "American Physical Society Meeting",
    "location": "Denver, Colorado"
  }]
}, {
  "meeting_name": [{
    "date": "2-12 Apr 1975",
    "coference_code": "C75-04-02",
    "meeting": "Topical Meeting on Intermediate Energy Physics, with Emphasis on Electromagnetism and Weak Interactions",
    "location": "Zuoz, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "8-19 Apr 1975",
    "coference_code": "C75-04-08",
    "meeting": "8th All Union School of High-Energy Particle Physics",
    "location": "Yerevan, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Apr 1975",
    "coference_code": "C75-04-14",
    "meeting": "International Magnetics Conference (INTERMAG 75)",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Apr 1975",
    "coference_code": "C75-04-14.1",
    "meeting": "Conference on Multiphoton Processes",
    "location": "Seillac, France"
  }]
}, {
  "meeting_name": [{
    "date": "21-25 Apr 1975",
    "coference_code": "C75-04-21",
    "meeting": "5th International Conference on Magnet Technology (MT-5)",
    "location": "Frascati, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "21-24 Apr 1975",
    "coference_code": "C75-04-21.1",
    "meeting": "1975 Design Engineering Show",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Apr 1975",
    "coference_code": "C75-04-22",
    "meeting": "IEE Conference on On-line Computer Control Systems",
    "location": "Sheffield (Univ.) England"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Apr 1975",
    "coference_code": "C75-04-22.1",
    "meeting": "VIM 22/ECODU 19 Conference",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "28 Apr - 1 May 1975",
    "coference_code": "C75-04-28",
    "meeting": "American Physical Society Meeting",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "30 Apr - 7 May 1975",
    "coference_code": "C75-04-30",
    "meeting": "Workshops on Theoretical Physics: Is There an Ultimate Temperature in Hadron Physics?",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "30 Apr - 2 May 1975",
    "coference_code": "C75-04-30.1",
    "meeting": "Topical Meeting on Electromagnetic and Weak Interactions in Nuclei",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "1-2 May 1975",
    "coference_code": "C75-05-01",
    "meeting": "Conference on Theoretical Physics",
    "location": "Athens, Georgia"
  }]
}, {
  "meeting_name": [{
    "date": "2-4 May 1975",
    "coference_code": "C75-05-02",
    "meeting": "4th International Symposium on Nucleon-Antinucleon Interactions",
    "location": "Syracuse, New York"
  }]
}, {
  "meeting_name": [{
    "date": "8-19 May 1975",
    "coference_code": "C75-05-08",
    "meeting": "International School of Philosophy of Science: Philosophical Questions about Physical Notion of Force",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "9-10 May 1975",
    "coference_code": "C75-05-09",
    "meeting": "APS Ohio Section Spring Meeting",
    "location": "Kent, Ohio"
  }]
}, {
  "meeting_name": [{
    "date": "13-16 May 1975",
    "coference_code": "C75-05-13",
    "meeting": "3rd European Congress on Radiation Protection",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "14-28 May 1975",
    "coference_code": "C75-05-14",
    "meeting": "1975 JINR-CERN School of Physics",
    "location": "Alushta, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 May 1975",
    "coference_code": "C75-05-14.1",
    "meeting": "International Workshop on the Management of Data - Description, Access and Control",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 May 1975",
    "coference_code": "C75-05-14.2",
    "meeting": "Computer Graphics, Pattern Recognition and Data Structure",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "19-22 May 1975",
    "coference_code": "C75-05-19",
    "meeting": "1975 National Computer Conference",
    "location": "Anaheim, California"
  }]
}, {
  "meeting_name": [{
    "date": "20-23 May 1975",
    "coference_code": "C75-05-20",
    "meeting": "2nd Ispra Nuclear Electronics Symposium",
    "location": "Stresa (Lago Maggiore) Italy"
  }]
}, {
  "meeting_name": [{
    "date": "21 May - 8 Aug 1975",
    "coference_code": "C75-05-21",
    "meeting": "Summer Course in Complex Analysis",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "26-30 May 1975",
    "coference_code": "C75-05-26",
    "meeting": "3rd National Soviet Conference on Neutron Physics",
    "location": "Kiev, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "2-6 Jun 1975",
    "coference_code": "C75-06-02",
    "meeting": "Fifth International Conference on Atomic Masses and Fundamental Constants",
    "location": "Paris, France"
  }]
}, {
  "meeting_name": [{
    "date": "2-6 June 1975",
    "coference_code": "C75-06-02.1",
    "meeting": "6th Gift Seminar on Theoretical Physics: Quantum Field Theory",
    "location": "Jaca, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "3-28 Jun 1975",
    "coference_code": "C75-06-03",
    "meeting": "Institute on Structural Analysis of Multiparticle Collision Amplitudes in Relativistic Quantum Theory",
    "location": "Les Houches, France"
  }]
}, {
  "meeting_name": [{
    "date": "5-15 Jun 1975",
    "coference_code": "C75-06-05",
    "meeting": "Summer School on Computing Techniques in Physics",
    "location": "Smolenice, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "5-17 Jun 1975",
    "coference_code": "C75-06-05.1",
    "meeting": "15th Cracow School of Theoretical Physics",
    "location": "Zakopane, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "5-11 Jun 1975",
    "coference_code": "C75-06-05.2",
    "meeting": "4th International Seminar on High-Energy Physics Problems",
    "location": "Dubna, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "9-14 Jun 1975",
    "coference_code": "C75-06-09",
    "meeting": "6th International Conference on High-Energy Physics & Nuclear Structure (ICOHEPANS)",
    "location": "Santa Fe, N.Mex."
  }]
}, {
  "meeting_name": [{
    "date": "11-14 Jun 1975",
    "coference_code": "C75-06-11",
    "meeting": "Topical Meeting on Phenomenology in High-Energy Physics and Missing Particles. By Invitation",
    "location": "Trieste, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-18 Jun 1975",
    "coference_code": "C75-06-16",
    "meeting": "American Physical Society Meeting",
    "location": "Knoxville, Tenn."
  }]
}, {
  "meeting_name": [{
    "date": "16-21 Jun 1975",
    "coference_code": "C75-06-16.1",
    "meeting": "IPP International Summer School, McGill University, 1975:Exper. & Theor. Physics at the High Energy Accelerators",
    "location": "Montreal, Quebec, Canada"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "16-21 Jun 1975",
    "coference_code": "C75-06-16.2",
    "meeting": "3rd International Neutrino Conference - NEUTRINO '75",
    "location": "Balatonfured, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "18 Jun 1975",
    "coference_code": "C75-06-18",
    "meeting": "Conference on Computer Networks - Trends and Applications",
    "location": "Gaithersburg, Maryland"
  }]
}, {
  "meeting_name": [{
    "date": "23-28 Jun 1975",
    "coference_code": "C75-06-23",
    "meeting": "1975 High-Energy Particle Physics Divisional Conference of EPS (includes 8th biennial conf on Elem. Particles)",
    "location": "Palermo, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "23-27 Jun 1975",
    "coference_code": "C75-06-23.1",
    "meeting": "Workshop on the Microarchitecture of Computer Systems",
    "location": "Monte Carlo, Monaco"
  }]
}, {
  "meeting_name": [{
    "date": "23-27 Jun 1975",
    "coference_code": "C75-06-23.2",
    "meeting": "4th International Colloquium on Group Theoretical Methods in Physics",
    "location": "Nijmegen, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "23 Jun - 2 Jul 1975",
    "coference_code": "C75-06-23.3",
    "meeting": "Summer School on Nuclear and Particle Physics",
    "location": "Victoria, B.C., Canada"
  }]
}, {
  "meeting_name": [{
    "date": "23-27 Jun 1975",
    "coference_code": "C75-06-23.4",
    "meeting": "International Colloquium on Mathematical Methods of Quantum Field Theory",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "23 Jun - 4 Jul 1975",
    "coference_code": "C75-06-23.5",
    "meeting": "1975 Summer School in Health Physics",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 Jun 1975",
    "coference_code": "C75-06-25",
    "meeting": "2nd Annual Conference on Computer Graphics and Interactive Techniques",
    "location": "Bowling Green, Ohio"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jun - 4 Jul 1975",
    "coference_code": "C75-06-28",
    "meeting": "6th Intnl. Conf. 'Science & Society': Co-operation and Interdependence in the Modern World",
    "location": "Dubrovnik, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "30 Jun - 25 Jul 1975",
    "coference_code": "C75-06-30",
    "meeting": "1975 Cargese Summer Institute: Weak and Electromagnetic Interactions at High Energies",
    "location": "Cargese, France"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "1 Jul - 31 Aug 1975",
    "coference_code": "C75-07-01",
    "meeting": "Summer Institute in Theoretical Physics",
    "location": "Seattle, Washington"
  }]
}, {
  "meeting_name": [{
    "date": "1-4 Jul 1975",
    "coference_code": "C75-07-01.1",
    "meeting": "Conference on Differential Geometrical Methods in Mathematical Physics",
    "location": "Bonn, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "7-27 Jul 1975",
    "coference_code": "C75-07-07",
    "meeting": "Aspen Workshop on Theory of Basic Interactions of Particles",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "7-11 Jul 1975",
    "coference_code": "C75-07-07.1",
    "meeting": "New Directions in Hadron Spectroscopy",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "7-12 Jul 1975",
    "coference_code": "C75-07-07.2",
    "meeting": "Marcel Grossmann Meeting on the Recent Progress of the Fundamentals of General Relativity",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "11 Jul - 1 Aug 1975",
    "coference_code": "C75-07-11",
    "meeting": "13th International School of Subnuclear Physics: New Phenomena in Subnuclear Physics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "14-19 Jul 1975",
    "coference_code": "C75-07-14",
    "meeting": "6th International Colloquium on Multiparticle Reactions. BY INVITATION",
    "location": "Oxford, England"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Jul 1975",
    "coference_code": "C75-07-14.1",
    "meeting": "IEEE Annual Conference on Nuclear and Space Radiation Effects",
    "location": "Arcata, California"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Jul 1975",
    "coference_code": "C75-07-15",
    "meeting": "14th Symposium on Nuclear Spectroscopy & Nuclear Theory",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "21-31 Jul 1975",
    "coference_code": "C75-07-21",
    "meeting": "3rd SLAC Summer Institute on Particle Physics: Deep Hadronic Structure and the New Particles (Topical Conference last 3 days) (SSI 75)",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "24-30 Jul 1975",
    "coference_code": "C75-07-24",
    "meeting": "International Conference on the Physics of Electronic and Atomic Collisions",
    "location": "Seattle, Washington"
  }]
}, {
  "meeting_name": [{
    "date": "24 Jul - 7 Aug 1975",
    "coference_code": "C75-07-24.1",
    "meeting": "International School of Theory and Application of Computers, Distributed Processing",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jul - 17 Aug 1975",
    "coference_code": "C75-07-28",
    "meeting": "Aspen Workshop on Theory and Phenomenology of Hadron Interactions at Moderate Energies",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "28 Jul - 6 Sep 1975",
    "coference_code": "C75-07-28.1",
    "meeting": "Ecole d'Ete de Physique Theorique - Methods in Field Theory",
    "location": "Les Houches, France"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jul 1975",
    "coference_code": "C75-07-28.2",
    "meeting": "Scottish Universities Summer School in Physics - Non-Linear Optics",
    "location": "Edinburgh, Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "4-9 Aug 1975",
    "coference_code": "C75-08-04",
    "meeting": "International Symposium on 'Quantum Mechanics 50 Years Later'",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "6-19 Aug 1975",
    "coference_code": "C75-08-06",
    "meeting": "6th Hawaii Topical Conference in Particle Physics",
    "location": "Honolulu, Hawaii"
  }]
}, {
  "meeting_name": [{
    "date": "14-20 Aug 1975",
    "coference_code": "C75-08-14",
    "meeting": "XIVth International Conference on Low Temperature Physics",
    "location": "Otaniemi, Finland"
  }, {}, {}]
}, {
  "meeting_name": [{
    "date": "15-29 Aug 1975",
    "coference_code": "C75-08-15",
    "meeting": "14th International Cosmic Ray Conference",
    "location": "Munich, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "17-31 Aug 1975",
    "coference_code": "C75-08-17",
    "meeting": "International School of Mathematical Physics, 2nd course: Renormalization Theory",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "18-22 Aug 1975",
    "coference_code": "C75-08-18",
    "meeting": "1975 Gordon Conference: High-Energy Hadronic Interactions",
    "location": "Meridan, New Hampshire"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "18-22 Aug 1975",
    "coference_code": "C75-08-18.1",
    "meeting": "Real-time Programming Workshop",
    "location": "Cambridge, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "19-22 Aug 1975",
    "coference_code": "C75-08-19",
    "meeting": "7th International Conference on Cyclotrons and Their Applications",
    "location": "Zurich, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "21-27 Aug 1975",
    "coference_code": "C75-08-21",
    "meeting": "7th International Symposium on Lepton and Photon Interactions",
    "location": "Stanford, California"
  }, {
    "meeting": "LP 75"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Aug 1975",
    "coference_code": "C75-08-25",
    "meeting": "International Conference on Statistical Physics",
    "location": "Budapest, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "25-30 Aug 1975",
    "coference_code": "C75-08-25.1",
    "meeting": "4th International Symposium on Polarization Phenomena in Nuclear Reactions (IUPAP)",
    "location": "Zurich, Switzerland"
  }, {
    "meeting": "International Union of Pure and Applied Physics"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Aug 1975",
    "coference_code": "C75-08-25.2",
    "meeting": "3rd International Conference on Thin Films",
    "location": "Budapest, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "25 Aug - 3 Sep 1975",
    "coference_code": "C75-08-25.3",
    "meeting": "Workshop on Recent Developments in Particle Physics",
    "location": "Athens, Greece"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Aug 1975",
    "coference_code": "C75-08-25.4",
    "meeting": "Dublin Institute for Advanced Studies School of Theoretical Physics",
    "location": "Dublin, Ireland"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Aug 1975",
    "coference_code": "C75-08-27",
    "meeting": "1975 Meeting of the Division of Particles and Fields of the APS",
    "location": "Seattle, Washington"
  }]
}, {
  "meeting_name": [{
    "date": "1-4 Sep 1975",
    "coference_code": "C75-09-01",
    "meeting": "5th European Microwave Conference",
    "location": "Hamburg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "3-13 Sep 1975",
    "coference_code": "C75-09-03",
    "meeting": "3rd International Weak Interaction Workshop with Very High Energy Beams",
    "location": "Columbus, Ohio"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "8-19 Sep 1975",
    "coference_code": "C75-09-08",
    "meeting": "7th Summer School on Particle Physics",
    "location": "Gif-sur-Yvette, France"
  }]
}, {
  "meeting_name": [{
    "date": "8-12 Sep 1975",
    "coference_code": "C75-09-08.1",
    "meeting": "Symposium on Mathematical Problems of Quantum Dynamics - Models and Mathematics",
    "location": "Bielefeld, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "9-12 Sep 1975",
    "coference_code": "C75-09-09",
    "meeting": "3rd General Conference of the European Physical Society: Energy and Physics",
    "location": "Bucharest, Romania"
  }]
}, {
  "meeting_name": [{
    "date": "14-28 Sep 1975",
    "coference_code": "C75-09-14",
    "meeting": "11th International School of Elementary Particle Physics",
    "location": "Basko Polje, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "15-26 Sep 1975",
    "coference_code": "C75-09-15",
    "meeting": "Intnl. Summer Inst. in Theoretical Physics on Current Induced Reactions",
    "location": "Hamburg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "15-21 Sep 1975",
    "coference_code": "C75-09-15.1",
    "meeting": "International School of History of Science: The History of Science in Contemporary Culture",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "16-26 Sep 1975",
    "coference_code": "C75-09-16",
    "meeting": "Summer School on Theoretical Particle Physics - Current Induced Reactions",
    "location": "Hamburg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "22-30 Sep 1975",
    "coference_code": "C75-09-22",
    "meeting": "Workshops on Theoretical Physics - 3rd Session: 'Quarks and Hadronic Structure'",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "26-27 Sep 1975",
    "coference_code": "C75-09-26",
    "meeting": "Conference on Gauge Theories and Modern Field Theory (BY INVITATION)",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "30 Sep - 10 Oct 1975",
    "coference_code": "C75-09-30",
    "meeting": "Herbschule fur Hochenergiephysik - Physik mit Elektron-Positron-Speicherringen",
    "location": "Maria Laach, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "1-10 Oct 1975",
    "coference_code": "C75-10-01",
    "meeting": "International School of Radiation Damage and Protection 'High Energy Radiation Dosimetry and Protection'",
    "location": "Erice, Italy"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 Oct 1975",
    "coference_code": "C75-10-14",
    "meeting": "2nd International Symposium on CAMAC in Computer Applications",
    "location": "Brussels, Belgium"
  }]
}, {
  "meeting_name": [{
    "date": "29-30 Oct 1975",
    "coference_code": "C75-10-29",
    "meeting": "BNL - Neutrinos '75",
    "location": "Brookhaven, New York"
  }]
}, {
  "meeting_name": [{
    "date": "3-6 Nov 1975",
    "coference_code": "C75-11-03",
    "meeting": "Triangle Conference on High-Energy Particle Interactions - Composite Structure of Hadrons.",
    "location": "Smolenice, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "7-8 Nov 1975",
    "coference_code": "C75-11-07",
    "meeting": "14th Eastern Theoretical Physics Conference",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "17-20 Nov 1975",
    "coference_code": "C75-11-17",
    "meeting": "Fall Computer Conference",
    "location": "Las Vegas, Nev."
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Nov 1975",
    "coference_code": "C75-11-19",
    "meeting": "IEEE 1975 Nuclear Science Symposium (NSS)",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 Nov 1975",
    "coference_code": "C75-11-25",
    "meeting": "INS Symposium on Electron and Photon Interactions in Resonance Region & on Related Topics",
    "location": "Tokyo, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "25 Nov - 15 Dec 1975",
    "coference_code": "C75-11-25.1",
    "meeting": "Interdisciplinary Seminar - General Relativity & Quantum Field Theory",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "5-6 Dec 1975",
    "coference_code": "C75-12-05",
    "meeting": "Conference on Quarks and the New Particles",
    "location": "Irvine, California"
  }]
}, {
  "meeting_name": [{
    "date": "8-14 Dec 1975",
    "coference_code": "C75-12-08",
    "meeting": "2nd Latin American Symposium on Relativity and Gravitation",
    "location": "Caracas, Venezuela"
  }]
}, {
  "meeting_name": [{
    "date": "9-12 Dec 1975",
    "coference_code": "C75-12-09",
    "meeting": "21st Annual Conference on Magnetism and Magnetic Materials",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "20-29 Dec 1975",
    "coference_code": "C75-12-20",
    "meeting": "Workshops on Experimental High-Energy Physics: 'How Can the New Particles Affect the SPS?' BY INVITATION",
    "location": "Erice, Italy"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "27 Dec 1975 - 1 Jan 1976",
    "coference_code": "C75-12-27",
    "meeting": "International Research Symposium on Relativity and Unified Field Theory",
    "location": "Calcutta, India"
  }]
}, {
  "meeting_name": [{
    "date": "29-31 Dec 1975",
    "coference_code": "C75-12-29",
    "meeting": "American Physical Society Meeting",
    "location": "Pasadena, California"
  }]
}, {
  "meeting_name": [{
    "date": "29 Dec 1975 - 4 Jan 1976",
    "coference_code": "C75-12-29.1",
    "meeting": "7th International Conference on Few Body Problems in Nuclear and Particle Physics",
    "location": "Delhi, India"
  }]
}, {
  "meeting_name": [{
    "date": "5-8 Jan 1976",
    "coference_code": "C76-01-05",
    "meeting": "Joint International Symposium on Mathematical Physics",
    "location": "Mexico City, Mexico"
  }]
}, {
  "meeting_name": [{
    "date": "19-22 Jan 1976",
    "coference_code": "C76-01-19",
    "meeting": "1976 Orbis Scientiae - New Pathways in High Energy Physics",
    "location": "Coral Gables, Florida"
  }]
}, {
  "meeting_name": [{
    "date": "2-5 Feb 1976",
    "coference_code": "C76-02-02",
    "meeting": "APS/AAPT Joint Meeting, Winter 1976",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "9-14 Feb 1976",
    "coference_code": "C76-02-09",
    "meeting": "4th International Winter Meeting on Fundamental Physics",
    "location": "Salardu, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "16-27 Feb 1976",
    "coference_code": "C76-02-16",
    "meeting": "15th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Current Problems in Elementary Particles and Mathematical Physics)",
    "location": "Schladming, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "22-28 Feb 1976",
    "coference_code": "C76-02-22",
    "meeting": "International Meeting on Storage Ring Physics",
    "location": "Flaine, France"
  }]
}, {
  "meeting_name": [{
    "date": "24-26 Feb 1976",
    "coference_code": "C76-02-24",
    "meeting": "COMPCON SPRING",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "29 Feb - 6 Mar 1976",
    "coference_code": "C76-02-29",
    "meeting": "11th Rencontre de Moriond",
    "location": "Flaine, France"
  }]
}, {
  "meeting_name": [{
    "date": "1-3 Mar 1976",
    "coference_code": "C76-03-01",
    "meeting": "2nd International Conference at Vanderbilt on New Results in High Energy Physics: New Particles: Searches & Discoveries",
    "location": "Nashville, Tennessee"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "1-5 Mar 1976",
    "coference_code": "C76-03-01.1",
    "meeting": "Discussion Meeting on PETRA Experiments",
    "location": "Frascati, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "11 Mar 1976",
    "coference_code": "C76-03-11",
    "meeting": "Meeting on New Particles and New Quantum Numbers",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Mar 1976",
    "coference_code": "C76-03-22",
    "meeting": "ACM Conference on DATA: Abstraction, Definition, and Structure",
    "location": "Salt Lake City, Utah"
  }]
}, {
  "meeting_name": [{
    "date": "27-28 Mar 1976",
    "coference_code": "C76-03-27",
    "meeting": "Electron Collisions Workshop",
    "location": "Belfast, Northern Ireland"
  }]
}, {
  "meeting_name": [{
    "date": "28 Mar - 3 Apr 1976",
    "coference_code": "C76-03-28",
    "meeting": "18e Cours de Perfectionnement de l'AVCP: Aspects Recents de la Phys. des Particules & Retombees Technologiques",
    "location": "Zermatt, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "29 Mar - 1 Apr 1976",
    "coference_code": "C76-03-29",
    "meeting": "American Physical Society Meeting",
    "location": "Atlanta, Georgia"
  }]
}, {
  "meeting_name": [{
    "date": "29-31 Mar 1976",
    "coference_code": "C76-03-29.1",
    "meeting": "International Symposium on Computer Performance Modeling, Measurement and Evaluation",
    "location": "Cambridge, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "31 Mar-2 Apr 1976",
    "coference_code": "C76-03-31",
    "meeting": "Magnetospheric & Particle Physics",
    "location": "Sheffield, England"
  }]
}, {
  "meeting_name": [{
    "date": "31 Mar-2 Apr 1976",
    "coference_code": "C76-03-31.1",
    "meeting": "COMPUMAG - Computation of Magnetic Fields",
    "location": "Oxford, England"
  }]
}, {
  "meeting_name": [{
    "date": "1-10 Apr 1976",
    "coference_code": "C76-04-01",
    "meeting": "Topical Meeting on Intermediate Energy Physics",
    "location": "Zuoz, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "7-9 Apr 1976",
    "coference_code": "C76-04-07",
    "meeting": "Topical Meeting on Spontaneous Symmetry Breaking",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "18-23 Apr 1976",
    "coference_code": "C76-04-18",
    "meeting": "Thinkshops on Physics: Experimental Quantum Mechanics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "20-28 Apr 1976",
    "coference_code": "C76-04-20",
    "meeting": "International Conference on Nonlocal Quantum Field Theory.",
    "location": "Alushta, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Apr 1976",
    "coference_code": "C76-04-22",
    "meeting": "International Conference on the Production of Particles with New Quantum Numbers",
    "location": "Madison, Wis."
  }]
}, {
  "meeting_name": [{
    "date": "26-28 Apr 1976",
    "coference_code": "C76-04-26",
    "meeting": "Electronic Components Conference",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "26-29 Apr 1976",
    "coference_code": "C76-04-26.1",
    "meeting": "American Physical Society Meeting",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "3-15 May 1976",
    "coference_code": "C76-05-03",
    "meeting": "International School of Theory and Application of Computers - Data & Program Structures, Syntax & Semantics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "11-14 May 1976",
    "coference_code": "C76-05-11",
    "meeting": "Electro - IEEE International Convention",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "11-14 May 1976",
    "coference_code": "C76-05-11.1",
    "meeting": "6th International Cryogenic Engineering Conference (ICEC 6)",
    "location": "Grenoble, France"
  }]
}, {
  "meeting_name": [{
    "date": "17-20 May 1976",
    "coference_code": "C76-05-17.1",
    "meeting": "Spring Computer Conference",
    "location": "Atlantic City, New Jersey"
  }]
}, {
  "meeting_name": [{
    "date": "19-26 May 1976",
    "coference_code": "C76-05-19",
    "meeting": "3rd International Conference on Nuclei Far From Stability",
    "location": "Cargese, France"
  }]
}, {
  "meeting_name": [{
    "date": "23 May - 5 Jun 1976",
    "coference_code": "C76-05-23",
    "meeting": "International School on Statistical Mechanics: Critical Phenomena",
    "location": "Sitges, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "24-28 May 1976",
    "coference_code": "C76-05-24",
    "meeting": "International Topical Conference on Meson Nuclear Physics",
    "location": "Pittsburgh, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "25 May - 7 Jun 1976",
    "coference_code": "C76-05-25",
    "meeting": "16th Cracow Summer School on Theoretical Physics - Nuclear Collisions at High Energies and Exotic States of Hadronic Matter",
    "location": "Cracow, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "2-17 Jun 1976",
    "coference_code": "C76-06-02",
    "meeting": "International School on Electro- and Photonuclear Reactions",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "6-19 Jun 1976",
    "coference_code": "C76-06-06",
    "meeting": "1976 Cern School of Physics",
    "location": "Wepion, Belgium"
  }]
}, {
  "meeting_name": [{
    "date": "7-25 Jun 1976",
    "coference_code": "C76-06-07",
    "meeting": "Workshop on Quantum Electrodynamics",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "7-10 Jun 1976",
    "coference_code": "C76-06-07.1",
    "meeting": "1976 National Computer Conference",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "7 Jun - 2 Jul 1976",
    "coference_code": "C76-06-07.2",
    "meeting": "15th CAP Summer School: Group Theoretical Methods in Physics",
    "location": "Montreal, Quebec, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "7-12 Jun 1976",
    "coference_code": "C76-06-07.3",
    "meeting": "VII GIFT International Seminar on Theoretical Physics: Phenomenology of Particle Physics",
    "location": "L'Escala, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "8-12 Jun 1976",
    "coference_code": "C76-06-08",
    "meeting": "4th International Neutrino Conference 1976.",
    "location": "Aachen, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "10-15 Jun 1976",
    "coference_code": "C76-06-10",
    "meeting": "Topical Meeting on Multiparticle Production on Nuclei at Very High Energy",
    "location": "Trieste, Italy"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Jun 1976",
    "coference_code": "C76-06-14",
    "meeting": "1976 Summer APS-CAP-SMF Joint Meeting",
    "location": "Quebec, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "14-25 Jun 1976",
    "coference_code": "C76-06-14.1",
    "meeting": "4th International Workshop on Weak Interactions with Very High Energy Beams",
    "location": "Trieste, Italy"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "14-18 Jun 1976",
    "coference_code": "C76-06-14.2",
    "meeting": "Symposium on Asymptotic Structures of Space-Time",
    "location": "Cincinnati, Ohio"
  }]
}, {
  "meeting_name": [{
    "date": "15-18 Jun 1976",
    "coference_code": "C76-06-15",
    "meeting": "Joint Magnetism and Magnetic Materials (MMM) International Magnetics Conference (INTERMAG 76)",
    "location": "Pittsburgh, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Jun 1976",
    "coference_code": "C76-06-15.1",
    "meeting": "International Symposium on Selected Topics in Nuclear Structure",
    "location": "Dubna, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "20-27 Jun 1976",
    "coference_code": "C76-06-20",
    "meeting": "Workshops on Theoretical Physics: Weak Interactions and Field Theory",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "21-26 Jun 1976",
    "coference_code": "C76-06-21",
    "meeting": "IPP International Summer School - Experimental Status & Theoretical Approaches in Physics at High Energy Accelerators",
    "location": "Montreal, Quebec, Canada"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "21-25 Jun 1976",
    "coference_code": "C76-06-21.1",
    "meeting": "7th International Colloquium on Multiparticle Reactions",
    "location": "Munich, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "21 Jun - 2 Jul 1976",
    "coference_code": "C76-06-21.2",
    "meeting": "Health Physics Summer School",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "23-25 Jun 1976",
    "coference_code": "C76-06-23",
    "meeting": "1976 PEP Conference",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "24-25 Jun 1976",
    "coference_code": "C76-06-24",
    "meeting": "Renormalization Group Methods in Physics",
    "location": "Trondheim, Norway"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jun - 1 Jul 1976",
    "coference_code": "C76-06-28",
    "meeting": "5th Biennial International Codata Conference",
    "location": "Boulder, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "28 Jun - 25 Jul 1976",
    "coference_code": "C76-06-28.1",
    "meeting": "Workshop on Nonlinear Waves in Physics",
    "location": "Aspen, Colo"
  }]
}, {
  "meeting_name": [{
    "date": "28-30 Jun 1976",
    "coference_code": "C76-06-28.2",
    "meeting": "Recent Developments in General Relativity",
    "location": "Cambridge, England"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jun - 7 Jul 1976",
    "coference_code": "C76-06-28.3",
    "meeting": "International School of Cosmic Ray Physics: Fast Transient Phenomena in Astrophysics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jun - 1 Jul 1976",
    "coference_code": "C76-06-29",
    "meeting": "Topical Conference on Weak Interactions",
    "location": "Brighton, England"
  }]
}, {
  "meeting_name": [{
    "date": "5-9 Jul 1976",
    "coference_code": "C76-07-05",
    "meeting": "Topical Conference on Baryon Resonances",
    "location": "Oxford, England"
  }]
}, {
  "meeting_name": [{
    "date": "5 Jul - 14 Aug 1976",
    "coference_code": "C76-07-05.1",
    "meeting": "Ecole d'Ete de Physique Theorique - Weak and Electromagnetic Interactions at High Energy",
    "location": "Les Houches, France"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "5-9 Jul 1976",
    "coference_code": "C76-07-05.3",
    "meeting": "5th International Colloquium on Group Theoretical Methods in Physics (follows Summer School)",
    "location": "Montreal, Quebec, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "6-9 Jul 1976",
    "coference_code": "C76-07-06",
    "meeting": "1976 International Conference on the Interactions of Neutrons with Nuclei. BY INVITATION",
    "location": "Lowell, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "6-9 Jul 1976",
    "coference_code": "C76-07-06.1",
    "meeting": "Topical Meeting on Lepton Interactions and the New Particles",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "9-13 Jul 1976",
    "coference_code": "C76-07-09",
    "meeting": "Symposium on Antinucleon-Nucleon Reactions",
    "location": "Stockholm, Sweden"
  }]
}, {
  "meeting_name": [{
    "date": "12-31 Jul 1976",
    "coference_code": "C76-07-12",
    "meeting": "Cargese Summer Institute: New Developments in Quantum Field Theory and Statistical Mechanics",
    "location": "Cargese, France"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "12-30 Jul 1976",
    "coference_code": "C76-07-12.1",
    "meeting": "XVI Latin American School of Physics",
    "location": "Caracas, Venezuela"
  }]
}, {
  "meeting_name": [{
    "date": "14-16-Jul 1976",
    "coference_code": "C76-07-14",
    "meeting": "SIGGRAPH 76: Annual Conference on Computer Graphics and Interactive Techniques",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "15-21 Jul 1976",
    "coference_code": "C76-07-15",
    "meeting": "18th International Conference on High-Energy Physics",
    "location": "Tbilisi, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "23 Jul-8 Aug 1976",
    "coference_code": "C76-07-23",
    "meeting": "14th International School of Subnuclear Physics: Understanding the Fundamental Constitutents of Matter",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "26 Jul - 3 Sep 1976",
    "coference_code": "C76-07-26",
    "meeting": "Workshop on Particle Physics",
    "location": "Aspen, Colo"
  }]
}, {
  "meeting_name": [{
    "date": "26-30 Jul 1976",
    "coference_code": "C76-07-26.1",
    "meeting": "Topical Meeting on Nonperturbative Phenomena in Field Theory",
    "location": "Geneva, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "27-30 Jul 1976",
    "coference_code": "C76-07-27",
    "meeting": "1976 IEEE Annual Conference on Nuclear and Space Radiation Effects",
    "location": "San Diego, California"
  }]
}, {
  "meeting_name": [{
    "date": "1-21 Aug 1976",
    "coference_code": "C76-08-01",
    "meeting": "17th Scottish Universities Summer School in Physics, 1976 - Fundamentals of Quark Models",
    "location": "St. Andrews, Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "2-20 Aug 1976",
    "coference_code": "C76-08-02",
    "meeting": "International Summer College on Physics and Contemporary Needs, 1st",
    "location": "Nathiagali, Pakistan"
  }]
}, {
  "meeting_name": [{
    "date": "2-10 Aug 1976",
    "coference_code": "C76-08-02.1",
    "meeting": "4th SLAC Summer Institute on Particle Physics: Weak Interactions at High Energies & the Production of New Particles (to be followed by Topical Conference) (SSI 76)",
    "location": "Stanford, California"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "4-9 Aug 1976",
    "coference_code": "C76-08-04",
    "meeting": "International Symposium 'Quantum Mechanics 50 Years Later'",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "9-11 Aug 1976",
    "coference_code": "C76-08-09",
    "meeting": "International Workshop on Computer Networks - Theory and Practice",
    "location": "Waterloo, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "16-20 Aug 1976",
    "coference_code": "C76-08-16",
    "meeting": "1976 Gordon Conference on 'Elementary Particle Interactions'",
    "location": "Tilton, New Hampshire"
  }]
}, {
  "meeting_name": [{
    "date": "17-20 Aug 1976",
    "coference_code": "C76-08-17",
    "meeting": "1976 Applied Superconductivity Conference",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Aug 1976",
    "coference_code": "C76-08-23",
    "meeting": "4th International Conference on Positron Annihilation",
    "location": "Helsingor, Denmark"
  }]
}, {
  "meeting_name": [{
    "date": "23-27 Aug 1976",
    "coference_code": "C76-08-23.1",
    "meeting": "Symposium on High-Energy Physics with Polarized Beams and Targets",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "23 Aug - 4 Sep 1976",
    "coference_code": "C76-08-23.2",
    "meeting": "8th International Summer Institute of Theoretical Physics: Many Degrees of Freedom in Particle Physics and Field Theory",
    "location": "Bielefeld, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "24-30 Aug 1976",
    "coference_code": "C76-08-24",
    "meeting": "Haifa International Workshop: Topics in Atomic Physics Related to Nuclear Experimentation",
    "location": "Haifa, Israel"
  }]
}, {
  "meeting_name": [{
    "date": "1-3 Sep 1976",
    "coference_code": "C76-09-01",
    "meeting": "2nd Conference on Advances in Magnetic Materials and their Applications",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "1-15 Sep 1976",
    "coference_code": "C76-09-01.1",
    "meeting": "Tachyons and Related Topics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "6-10 Sep 1976",
    "coference_code": "C76-09-06",
    "meeting": "International Conference on Magnetism (ICM '76)",
    "location": "Amsterdam, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "6-19 Sep 1976",
    "coference_code": "C76-09-06.1",
    "meeting": "DUMAND - Deep Underwater Muon and Neutrino Detector, 1976 Summer Workshop",
    "location": "Honolulu, Hawaii"
  }]
}, {
  "meeting_name": [{
    "date": "7-10 Sep 1976",
    "coference_code": "C76-09-07",
    "meeting": "COMPCON Fall",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "12-24 Sep 1976",
    "coference_code": "C76-09-12",
    "meeting": "International College of Applied Physics: Synchrotron Radiation Research",
    "location": "Alghero, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "12-25 Sep 1976",
    "coference_code": "C76-09-12.1",
    "meeting": "1976 CERN School of Computing",
    "location": "La Grande Motte, France"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Sep 1976",
    "coference_code": "C76-09-14",
    "meeting": "1976 Proton Linear Accelerator Conference",
    "location": "Chalk River, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "14-17 Sep 1976",
    "coference_code": "C76-09-14.1",
    "meeting": "European Cosmic Ray Symposium",
    "location": "Leeds, England"
  }]
}, {
  "meeting_name": [{
    "date": "19 Sep-3 Oct 1976",
    "coference_code": "C76-09-19",
    "meeting": "12th International School of Elementary Particle Physics",
    "location": "Basko Polje, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "24-26 Sep 1976",
    "coference_code": "C76-09-24",
    "meeting": "Instrumentation for Synchrotron Radiation Research - POSTPONED UNTIL 1978",
    "location": "Warrington, England"
  }]
}, {
  "meeting_name": [{
    "date": "28 Sep - 1 Oct 1976",
    "coference_code": "C76-09-28",
    "meeting": "19th Ampere Congress - Magnetic Resonances",
    "location": "Heidelberg, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "5-8 Oct 1976",
    "coference_code": "C76-10-05",
    "meeting": "Electro-Optics and Interactive Computer Graphics Exhibition and Conference",
    "location": "Geneva, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "6-8 Oct 1976",
    "coference_code": "C76-10-06",
    "meeting": "1976 Meeting of the Division of Particles and Fields of the APS",
    "location": "Brookhaven, New York"
  }]
}, {
  "meeting_name": [{
    "date": "13-15 Oct 1976",
    "coference_code": "C76-10-13",
    "meeting": "2nd International Conference on Software Engineering",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "20-22 Oct 1976",
    "coference_code": "C76-10-20",
    "meeting": "Nuclear Science & Scintillation and Semiconductor Counter Symposia",
    "location": "New Orleans, Louisiana"
  }]
}, {
  "meeting_name": [{
    "date": "20-22 Oct 1976",
    "coference_code": "C76-10-20.1",
    "meeting": "ACM 1976, Annual Conference",
    "location": "Houston, Tex."
  }]
}, {
  "meeting_name": [{
    "date": "10-22 Nov 1976",
    "coference_code": "C76-11-10",
    "meeting": "International School of Particle Accelerators",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Nov 1976",
    "coference_code": "C76-11-15",
    "meeting": "Triangle Conference on Hadron Constituents and Symmetries",
    "location": "Smolenice, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "17 Nov 1976",
    "coference_code": "C76-11-17",
    "meeting": "Meeting on Computer Networks - Trends and Applications",
    "location": "Gaithersburg, Maryland"
  }]
}, {
  "meeting_name": [{
    "date": "20-22 Dec 1976",
    "coference_code": "C76-12-20",
    "meeting": "American Physical Society Meeting",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "7-10 Feb 1977",
    "coference_code": "C77-02-07",
    "meeting": "American Physical Society Meeting",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "22-25 Feb 1977",
    "coference_code": "C77-02-22",
    "meeting": "COMPCON Spring 1977",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "16-18 Mar 1977",
    "coference_code": "C77-03-16",
    "meeting": "Particle Accelerator Conference",
    "location": "Chicago, Illinois"
  }, {
    "meeting": "PAC 77"
  }]
}, {
  "meeting_name": [{
    "date": "20-24 Mar 1977",
    "coference_code": "C77-03-20",
    "meeting": "American Physical Society Meeting",
    "location": "San Diego, California"
  }]
}, {
  "meeting_name": [{
    "date": "24-30 Apr 1977",
    "coference_code": "C77-04-24",
    "meeting": "4th International Congress of the Radiation Protection Association",
    "location": "Paris, France"
  }]
}, {
  "meeting_name": [{
    "date": "25-28 Apr 1977",
    "coference_code": "C77-04-25",
    "meeting": "American Physical Society Meeting",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "6-10 Jun 1977",
    "coference_code": "C77-06-06.2",
    "meeting": "International Magnetics Conference (INTERMAG 77)",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "13-26 Aug 1977",
    "coference_code": "C77-08-13",
    "meeting": "15th International Cosmic Ray Conference",
    "location": "Plovdiv, Bulgaria"
  }]
}, {
  "meeting_name": [{
    "date": "12-16 Sep 1977",
    "coference_code": "C77-09-12",
    "meeting": "7th International Vacuum Congress",
    "location": "Vienna, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "19-22 Sep 1977",
    "coference_code": "C77-09-19",
    "meeting": "50th Anniversary of the Discovery of Electron Diffraction",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "22-26 Sep 1977",
    "coference_code": "C77-09-22",
    "meeting": "10th World Energy Conference",
    "location": "Istanbul, Turkey"
  }]
}, {
  "meeting_name": [{
    "date": "2-7 May 1974",
    "coference_code": "C74-05-02",
    "meeting": "9th International Conference on High-Energy Accelerators",
    "location": "Stanford, California"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "11-19 Jun 1974",
    "coference_code": "C74-06-11",
    "meeting": "North-Karelian Summer School in Physics: High-Energy Nuclear and Particle Physics",
    "location": "Loma-Koli, Finland"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "1-5 Jul 1974",
    "coference_code": "C74-07-01.1",
    "meeting": "9th Conference on Precision Electromagnetic Measurements",
    "location": "London, England"
  }]
}, {
  "meeting_name": [{
    "date": "2-14 Sep 1976",
    "coference_code": "C76-09-02",
    "meeting": "Erice School of Nuclear Physics: The Mesonic Interface between Nuclear Structure and Particle Physics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "31 Aug - 22 Sep 1974",
    "coference_code": "C74-08-31",
    "meeting": "International School of Theory and Application of Computers, 3rd Course: DATA",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Aug 1973",
    "coference_code": "C73-08-27.1",
    "meeting": "ACM 1973 Annual Conference:Computers in service of man. Law enforcement, welfare assistance, education, etc.",
    "location": "Atlanta, Georgia"
  }]
}, {
  "meeting_name": [{
    "date": "27-31 Aug 1973",
    "coference_code": "C73-08-27.2",
    "meeting": "Symposium on Practical Applications of Accelerators",
    "location": "Los Alamos, N.Mex."
  }]
}, {
  "meeting_name": [{
    "date": "28 Aug - 1 Sep 1973",
    "coference_code": "C73-08-28",
    "meeting": "International Conference on Few Particle Problems in the Nuclear Interactions",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "27 Aug - 1 Sep 1973",
    "coference_code": "C73-08-29",
    "meeting": "Canadian Institute of Particle Physics Summer School",
    "location": "Montreal, Quebec, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "31 Aug-4 Sep 1973",
    "coference_code": "C73-08-31",
    "meeting": "4th International Symposium on Multiparticle Hadrodynamics",
    "location": "Pavia, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "4-7 Sep 1973",
    "coference_code": "C73-09-04",
    "meeting": "International Computing Symposium",
    "location": "Davos, Switzerland"
  }]
}, {
  "meeting_name": [{
    "date": "5-8 Sep 1973",
    "coference_code": "C73-09-05",
    "meeting": "International Conference on Magnetic Structures in Superconductors",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "6-12 Sep 1973",
    "coference_code": "C73-09-06",
    "meeting": "2nd Aix en Provence International conference on Elementary Particles (7th in Biannual Series)",
    "location": "Aix-en-Provence, France"
  }]
}, {
  "meeting_name": [{
    "date": "8-23 Sep 1973",
    "coference_code": "C73-09-08",
    "meeting": "International School of Theory and Application of Computers Ettore Majorana: Computer Flexibility",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "11-14 Sep 1973",
    "coference_code": "C73-09-11",
    "meeting": "Western Electronic Show and Convention (WESCON)",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "25-31 Aug 1977",
    "coference_code": "C77-08-25",
    "meeting": "8th International Symposium on Lepton and Photon Interactions at High Energies",
    "location": "Hamburg, Germany"
  }, {
    "meeting": "LP 77"
  }]
}, {
  "meeting_name": [{
    "date": "4-9 Jul 1977",
    "coference_code": "C77-07-04",
    "meeting": "EPS Conference on Particle Physics.",
    "location": "Budapest, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "6-12 Mar 1977",
    "coference_code": "C77-03-06",
    "meeting": "12th Rencontre de Moriond, Session 1: High-Energy Leptonic Interactions",
    "location": "Flaine, France"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "12-18 Mar 1977",
    "coference_code": "C77-03-12",
    "meeting": "12th Rencontre de Moriond, Session 2: High-Energy Hadronic Interactions",
    "location": "Flaine, France"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "29-30 Apr 1977",
    "coference_code": "C77-04-29",
    "meeting": "V International Conference on Meson Spectroscopy",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "17-21 Jan 1977",
    "coference_code": "C77-01-17",
    "meeting": "Orbis Scientiae 1977",
    "location": "Coral Gables, Fla"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "1-5 Nov 1976",
    "coference_code": "C76-11-01",
    "meeting": "3rd High-Energy Physics Symposium",
    "location": "Bhubaneswar, India"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "5-6 Nov 1976",
    "coference_code": "C76-11-05",
    "meeting": "15th Eastern Theoretical Physics Conference",
    "location": "Rochester, New York"
  }]
}, {
  "meeting_name": [{
    "date": "29 Aug - 2 Sep 1977",
    "coference_code": "C77-08-29",
    "meeting": "6th International Conference on Magnet Technology (MT-6)",
    "location": "Bratislava, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "23-28 May 1977",
    "coference_code": "C77-05-23",
    "meeting": "Colloque National C.N.R.S.: Problemes Theoriques Lies aux Nouvelles Particules (Theoretical Problems Concerning the New Particles)",
    "location": "Montpellier, France"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Mar 1977",
    "coference_code": "C77-03-21",
    "meeting": "Fourth International Colloquium on Advanced Computing Methods in Theoretical Physics",
    "location": "Saint-Maximin, France"
  }]
}, {
  "meeting_name": [{
    "date": "11-22 Jul 1977",
    "coference_code": "C77-07-11",
    "meeting": "5th SLAC Summer Institute on Particle Physics : Quark Spectroscopy and Hadron Dynamics (Topical Conference last 3 days) (SSI 77)",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "10-23 Aug, 1977",
    "coference_code": "C77-08-10",
    "meeting": "7th Hawaii Topical Conference on Particle Physics",
    "location": "Honolulu, Hawaii"
  }]
}, {
  "meeting_name": [{
    "date": "15-19 Aug 1977",
    "coference_code": "C77-08-15",
    "meeting": "Gordon Research Conference on Elementary Particle Interactions",
    "location": "Tilton, New Hampshire"
  }]
}, {
  "meeting_name": [{
    "date": "24 Feb - 5 Mar 1977",
    "coference_code": "C77-02-24",
    "meeting": "16th Internationale Universitatswochen fur Kernphysik: (International School of Particle Physics: Contacts Between High Energy Physics and Other Fields of Physics)",
    "location": "Schladming, Austria"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "22-27 Sep 1974",
    "coference_code": "C74-09-22.1",
    "meeting": "International Symposium on High-Energy and Elementary Particle Physics",
    "location": "Varna, Bulgaria"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "10-19 Oct,1974",
    "coference_code": "C74-10-10",
    "meeting": "International School -Seminar on Actual Problems of Elementary Particle Physics",
    "location": "Sochi, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "3-8 Jun 1974",
    "coference_code": "C74-06-03.1",
    "meeting": "BNL Workshop on Physics with Polarized Targets",
    "location": "Upton, New York"
  }]
}, {
  "meeting_name": [{
    "date": "11-19 Jun 1975",
    "coference_code": "C75-06-11.1",
    "meeting": "Symposium on Proton-Antiproton Interactions",
    "location": "Loma-Koli, Finland"
  }]
}, {
  "meeting_name": [{
    "date": "11-17 Jul 1977",
    "coference_code": "C77-07-11.1",
    "meeting": "10th International Conference on High-Energy Accelerators",
    "location": "Serpukhov, Protvino, USSR"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "29 Aug - 2 Sep 1977",
    "coference_code": "C77-08-29.1",
    "meeting": "7th International Conference on High-Energy Physics and Nuclear Structure (ICOHEPANS)",
    "location": "Zurich, Switzerland"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "27 Jun - 2 Jul 1976",
    "coference_code": "C76-06-02.1",
    "meeting": "1976 Health Physics Society Annual Meeting",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "22-25 Mar 1977",
    "coference_code": "C77-03-22",
    "meeting": "ELECTRO - IEEE International Convention",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Nov 1977",
    "coference_code": "C77-11-21",
    "meeting": "American Physical Society Meeting",
    "location": "Miami Beach, Florida"
  }]
}, {
  "meeting_name": [{
    "date": "06-15 Jun 1977",
    "coference_code": "C77-06-06",
    "meeting": "International Conference on the Mathematical Problems in Theoretical Physics",
    "location": "Rome, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "24-30 Apr 1977",
    "coference_code": "C77-04-24.1",
    "meeting": "International School of Physics of Exotic Atoms, 1st course: Exotic Atoms and Related Topics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "13-20 Jul 1975",
    "coference_code": "C75-07-13",
    "meeting": "Summer Workshop on Neutrino Interactions in the Ocean Depths and on Oceanographic Physics and on Marine Engineering, Project DUMAND",
    "location": "Bellingham, Washington"
  }]
}, {
  "meeting_name": [{
    "date": "28-29 Jan 1977",
    "coference_code": "C77-01-28",
    "meeting": "SLAC Program Advisory Committee Meeting",
    "location": "SLAC"
  }]
}, {
  "meeting_name": [{
    "date": "13-19 Jun 1977",
    "coference_code": "C77-06-13",
    "meeting": "VIII GIFT International Seminar on Theoretical Physics: Topics on Quantum Field Theory and Gauge Theories",
    "location": "Salamanca, Spain"
  }]
}, {
  "meeting_name": [{
    "date": "13-15 May 1970",
    "coference_code": "C70-05-13",
    "meeting": "Colloquium on High Multiplicity Hadronic Interactions",
    "location": "Paris, France"
  }]
}, {
  "meeting_name": [{
    "date": "28 Jun - 9 Jul 1976",
    "coference_code": "C76-06-28.4",
    "meeting": "1976 NAL Summer Study on Utilization of the Energy Doubler/Saver",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "27-31 Aug 1974",
    "coference_code": "C74-08-27.1",
    "meeting": "4th International Conference on Luminescence Dosimetry",
    "location": "Cracow, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "13-16 Jun 1977",
    "coference_code": "C77-06-13.1",
    "meeting": "1977 National Computer Conference",
    "location": "Dallas, Tex."
  }]
}, {
  "meeting_name": [{
    "date": "12-17 Jun 1977",
    "coference_code": "C77-06-12",
    "meeting": "VIII International Symposium on Multiparticle Dynamics",
    "location": "Kaysersberg, France"
  }]
}, {
  "meeting_name": [{
    "date": "13-17 Dec 1976",
    "coference_code": "C76-12-13",
    "meeting": "8th Texas Symposium on Relativistic Astrophysics",
    "location": "Boston, Mass."
  }]
}, {
  "meeting_name": [{
    "date": "6-9 Jun 1977",
    "coference_code": "C77-06-06.1",
    "meeting": "International Conference on Multiphoton Processes",
    "location": "Rochester, New York"
  }]
}, {
  "meeting_name": [{
    "date": "19 Nov 1976",
    "coference_code": "C76-11-19",
    "meeting": "Workshop on Ultra-High Energy Muon and Neutrino Interactions",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "31 Mar - 1 Apr 1977",
    "coference_code": "C77-03-31",
    "meeting": "Workshop on Prospects of Strong Interaction Physics at ISABELLE",
    "location": "Brookhaven, New York"
  }]
}, {
  "meeting_name": [{
    "date": "3 Mar 1977",
    "coference_code": "C77-03-03",
    "meeting": "Workshop on Low-energy Separated Beams",
    "location": "Brookhaven, New York"
  }]
}, {
  "meeting_name": [{
    "date": "31 Oct - 2 Nov 1977",
    "coference_code": "C77-10-31",
    "meeting": "18th Annual IEEE Symposium on Foundations of Computer Science",
    "location": "Providence, Rhode Island"
  }]
}, {
  "meeting_name": [{
    "date": "12-15 Jul 1977",
    "coference_code": "C77-07-12",
    "meeting": "1977 IEEE Annual Conference on Nuclear and Space Radiation Effects",
    "location": "Williamsburg, Virginia"
  }]
}, {
  "meeting_name": [{
    "date": "4 Jul - 19 Aug 1977",
    "coference_code": "C77-07-04.1",
    "meeting": "Summer School on Theoretical Physics: Heavy Ions and Mesons in Nuclear Physics",
    "location": "Les Houches, France"
  }]
}, {
  "meeting_name": [{
    "date": "4-24 Jul 1977",
    "coference_code": "C77-07-04.2",
    "meeting": "Cargese Summer Institute: Hadron Structure and Lepton-Hadron Interactions",
    "location": "Cargese, France"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "date": "6-8 Oct 1977",
    "coference_code": "C77-10-06",
    "meeting": "1977 Meeting of the Division of Particles and Fields of the APS",
    "location": "Argonne, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "27-30 Jun 1977",
    "coference_code": "C77-06-27",
    "meeting": "Second International Conference on the Nucleon-Nucleon Interaction",
    "location": "Vancouver, British Columbia, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "13-17 Jun 1977",
    "coference_code": "C77-06-13.2",
    "meeting": "International Conference on Hyperfine Interactions",
    "location": "Madison, New Jersey"
  }]
}, {
  "meeting_name": [{
    "date": "22-24 Jun 1977",
    "coference_code": "C77-06-22",
    "meeting": "Summer School on Nuclear Structure with Pions and Protons",
    "location": "Los Alamos, N.Mex."
  }]
}, {
  "meeting_name": [{
    "date": "25 Aug - 5 Sep 1977",
    "coference_code": "C77-08-25.1",
    "meeting": "Banff Summer Institute on Particles and Fields",
    "location": "Banff, Canada"
  }]
}, {
  "meeting_name": [{
    "date": "1-3 Aug 1977",
    "coference_code": "C77-08-01",
    "meeting": "Conference on Changing Career Opportunities for Physicists",
    "location": "State College, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "19-28 Jul 1977",
    "coference_code": "C77-07-19",
    "meeting": "5th International Workshop on Weak Interactions with Very High Energy Beams",
    "location": "Kobe, Japan"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "date": "7-12 Mar 1977",
    "coference_code": "C77-03-07",
    "meeting": "VIII Spring Symposium on High-Energy Physics",
    "location": "Leipzig, Germany"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "30 May - 2 Sep 1977",
    "coference_code": "C77-05-30",
    "meeting": "1977 Physics-Astrophysics Program",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "27 Jun - 2 Sep 1977",
    "coference_code": "C77-06-27.1",
    "meeting": "Aspen Workshop on Particle Physics",
    "location": "Aspen, Colo."
  }]
}, {
  "meeting_name": [{
    "date": "10-14 Nov 1976",
    "coference_code": "C76-11-10.1",
    "meeting": "Multiparticle Production Processes and Inclusive Reactions at High Energies",
    "location": "Serpukhov, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "18-29 Jul 1977",
    "coference_code": "C77-07-18",
    "meeting": "Brookhaven ISABELLE Summer Workshops for 1977",
    "location": "Upton, New York"
  }]
}, {
  "meeting_name": [{
    "date": "31 Jul - 20 Aug 1977",
    "coference_code": "C77-07-31",
    "meeting": "18th Scottish Universities Summer School in Physics: Nuclear Structure Physics",
    "location": "St. Andrews, Scotland"
  }]
}, {
  "meeting_name": [{
    "date": "11-18 Aug 1977",
    "coference_code": "C77-08-11",
    "meeting": "Symposium on the Foundations of Modern Physics",
    "location": "Loma-Koli, Finland"
  }]
}, {
  "meeting_name": [{
    "date": "11-23 Jul 1977",
    "coference_code": "C77-07-11.2",
    "meeting": "International School of Physics 'Enrico Fermi' on Weak Interactions",
    "location": "Varenna, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "15-30 Jun 1977",
    "coference_code": "C77-06-15",
    "meeting": "Conference on Interaction of Photons with Matter",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "20 May - 4 Jun 1977",
    "coference_code": "C77-05-20",
    "meeting": "Highly Specialized Seminar - Multihadronic Final States",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "23 Jul - 10 Aug 1977",
    "coference_code": "C77-07-23",
    "meeting": "15th Erice School of Subnuclear Physics: The Why's of Subnuclear Physics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "24 Aug - 4 Sep 1977",
    "coference_code": "C77-08-24",
    "meeting": "International School of Relativistic Astrophysics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "22 May - 4 Jun 1977",
    "coference_code": "C77-05-22",
    "meeting": "CERN-JINR School of Physics",
    "location": "Nafplion, Greece"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jun - 2 Jul 1977",
    "coference_code": "C77-06-29",
    "meeting": "Topical Meeting on Problems in Particle Physics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "9 Nov 1977 - Jun 1978",
    "coference_code": "C77-11-09",
    "meeting": "Advanced School of Physics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "20 Jun - 8 Jul 1977",
    "coference_code": "C77-06-20",
    "meeting": "Summer College on Physics and Contemporary Needs",
    "location": "Nathiagali, Pakistan"
  }]
}, {
  "meeting_name": [{
    "date": "20-24 Jun 1977",
    "coference_code": "C77-06-20.1",
    "meeting": "International Colloquium on Algebras of Operators and Their Applications to Mathematical Physics",
    "location": "Marseille, France"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 MAY 1975",
    "coference_code": "C75-05-21.1",
    "meeting": "13TH SYMPOSIUM ON ELECTRON, ION, AND PHOTON BEAM TECHNOLOGY",
    "location": "ColoradoLORADO SPRINGS, Colorado."
  }]
}, {
  "meeting_name": [{
    "date": "21-22 Jan 1977",
    "coference_code": "C77-01-21",
    "meeting": "Five Decades in Weak Interactions",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Jan 1978",
    "coference_code": "C78-01-23",
    "meeting": "General Meeting of the American Physical Society",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "27-30 Mar 1978",
    "coference_code": "C78-03-27",
    "meeting": "General Meeting of the American Physical Society",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "24-27 Apr 1978",
    "coference_code": "C78-04-24",
    "meeting": "General Meeting of the American Physical Society",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "23-30 Aug 1978",
    "coference_code": "C78-08-23",
    "meeting": "19th International Conference on High-Energy Physics",
    "location": "Tokyo, Japan"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "date": "2-3 Dec 1977",
    "coference_code": "C77-12-02",
    "meeting": "Irvine Conference on Leptons and Quarks",
    "location": "Irvine, California"
  }]
}, {
  "meeting_name": [{
    "date": "23-25 May 1977",
    "coference_code": "C77-05-23.1",
    "meeting": "Fundamentals of Microprocessing",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "24-30 Aug 1978",
    "coference_code": "C78-08-24",
    "meeting": "8th International Conference on Few Body Systems and Nuclear Forces",
    "location": "Graz, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Apr 1977",
    "coference_code": "C77-04-19",
    "meeting": "ELECTRO '77",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "16-17 May 1977",
    "coference_code": "C77-05-16",
    "meeting": "Conference on the Present Status of Weak Interaction Physics",
    "location": "Bloomington, Indiana"
  }]
}, {
  "meeting_name": [{
    "date": "18-24 Jun 1977",
    "coference_code": "C77-06-18",
    "meeting": "5th International Conference on Neutrino Physics and Astrophysics",
    "location": "Elbrus, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "20-22 Oct 1977",
    "coference_code": "C77-10-20",
    "meeting": "First Ben Lee Memorial International Conference on Parity Nonconservation , Weak Neutral Currents and Gauge Theories",
    "location": "Batavia, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "11 Jul - 12 Aug 1977",
    "coference_code": "C77-07-11.5",
    "meeting": "7th Annual Institute in Computer Science",
    "location": "Santa Cruz, California"
  }]
}, {
  "meeting_name": [{
    "date": "10-22 May 1977",
    "coference_code": "C77-05-10",
    "meeting": "International School of Cosmology and Gravitation: Theories of Gravitation",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "11-19 Apr 1977",
    "coference_code": "C77-04-11",
    "meeting": "Highly Specialized Seminars: Statistical Mechanics at High Density",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "27 Jun - 9 Jul 1977",
    "coference_code": "C77-06-27.2",
    "meeting": "International School of Mathematical Physics: Invariant Wave Equations",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "21-24 Sep 1976",
    "coference_code": "C76-09-21",
    "meeting": "23rd National Symposium of the American Vacuum Society",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "28-31 Oct 1975",
    "coference_code": "C75-10-28",
    "meeting": "22nd National Symposium of the American Vacuum Society",
    "location": "Philadelphia, Pennsylvania"
  }]
}, {
  "meeting_name": [{
    "date": "20-30 Jun 1977",
    "coference_code": "C77-06-20.2",
    "meeting": "Workshop on Theoretical Problems in Quantum Chromodynamics",
    "location": "Chania, Greece"
  }]
}, {
  "meeting_name": [{
    "date": "9-20 Jul 1977",
    "coference_code": "C77-07-09",
    "meeting": "International School of Astrophysics - 4th Course: Infrared Astronomy",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "29 Mar - 24 Jun 1978",
    "coference_code": "C78-03-29",
    "meeting": "Spring College on The Physics of Modern Materials",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "24 Feb - 2 Mar 1974",
    "coference_code": "C74-02-24",
    "meeting": "AAAS Annual Meeting",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "11-16 Jul 1977",
    "coference_code": "C77-07-11.3",
    "meeting": "International Summer School on Groups and Many-Body Physics",
    "location": "Tubingen, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "18-22 Jul 1977",
    "coference_code": "C77-07-18.1",
    "meeting": "6th International Colloquium on Group Theoretical Methods in Physics",
    "location": "Tubingen, Germany"
  }]
}, {
  "meeting_name": [{
    "date": "23-25 Apr 1976",
    "coference_code": "C76-04-23",
    "meeting": "Journees Relativistes",
    "location": "Brussels, Belgium"
  }]
}, {
  "meeting_name": [{
    "date": "25 Nov - 4 Dec 1976",
    "coference_code": "C76-11-25",
    "meeting": "International School of Relativistic Astrophysics",
    "location": "Erice, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "29 Jan - 1 Feb 1979",
    "coference_code": "C79-01-29",
    "meeting": "General Meeting of the American Physical Society",
    "location": "New York, New York"
  }]
}, {
  "meeting_name": [{
    "date": "19-23 Mar 1979",
    "coference_code": "C79-03-19",
    "meeting": "General Meeting of the American Physical Society",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "23-26 Apr 1979",
    "coference_code": "C79-04-23",
    "meeting": "General Meeting of the American Physical Society",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "25-27 May 1977",
    "coference_code": "C77-05-25",
    "meeting": "Electron, Ion and Photon Beam Technology",
    "location": "Palo Alto, California"
  }]
}, {
  "meeting_name": [{
    "date": "6-8 Jun 1977",
    "coference_code": "C77-06-06.3",
    "meeting": "Conference on Pattern Recognition and Image Processing",
    "location": "Troy, New York"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 Jun 1977",
    "coference_code": "C77-06-14",
    "meeting": "Power Electronics Specialists Conference",
    "location": "Palo Alto, California"
  }]
}, {
  "meeting_name": [{
    "date": "21-23 Jun 1977",
    "coference_code": "C77-06-21",
    "meeting": "International Microwave Symposium",
    "location": "San Diego, California"
  }]
}, {
  "meeting_name": [{
    "date": "21-25 Jun 1977",
    "coference_code": "C77-06-21.1",
    "meeting": "World Electrotechnical Congress, - ELECTRO '77",
    "location": "Moscow, USSR"
  }]
}, {
  "meeting_name": [{
    "date": "17-22 Jul 1977",
    "coference_code": "C77-07-17",
    "meeting": "Power Engineering Society Summer Meeting",
    "location": "Mexico City, Mexico"
  }]
}, {
  "meeting_name": [{
    "date": "6-9 Sep 1977",
    "coference_code": "C77-09-06",
    "meeting": "COMPCON Fall '77",
    "location": "Washington, D.C."
  }]
}, {
  "meeting_name": [{
    "date": "18-21 Sep 1977",
    "coference_code": "C77-09-18.2",
    "meeting": "Joint Power Generation Technical Conference",
    "location": "Los Angeles, California"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Sep 1977",
    "coference_code": "C77-09-19.1",
    "meeting": "Western Electronic Show and Convention (WESCON)",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "6-8 Oct 1977",
    "coference_code": "C77-10-06.1",
    "meeting": "3rd Very Large Databases Conference (VLDB)",
    "location": "Tokyo, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Oct 1977",
    "coference_code": "C77-10-19",
    "meeting": "Nuclear science - Nuclear Power Systems",
    "location": "San Francisco, California"
  }]
}, {
  "meeting_name": [{
    "date": "8-11 Nov 1977",
    "coference_code": "C77-11-08",
    "meeting": "Computer Software and Applications Conference (COMPSAC '77)",
    "location": "Chicago, Illinois"
  }]
}, {
  "meeting_name": [{
    "date": "18 Sep - 2 Oct 1977",
    "coference_code": "C77-09-18",
    "meeting": "Seminar - New Approaches to the Teaching and Learning of Physics",
    "location": "Dubrovnik, Yugoslavia"
  }]
}, {
  "meeting_name": [{
    "date": "28 Feb - 1 Mar 1977",
    "coference_code": "C77-02-28",
    "meeting": "Workshop on TRISTAN",
    "location": "Tsukuba, Japan"
  }]
}, {
  "meeting_name": [{
    "date": "11-14 Oct 1977",
    "coference_code": "C77-10-11",
    "meeting": "Triangle Meeting - Hadron Structure '77",
    "location": "Strbske Pleso, Czechoslovakia"
  }]
}, {
  "meeting_name": [{
    "date": "27 Jun - 23 Jul 1977",
    "coference_code": "C77-06-27.3",
    "meeting": "Workshop on the Theory and Applications of Solitons",
    "location": "Salerno, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "12-13 Sep 1977",
    "coference_code": "C77-09-12.1",
    "meeting": "Synchrotron Radiation Instrumentation and and Developments",
    "location": "Orsay, France"
  }]
}, {
  "meeting_name": [{
    "date": "29 Oct 1976",
    "coference_code": "C76-10-29",
    "meeting": "Topical Meeting on Large p-transverse Physics",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "13-16 Mar 1978",
    "coference_code": "C78-03-13",
    "meeting": "Workshop on Few-Body Problems in Nuclear Physics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "14-16 Feb 1978",
    "coference_code": "C78-02-14",
    "meeting": "Wire Chamber Conference (WCC)",
    "location": "Vienna, Austria"
  }]
}, {
  "meeting_name": [{
    "date": "11-15 Jul 1977",
    "coference_code": "C77-07-11.4",
    "meeting": "Workshop on Particle Electrodynamics",
    "location": "Trieste, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "15-16 Aug 1977",
    "coference_code": "C77-08-15.1",
    "meeting": "SIGART-SIGPLAN Symposium on Artificial Intelligence and Programming Languages",
    "location": "Rochester, New York"
  }]
}, {
  "meeting_name": [{
    "date": "8-11 Nov 1977",
    "coference_code": "C77-11-08.1",
    "meeting": "23rd Annual Conference on Magnetism and Magnetic Materials",
    "location": "Minneapolis, Minnesota"
  }]
}, {
  "meeting_name": [{
    "date": "27-28 Oct 1977",
    "coference_code": "C77-10-27",
    "meeting": "1977 SSRP Users Group Meeting",
    "location": "Stanford, California"
  }]
}, {
  "meeting_name": [{
    "date": "23-25 Jan 1978",
    "coference_code": "C78-01-23.1",
    "meeting": "Fifth Annual ACM SIGACT-SIGPLAN Symposium on Principles of Programming Languages",
    "location": "Tucson, Ariz."
  }]
}, {
  "meeting_name": [{
    "date": "14-18 June 1976",
    "coference_code": "C76-06-14.3",
    "meeting": "Conference on Quark Confinement and Field Theory.",
    "location": "Rochester, New York"
  }]
}, {
  "meeting_name": [{
    "date": "25-27 May 1977",
    "coference_code": "C77-05-25.1",
    "meeting": "2nd Berkeley Workshop on Distributed Data Management and Computer Networks",
    "location": "Berkeley, California"
  }]
}, {
  "meeting_name": [{
    "date": "3-7 October 1977",
    "coference_code": "C77-10-03",
    "meeting": "Recent Developments in High-Energy Physics",
    "location": "Campione d'Italia, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "25-29 Sep 1978",
    "coference_code": "C78-09-25",
    "meeting": "4th EPS General Conference: Trends in Physics",
    "location": "York, England"
  }]
}, {
  "meeting_name": [{
    "date": "26 Sep - 1 Oct 1977",
    "coference_code": "C77-09-26",
    "meeting": "3rd Intnl. Summer School on Vacuum Physics",
    "location": "Lake Balaton, Hungary"
  }]
}, {
  "meeting_name": [{
    "date": "28 May - 10 Jun 1978",
    "coference_code": "C78-05-28",
    "meeting": "The 1978 CERN School of Computing",
    "location": "Jadwisin, Poland"
  }]
}, {
  "meeting_name": [{
    "date": "4-17 Jun 1978",
    "coference_code": "C78-06-04",
    "meeting": "The 1978 CERN School of Physics",
    "location": "Utrecht, Netherlands"
  }]
}, {
  "meeting_name": [{
    "date": "9-12 May 1978",
    "coference_code": "C78-05-09",
    "meeting": "International Magnetics Conference (INTERMAG 78)",
    "location": "Florence, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "22-25 May 1978",
    "coference_code": "C78-05-22",
    "meeting": "6th International CODATA Conference",
    "location": "Palermo, Italy"
  }]
}, {
  "meeting_name": [{
    "date": "28 Apr- 2 May,1978",
    "coference_code": "C78-04-28",
    "meeting": "6th International Conference on Neutrino Physics - NEUTRINOS '78",
    "location": "Lafayette, Indiana"
  }]
}, {
  "meeting_name": [{
    "date": "4-5 Nov 1977",
    "coference_code": "C77-11-04",
    "meeting": "16th Eastern Theoretical Physics Conference",
    "location": "Williamsburg, Virginia"
  }]
}, {
  "meeting_name": [{
    "date": "27-29 Sep 1977",
    "coference_code": "C77-09-27",
    "meeting": "5th Conference on Data Communication",
    "location": "Snowbird, Utah"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-28",
    "location": "San Francisco, California",
    "date": "28 Feb - 2 Mar 1978",
    "meeting": "COMPCON Spring 1978"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-03",
    "location": "Palo Alto, California",
    "date": "3-5 Apr 1978",
    "meeting": "5th Computer Architecture Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-23",
    "location": "Boston, Mass.",
    "date": "23-25 May 1978",
    "meeting": "ELECTRO '78"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-27",
    "location": "Ottawa, Canada",
    "date": "27-29 Jun 1978",
    "meeting": "International Microwave Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-18.1",
    "location": "Kupari, Yugoslavia",
    "date": "18 Sep - 2 Oct 1977",
    "meeting": "13th International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-01-16",
    "location": "Coral Gables, Florida",
    "date": "16-19 Jan 1978",
    "meeting": "ORBIS SCIENTIAE 1978"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-12",
    "location": "San Francisco, California",
    "date": "12-14 Mar 1979",
    "meeting": "8th Particle Accelerator Conference"
  }, {
    "meeting": "PAC 79"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-18.1",
    "location": "Bergen, Norway",
    "date": "18-22 Jun 1979",
    "meeting": "7th International Conference on Neutrinos, Weak Interactions and Cosmology - Neutrino 79"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-06",
    "location": "Nashville, Tennessee",
    "date": "6-8 Mar 1978",
    "meeting": "3rd International Conference at Vanderbilt on New Results in High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-13",
    "location": "Maria Laach, Germany",
    "date": "13-23 Sep 1977",
    "meeting": "Herbstschule fur Hochenergiephysik (Autumn School of High Energy Physics)"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-21",
    "location": "Schladming, Austria",
    "date": "21 Feb - 3 Mar 1978",
    "meeting": "17th International Universitatswochen for Kernphysik (International School of Particle Physics: Facts and Prospects of Gauge Theories)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-02-14",
    "location": "Candanchu, Spain",
    "date": "14-18 Feb 1977",
    "meeting": "5th International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-07.1",
    "location": "Karpacz, Poland",
    "date": "7-20 Mar 1977",
    "meeting": "14th Annual Winter School on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-23",
    "location": "place not known 1977",
    "date": "23-25 Mar 1977",
    "meeting": "4th Annual Computer Architecture Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C72-07-07",
    "location": "Erice, Italy",
    "date": "7-29 Jul 1972",
    "meeting": "10th International School of Subnuclear Physics: Highlights in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-12",
    "location": "Les Arcs, France",
    "date": "12-24 Mar 1978",
    "meeting": "13th Rencontre de Moriond - Session I Mar 12-18: High-Energy Leptonic Interactions, Session II Mar 18-24: High Energy Hadronic Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-12-12",
    "location": "Panchgani, India",
    "date": "12-31 Dec 1977",
    "meeting": "Winter School in Theoretical High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-14.2",
    "location": "Maria Laach, Germany",
    "date": "14-24 Sep 1976",
    "meeting": "Herbschule fur Hochenergiephysik"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-13",
    "location": "Wroclaw, Poland",
    "date": "13-17 Sep 1976",
    "meeting": "International Symposium on High Voltage Insulation for Low Temperature Application"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-13.1",
    "location": "Vlieland, Netherlands",
    "date": "13-15 Sep 1976",
    "meeting": "1976 European Symposium on Few Particle Problems in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-07-12.1",
    "location": "Tokyo, Japan",
    "date": "12-14 Jul 1977",
    "meeting": "1977 INS International Symposium on New Particles and the Structure of Hadrons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-05",
    "location": "Bielefeld, Germany",
    "date": "5-8 Sep 1977",
    "meeting": "Workshop on Large Transverse Momentum Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-26",
    "location": "San Diego, California",
    "date": "26-27 Aug 1976",
    "meeting": "Acousto-Optics: Device Development, Instrumentation, Applications (Meeting of Soc. of Photo-optical Instrumentation Engineers)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-08-07",
    "location": "Waterloo, Canada",
    "date": "7-13 Aug 1977",
    "meeting": "8th International Conference on General Relativity and Gravitation (GR8)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-02-21",
    "location": "London, England",
    "date": "21-23 Feb 1977",
    "meeting": "International Conference on Reliability of Power Supply Systems."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-29",
    "location": "Dubna, USSR",
    "date": "29 Sep - 2 Oct 1976",
    "meeting": "2nd Symposium on Collective Methods of Acceleration"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-10",
    "location": "Argonne, Illinois",
    "date": "10 Jun 1977",
    "meeting": "Symposium on Experiments Using Enriched Antiproton, Polarized Proton, and Polarized Antiproton Beams at Fermilab Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-04-21",
    "location": "Padua, Italy",
    "date": "21-24 Apr 1976",
    "meeting": "Conference on Computer Assisted Scanning"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-03.1",
    "location": "Les Houches, France",
    "date": "3 Jul - 18 Aug 1978",
    "meeting": "Les Houches Summer School in Theoretical Physics: Ill-Condensed Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-08",
    "location": "Lake Yamanaka, Japan",
    "date": "8-11 Apr 1979",
    "meeting": "5th International Conference on Positron Annihilation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-12",
    "location": "Aspen, Colo.",
    "date": "12 Jun - 7 Aug 1978",
    "meeting": "Aspen Program on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05",
    "location": "Aspen, Colo.",
    "date": "5 Jun - 1 Sep 1978",
    "meeting": "1978 Physics-Astrophysics Program"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-19.1",
    "location": "Batavia, Illinois",
    "date": "19 Oct 1977",
    "meeting": "DUMAND Workshop on Ultra-High Energy Neutrino Interactions and Fluxes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-12-05",
    "location": "Washington, D.C.",
    "date": "5-7 Dec 1977",
    "meeting": "International Electron Devices Meeting (IEDM)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-21.1",
    "location": "Stanford, California",
    "date": "21-23 Mar 1977",
    "meeting": "Wiggler Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-12.1",
    "location": "Los Angeles, California",
    "date": "12-14 Sep 1978",
    "meeting": "Western Electronic Show and Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-18",
    "location": "Washington, D.C.",
    "date": "18-20 Oct 1978",
    "meeting": "1978 Nuclear Science & Nuclear Power Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-14",
    "location": "Cleveland, Ohio",
    "date": "14-17 Nov 1978",
    "meeting": "Magnetism and Magnetic Materials Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-04",
    "location": "Washington, D.C.",
    "date": "4-6 Dec 1978",
    "meeting": "International Electron Devices Meeting"
  }, {
    "meeting": "IEDM"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-30",
    "location": "Orlando, Florida",
    "date": "30 Apr - 2 May 1979",
    "meeting": "International Microwave Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-24",
    "location": "New York, New York",
    "date": "24-26 Apr 1979",
    "meeting": "ELECTRO '79"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-18",
    "location": "Charlottesville, Virginia",
    "date": "18 Mar 1977",
    "meeting": "Conference on Nonassociative Algebras in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C74-07-22.1",
    "location": "Heidelberg, Germany",
    "date": "22-26 Jul 1974",
    "meeting": "4th International Conference on Atomic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-25",
    "location": "Dubrovnik, Yugoslavia",
    "date": "25 Aug - 5 Sep 1976",
    "meeting": "2nd Adriatic Meeting on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-03.1",
    "location": "Gatlinburg, Tenn.",
    "date": "3-7 Oct 1977",
    "meeting": "4th International Conference on Small Angle Scattering of X-rays and Neutrons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-11",
    "location": "Austin, Tex.",
    "date": "11-16 Sep 1978",
    "meeting": "7th International Group Theory Colloquium: The Integrative Conference on Group Theory and Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-02-16",
    "location": "Rockville, Maryland",
    "date": "16-18 Feb 1977",
    "meeting": "Symposium on Biological Effects and Measurements of Radiofrequency Microwaves"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-29.1",
    "location": "Austin, Tex.",
    "date": "29-31 Mar 1978",
    "meeting": "Texas Conference on Mathematical Software"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-01-14",
    "location": "Calcutta, India",
    "date": "14-17 Jan 1978",
    "meeting": "International Symposium on Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-12-05.1",
    "location": "Atlanta, Georgia",
    "date": "5-9 Dec 1977",
    "meeting": "International Symposium on Standardization of Radiation Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-21.1",
    "location": "Detroit, Mich.",
    "date": "21-24 Feb 1978",
    "meeting": "Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-27.1",
    "location": "La Jolla, California",
    "date": "27-31 Mar 1978",
    "meeting": "AAS High-Energy Astrophysics Division Meeting"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-03.1",
    "location": "Oxford, England",
    "date": "3-5 Apr 1978",
    "meeting": "Vacuum '78"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-24.1",
    "location": "Anaheim, California",
    "date": "24-26 Apr 1978",
    "meeting": "Electronic Components Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-27",
    "location": "Geneva, Switzerland",
    "date": "27 Jun - 4 Jul 1979",
    "meeting": "1979 EPS High-Energy Physics Conference"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-01-02",
    "location": "Erice, Italy",
    "date": "2-10 Jan 1978",
    "meeting": "Highly Specialized Seminar: Trends in Computational Complexity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-20",
    "location": "Karpacz, Poland",
    "date": "20 Feb - 5 Mar 1978",
    "meeting": "15th Winter School of Theoretical Physics - Mathematical Problems of Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-31.1",
    "location": "Erice, Italy",
    "date": "31 Jul - 11 Aug, 1978",
    "meeting": "16th International School of Subnuclear Physics: The New Aspects of Subnuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-23",
    "location": "Batavia, Illinois",
    "date": "23-29 Aug 1979",
    "meeting": "9th International Symposium on Lepton and Photon Interactions at High Energy"
  }, {
    "meeting": "LP 79"
  }, {
    "meeting": "high-energy"
  }, {
    "meeting": "Proceedings of the 1979 International Symposium on Lepton and Photon Interactions at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-07-14",
    "location": "Tokyo, Japan",
    "date": "14-18 Jul 1977",
    "meeting": "Joint French-Japanese Seminar on New Particles and Weak Neutral Currents"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-12.4",
    "location": "Leipzig, Germany",
    "date": "12-20 Sep 1977",
    "meeting": "International Conference on Operator Algebras, Ideals and their Applications in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-09",
    "location": "Erevan, USSR",
    "date": "9-16 Sep 1977",
    "meeting": "All Union Seminar on Processing Physics Information"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-05-31",
    "location": "Bloomington, Indiana",
    "date": "31 May - 4 Jun 1976",
    "meeting": "Workshop on Determination of Momentum Wavefunctions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-05-05",
    "location": "Varna, Bulgaria",
    "date": "5-9 May 1977",
    "meeting": "IXth International Symposium on Nuclear Electronics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-25",
    "location": "Baku, USSR",
    "date": "25 Sep - 5 Oct 1976",
    "meeting": "International Summer School of Young Research Workers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-05.1",
    "location": "Tokyo, Japan",
    "date": "5-10 Sep 1977",
    "meeting": "International Conference on Nuclear Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-08-01.1",
    "location": "Istanbul, Turkey",
    "date": "1-13 Aug 1977",
    "meeting": "NATO Summer School on Nonlinear Equations in Physics and Mathematics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-10",
    "location": "Stanford, California",
    "date": "10-18 Jul 1978",
    "meeting": "6th SLAC Summer Institute on Particle Physics: Weak Interactions - Present and Future (SSI 78)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-09-04",
    "location": "Uzhgorod, USSR",
    "date": "4-15 Sep 1975",
    "meeting": "International School of Young Physicists on the Problems of Charged Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-06-30.1",
    "location": "Dijon, France",
    "date": "30 Jun - 4 Jul 1975",
    "meeting": "Colloquium on Physics with Storage Rings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-09-08.2",
    "location": "Chilton, England",
    "date": "8-26 Sep 1975",
    "meeting": "Summer School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-02-17",
    "location": "Karpacz, Poland",
    "date": "17-29 Feb 1976",
    "meeting": "13th Karpacz Winter School of Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-07-16",
    "location": "Tsukuba, Japan",
    "date": "16-19 Jul 1975",
    "meeting": "KEK Summer School"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C74-10-17",
    "location": "Cambridge, Mass.",
    "date": "17-18 Oct 1974",
    "meeting": "Symposium on Physics on Our World"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-06-17",
    "location": "Dubna, USSR",
    "date": "17-20 Jun 1975",
    "meeting": "International Meeting on Proportional and Drift Chambers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-07-14.2",
    "location": "Upton, New York",
    "date": "14-25 Jul 1975",
    "meeting": "Isabelle Summer Study"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-05-09.1",
    "location": "Batavia, Illinois",
    "date": "9-10 May 1975",
    "meeting": "Calorimetry Workshop, 1975"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-09-03.1",
    "location": "Warsaw, Poland",
    "date": "3-9 Sep 1975",
    "meeting": "International Symposium on High-Energy and Elementary Particle Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-06",
    "location": "Tallahassee, Florida",
    "date": "6-7 Apr 1978",
    "meeting": "Current Trends in the Theory of Fields: 50 Years of the Dirac Equation (In honor of Paul A.M. Dirac)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-18",
    "location": "Los Angeles, California",
    "date": "18-19 Feb 1978",
    "meeting": "Symposium Honoring Julian Schwinger on the Occasion of his 60th Birthday"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-10",
    "location": "Argonne, Illinois",
    "date": "10 Mar 1978",
    "meeting": "One Day Symposium on the Nucleon-Nucleon Interaction"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-02",
    "location": "Tabor, Czechoslovakia",
    "date": "2-7 Jul 1978",
    "meeting": "IX International Symposium on High-Energy Multiparticle Dynamics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-06",
    "location": "Madrid, Spain",
    "date": "6-11 Feb 1978",
    "meeting": "VIth International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-16.1",
    "location": "Los Alamos, N.Mex.",
    "date": "16-20 Aug 1976",
    "meeting": "Proton Storage Ring Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-04",
    "location": "Oxford, England",
    "date": "4-7 Jul 1978",
    "meeting": "Topical Conference on Neutrino Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-25",
    "location": "Barr (Strasbourg), France",
    "date": "25-30 Jun 1978",
    "meeting": "IV European Antiproton Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-22.1",
    "location": "Marseille, France",
    "date": "22-26 May 1978",
    "meeting": "Mathematical Problems in Feynman Path Integral"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-27.2",
    "location": "Berkeley, California",
    "date": "27-31 Mar 1978",
    "meeting": "Workshop on Producing High Luminosity Proton-Antiproton Storage Rings"
  }, {
    "meeting": "Proceedings of the Workshop on Producing High Luminosity High Energy Proton-Antiproton Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-25",
    "location": "Argonne, Illinois",
    "date": "25-28 Oct 1978",
    "meeting": "3rd International Symposium on High Energy Physics with Polarized Beams and Polarized Targets"
  }, {
    "meeting": "III"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05.1",
    "location": "Marseille, France",
    "date": "5-9 Jun 1978",
    "meeting": "Hadron Physics at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05.2",
    "location": "Erice, Italy",
    "date": "5-9 Jun 1978",
    "meeting": "Highly Specialized Seminars, 4th Session: Interacting Bosons in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-26",
    "location": "Trieste, Italy",
    "date": "26-30 Jun 1978",
    "meeting": "6th Trieste Conference on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-14",
    "location": "Singapore, Singapore",
    "date": "14-18 Aug 1978",
    "meeting": "International Meeting on Frontier of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-04",
    "location": "Karlsruhe, Germany",
    "date": "4-16 Sep 1978",
    "meeting": "Advanced Summer Institute 1978 on New Phenomena in Lepton-Hadron Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05.3",
    "location": "Jaca, Spain",
    "date": "5-10 Jun 1978",
    "meeting": "IX International GIFT Seminar on Theoretical Physics: Nonlinear Problems in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-18",
    "location": "Primorsko, Bulgaria",
    "date": "18-30 Sep 1978",
    "meeting": "12th International School on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-03",
    "location": "Rabat, Morocco",
    "date": "3-11 May 1978",
    "meeting": "Rencontre de Rabat: Scale Invariance and Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-18",
    "location": "Los Angeles, California",
    "date": "18-20 Dec 1978",
    "meeting": "Meeting of the Division of Particles and Fields of the APS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-02",
    "location": "Trieste, Italy",
    "date": "2-7 Oct 1978",
    "meeting": "Conference on Recent Progress in Many-Body Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-01",
    "location": "Hiroshima, Japan",
    "date": "1-2 Sep 1978",
    "meeting": "Meeting on Exotic Resonances"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-18",
    "location": "Erice, Italy",
    "date": "18-23 Mar 1978",
    "meeting": "Highly Specialized Seminars: Topics in Neutrino Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-10.1",
    "location": "Cargese, France",
    "date": "10-29 Jul 1978",
    "meeting": "Recent Developments in the Theory of Gravitation"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-18",
    "location": "Albuquerque, New Mexico",
    "date": "18-21 Jul 1978",
    "meeting": "Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-28",
    "location": "Geneva, Switzerland",
    "date": "28 Mar - 2 Apr 1977",
    "meeting": "P - Anti-P Study Week"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-03.2",
    "location": "Stanford, California",
    "date": "3-5 Apr 1978",
    "meeting": "Workshop on X-ray Instrumentation for Synchrotron Radiation Research"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-25.1",
    "location": "Erice, Italy",
    "date": "25 Oct - 3 Nov. 1978",
    "meeting": "International School of Radiation Damage and Protection: Calculational Techniques in Shielding and Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-22",
    "location": "Erice, Italy",
    "date": "22 Jun - 6 Jul 1978",
    "meeting": "International School of Cosmic Ray Astrophysics: Progress and Problems in Cosmic-Ray Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-31",
    "location": "La Jolla, California",
    "date": "31 Jul - 18 Aug 1978",
    "meeting": "Summer Workshop in Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-12",
    "location": "Maria Laach, Germany",
    "date": "12-22 Sep 1978",
    "meeting": "Autumn School in High-Energy Physics: Gauge Theories and their Experimental Basis"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-17",
    "location": "Kupari, Yugoslavia",
    "date": "17 Sep - 1 Oct 1978",
    "meeting": "14th International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-13",
    "location": "Erice, Italy",
    "date": "13-21 Oct 1978",
    "meeting": "Workshop on Theoretical Physics: Hadronic Matter at Extreme Energy Density"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-18",
    "location": "Liblice, Czechoslovakia",
    "date": "18-23 Jun 1978",
    "meeting": "Symposium on Mathematical Methods in the Theory of Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05.4",
    "location": "Anaheim, California",
    "date": "5-8 Jun 1978",
    "meeting": "1978 National Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-19",
    "location": "Ames, Iowa",
    "date": "19-24 Jun 1978",
    "meeting": "VIth International Workshop for Weak Interaction with Very High Energy Beams"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-21",
    "location": "Dubna, USSR",
    "date": "21-27 Jun 1978",
    "meeting": "5th International Seminar on High-Energy Physics Problems: Multiparticle Production and Limiting Fragmentation of Nuclei"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-17",
    "location": "Nathiagali, Pakistan",
    "date": "17 Jun - 6 Jul 1978",
    "meeting": "Third International Summer College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-15",
    "location": "Upton, New York",
    "date": "15-16 May 1978",
    "meeting": "Brookhaven High-Energy Discussion Group"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-20.1",
    "location": "Tokyo, Japan",
    "date": "20-22 Feb 1978",
    "meeting": "Winter Workshop on Particle Physics and Gravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-16",
    "location": "Erice, Italy",
    "date": "16-27 May 1978",
    "meeting": "Advanced School of Astronomy: Supernovae and Supernova Remnants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-19.1",
    "location": "Erice, Italy",
    "date": "19-30 Jun 1978",
    "meeting": "International School of Mathematics: Variational Inequalities and Complementary Problems in Mathematical Physics and Economics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-11",
    "location": "Erice, Italy",
    "date": "11-20 Aug 1978",
    "meeting": "Interdisciplinary Seminars: The Meaning of Culture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-07",
    "location": "Argonne, Illinois",
    "date": "7 Jun 1978",
    "meeting": "Polarized Beam Planning Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-08",
    "location": "Upton, New York",
    "date": "8-9 Nov 1978",
    "meeting": "Brookhaven Workshop on the AGS Fixed Target Research Program"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-16",
    "location": "College Park, Maryland",
    "date": "16-17 Nov 1979",
    "meeting": "18th Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-07",
    "location": "La Jolla, California",
    "date": "7-20 Aug 1978",
    "meeting": "DUMAND - Deep Underwater Muon and Neutrino Detection 1978 Summer Workshop, Session 2: Ultra High Energy Interactions and Astrophysical Neutrino Sources"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-06",
    "location": "Dubna, USSR",
    "date": "6-10 Jun 1978",
    "meeting": "3rd International Meeting on Proportional and Drift Chambers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-12.1",
    "location": "Gaithersburg, Maryland",
    "date": "12-13 Jun 1978",
    "meeting": "Microcomputer Based Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-14",
    "location": "Oxford, England",
    "date": "14-21 Jul 1978",
    "meeting": "The Role of the Laboratory in Physics Education"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-22",
    "location": "Prague, Czechoslovakia",
    "date": "22-25 Aug 1978",
    "meeting": "8th International Symposium: IMEKO Technical Committee on Photon-Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C72-07-31",
    "location": "Varenna, Italy",
    "date": "31 Jul - 12 Aug 1972",
    "meeting": "History of Twentieth Century Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C69-06-16.1",
    "location": "Varenna, Italy",
    "date": "16-26 Jun 1969",
    "meeting": "International School of Physics, Enrico Fermi, Course XLVI: Physics with Intersecting Storage Rings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C70-06-29.1",
    "location": "Varenna, Italy",
    "date": "29 Jun - 11 Jul 1970",
    "meeting": "International School of Physics, Enrico Fermi, Course IL: Foundations of Quantum Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C71-08-02",
    "location": "Varenna, Italy",
    "date": "2-14 Aug 1971",
    "meeting": "International School of Physics, Enrico Fermi, Course LIV: Developments in High Energy Physics"
  }, {
    "meeting": "54th International School of Physics 'Enrico Fermi' : Developments in high-energy physics -- Scuola Internazionale di Fisica 'Enrico Fermi'"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-11",
    "location": "Athens, Georgia",
    "date": "11-13 Jan 1979",
    "meeting": "17th Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-12.2",
    "location": "London, Canada",
    "date": "12-15 Jun 1978",
    "meeting": "33rd Annual Congress of the Canadian Association of Physicists and Summer Meeting of the AAPT"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-24",
    "location": "Los Angeles, California",
    "date": "24-28 Jul 1978",
    "meeting": "Advanced Microcomputer System Development"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-28",
    "location": "Les Houches, France",
    "date": "28 Mar - 6 Apr 1978",
    "meeting": "Winter Advanced Study Institute on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-23",
    "location": "Stoughton, Wis.",
    "date": "23-24 Oct 1978",
    "meeting": "11th Annual Synchrotron Radiation Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-11.1",
    "location": "Kiel, Germany",
    "date": "11-15 Sep 1978",
    "meeting": "6th European Cosmic Ray Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-03",
    "location": "Modra-Harmonia, Czechoslovakia",
    "date": "3-7 Oct 1978",
    "meeting": "Hadron Structure '78"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-03",
    "location": "London, England",
    "date": "3-14 Jul 1978",
    "meeting": "Health Physics Summer School 1978"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-25.2",
    "location": "Trieste, Italy",
    "date": "25 Oct - 23 Nov 1978",
    "meeting": "Autumn Course on Systems Analysis: Theory, Methods and Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-03.1",
    "location": "Bielefeld, Germany",
    "date": "3-6 Oct 1978",
    "meeting": "Workshop on Lepton Pair Production in Hadron-Hadron Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-01.1",
    "location": "Seoul, Korea",
    "date": "1-5 Sep 1978",
    "meeting": "Seoul Symposium on Elementary Particle Physics (In Memory of Benjamin W. Lee)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C65-03-10",
    "location": "Washington, D.C.",
    "date": "10-12 Mar 1965",
    "meeting": "1st IEEE Particle Accelerator Conference"
  }, {
    "meeting": "PAC 65"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C67-03-01",
    "location": "Washington, D.C.",
    "date": "1-3 Mar 1967",
    "meeting": "2nd IEEE Particle Accelerator Conference"
  }, {
    "meeting": "PAC 67"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C69-03-05",
    "location": "Washington, D.C.",
    "date": "5-7 Mar 1969",
    "meeting": "3rd IEEE Particle Accelerator Conference"
  }, {
    "meeting": "PAC 69"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C71-03-01",
    "location": "Chicago, Illinois",
    "date": "1-3 Mar 1971",
    "meeting": "4th IEEE Particle Accelerator Conference"
  }, {
    "meeting": "PAC 71"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-25.1",
    "location": "Hamburg, Germany",
    "date": "25-27 Sep 1978",
    "meeting": "Topical Meeting on Heavy Quarks and Leptons (PETRA Meeting)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-21",
    "location": "Chicago, Illinois",
    "date": "21-24 Jan 1980",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-24",
    "location": "New York, New York",
    "date": "24-28 Mar 1980",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-28",
    "location": "Washington, D.C.",
    "date": "28 Apr - 1 May 1980",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-17",
    "location": "New York, New York",
    "date": "17-20 Jul 1979",
    "meeting": "Joint International Magnetics and Magnetics and Magnetic Materials (MMM) and International Magnetics Conference (INTERMAG 79)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-19",
    "location": "Asilomar, California",
    "date": "19-22 Nov 1978",
    "meeting": "11th Annual Microprogramming Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-18.1",
    "location": "Pasadena, California",
    "date": "18-20 Oct 1978",
    "meeting": "SIGNUM Conference: The Programming Environment for Development of Numerical Software"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-19",
    "location": "Newark, Del.",
    "date": "19-21 Oct 1978",
    "meeting": "Workshop on Charm Production and Lifetime (Oct. 19), followed by Topical Conference on Cosmic Rays and Particle Physics above 10 TeV (Oct. 20-21)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-05",
    "location": "Washington, D.C.",
    "date": "5-8 Sep 1978",
    "meeting": "COMPCON FALL , 1978"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-28",
    "location": "Birmingham, England",
    "date": "28-30 Mar 1979",
    "meeting": "Nuclear Structure and Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-03",
    "location": "Nijmegen, Netherlands",
    "date": "3-6 Apr 1979",
    "meeting": "SEAS Spring Technical Meeting (Computer Graphic Applications)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-06-10.1",
    "location": "Vienna, Austria",
    "date": "10-12 Jun 1976",
    "meeting": "International Symposium on 50 Years Schrodinger Equation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-06.1",
    "location": "Gif-sur-Yvette, France",
    "date": "6-16 September 1977",
    "meeting": "9th Summer School on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-21",
    "location": "Baltimore, Maryland",
    "date": "21-22 April 1978",
    "meeting": "Johns Hopkins Workshop on Current Problems in High-Energy Particle Theory, 2nd"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-04-14.1",
    "location": "Edinburgh, Scotland",
    "date": "14-15 April 1977",
    "meeting": "International Conference on Ternary Compounds, 3rd."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-12-15",
    "location": "Tampa, Florida",
    "date": "15-17 December 1976",
    "meeting": "Conference on Rational Approximation with Emphasis on Applications of Pade Approximates"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-06-28.5",
    "location": "San Francisco, California",
    "date": "28-30 June 1976",
    "meeting": "Design Automation Conference, 13th annual."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-06-23.6",
    "location": "Boston, Mass.",
    "date": "23-25 June 1975",
    "meeting": "Design Automation Conference, 12th."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-02-24.1",
    "location": "Palo Alto, California",
    "date": "24-25 Feb 1977",
    "meeting": "Symposium on Design Automation and Microprocessors."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C72-07-02",
    "location": "Cargese, France",
    "date": "2-29 July 1972",
    "meeting": "Cargese Summer School of Theoretical Physics: Electromagnetic Interactions of Elementary Systems."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-23.1",
    "location": "Grenoble, France",
    "date": "23-29 August 1978",
    "meeting": "XVth International Conference on Low Temperature Physics."
  }, {}, {}]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-26.2",
    "location": "Upton, New York",
    "date": "26-30 September 1977",
    "meeting": "Symposium on the Production and Neutralization of Negative Hydrogen Ions and Beams."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-07",
    "location": "Dubna, USSR",
    "date": "7-10 June 1977",
    "meeting": "International Symposium on Meson Chemistry and Mesomolecular Processes in Matter."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-05.2",
    "location": "Chilton, England",
    "date": "5-23 September 1977",
    "meeting": "School for Young High-Energy Physicists."
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-07.1",
    "location": "Gif-sur-Yvette, France",
    "date": "7-15 September 1976",
    "meeting": "8th Summer School on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C75-03-03",
    "location": "Washington, D.C.",
    "date": "3-7 March 1975",
    "meeting": "Conference on Nuclear Cross Sections and Technology, 4th."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-18",
    "location": "Ann Arbor, Mich.",
    "date": "18-27 October 1977",
    "meeting": "Workshop on High-Energy Polarized Proton Beams."
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-10.1",
    "location": "Chicago, Illinois",
    "date": "10-12 October 1977",
    "meeting": "National Electronics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-05-26",
    "location": "Upton, New York",
    "date": "May - August l976",
    "meeting": "Isabelle Workshops"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-06-01",
    "location": "Upton, New York",
    "date": "1-5 June 1976",
    "meeting": "Summer Study Meeting on Kaon Physics and Facilities."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-08-08",
    "location": "Tsukuba, Japan",
    "date": "8-12 August 1977",
    "meeting": "KEK Summer School, 6th."
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-05-24",
    "location": "Kazimierz, Poland",
    "date": "23-28 May 1977",
    "meeting": "1st International Symposium on Hadron Structure and Multiparticle Production"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-28",
    "location": "Schladming, Austria",
    "date": "28 Feb - 10 Mar 1979",
    "meeting": "18th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Quarks and Leptons as Fundamental Particles)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-08",
    "location": "Honolulu, Hawaii",
    "date": "8-21 Aug 1979",
    "meeting": "8th Hawaii Topical Conference in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-17",
    "location": "Upton, New York",
    "date": "17-28 Jul 1978",
    "meeting": "ISABELLE Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-10.2",
    "location": "Copenhagen, Denmark",
    "date": "10-14 Jul 1978",
    "meeting": "Jets in High-Energy Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-10.3",
    "location": "Munich, Germany",
    "date": "10-11 Jul 1978",
    "meeting": "International Cryogenic Materials Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-10.4",
    "location": "Lawrence, Kansas",
    "date": "10-15 Jul 1978",
    "meeting": "Workshop on Applications of Complex Manifold Techniques to Problems in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-21",
    "location": "Bologna, Italy",
    "date": "21-23 Sep 1978",
    "meeting": "International Conference on Interactive Techniques in Computer Aided Design"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-28",
    "location": "Canberra, Australia",
    "date": "28 Aug - 1 Sep 1978",
    "meeting": "International Conference on Nuclear Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-13",
    "location": "Pasadena, California",
    "date": "13-18 Feb 1979",
    "meeting": "Workshops on Current Topics in High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-22",
    "location": "Dublin, Ireland",
    "date": "22-24 Nov 1978",
    "meeting": "A Meeting for Discussion: Geometrical Aspects of Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-16",
    "location": "Ann Arbor, Mich.",
    "date": "16-18 Oct 1978",
    "meeting": "19th Annual Symposium on Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-02-19",
    "location": "Leningrad, USSR",
    "date": "19-26 Feb 1978",
    "meeting": "13th Leningrad Winter School on Nuclear Physics and Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-08",
    "location": "Nijmegen, Netherlands",
    "date": "8-11 Mar 1978",
    "meeting": "3rd Topical Meeting on Multidimensional Analysis of High-Energy Data"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-09",
    "location": "Lubbock, Texas",
    "date": "9-11 Mar 1978",
    "meeting": "International Symposium on Superheavy Elements"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-13.1",
    "location": "Naples, Italy",
    "date": "13-19 Mar 1978",
    "meeting": "Symposium on Mathematical Problems in the Quantum Theory of Irreversible Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-29.2",
    "location": "Zuoz, Switzerland",
    "date": "29 Mar - 8 Apr 1978",
    "meeting": "Spring School on Gauge Theories and Rare Decays"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-25",
    "location": "Washington, D.C.",
    "date": "25 Apr 1978",
    "meeting": "Clyde L. Cowan Memorial Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-13",
    "location": "Zurich, Switzerland",
    "date": "13-15 May 1978",
    "meeting": "MATHEMA Pfingsten Seminars"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-16.1",
    "location": "Schluchsee, Germany",
    "date": "16-20 May 1978",
    "meeting": "Schwarzwald Meeting on Topics in Hadron-Hadron Scattering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-26",
    "location": "Zakopane, Poland",
    "date": "26 May - 8 Jun 1978",
    "meeting": "18th Cracow School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-29",
    "location": "Innsbruck, Austria",
    "date": "29 May - 10 Jun 1978",
    "meeting": "XXI COSPAR Plenary Meeting"
  }, {
    "meeting": "21st"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-01",
    "location": "Montreal, Quebec, Canada",
    "date": "1-3 Jun 1978",
    "meeting": "1st International Symposium on Positron Emission Tomography"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-12.3",
    "location": "Madison, Wis.",
    "date": "12-13 Jun 1978",
    "meeting": "NATO/NSF School on Theoretical Medium Energy and Heavy Ion Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-03",
    "location": "Houston, Tex.",
    "date": "3-8 Jan 1979",
    "meeting": "AAAS Annual Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-19.2",
    "location": "Winnipeg, Canada",
    "date": "19-23 Jun 1978",
    "meeting": "3rd International Conference on Clustering Aspects of Nuclear Structure and Nuclear Reactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-15",
    "location": "Coral Gables, Florida",
    "date": "15-19 Jan 1979",
    "meeting": "Orbis Scientiae 1979"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-04.1",
    "location": "London, England",
    "date": "4-7 Jul 1978",
    "meeting": "7th International Cryogenic Engineering Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-11",
    "location": "Serpukhov, USSR",
    "date": "11-17 Jul, 1978",
    "meeting": "International Seminar on High-Energy Physics and Quantum Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-03",
    "location": "Kyoto, Japan",
    "date": "3-5 Aug 1978",
    "meeting": "Fundamental Constituents and the Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-05.1",
    "location": "Albuquerque, New Mexico",
    "date": "5-7 Sep 1978",
    "meeting": "8th International Conference on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-04.1",
    "location": "Hakone, Japan",
    "date": "4-7 Sep 1978",
    "meeting": "Workshop on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-18.1",
    "location": "Matrafured, Hungary",
    "date": "18-22 Sep 1978",
    "meeting": "Triangle Seminar on Quarks and Gauge Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-19.1",
    "location": "Kent, England",
    "date": "19-22 Sep 1978",
    "meeting": "Joint Conference on Microprocessors in Automation and Communications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-10",
    "location": "Troy, New York",
    "date": "10-12 Aug 1978",
    "meeting": "International Symposium on Photopion Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-13",
    "location": "Vancouver, British Columbia, Canada",
    "date": "13-17 Aug 1979",
    "meeting": "8th International Conference on High-Energy Physics and Nuclear Structure (ICOHEPANS)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-09",
    "location": "Stanford, California",
    "date": "9-17 Jul 1979",
    "meeting": "7th SLAC Summer Institute on Particle Physics: Quantum Chromodynamics (SSI 79)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-10",
    "location": "Les Houches, France",
    "date": "10-22 Sep 1978",
    "meeting": "LEP Summer Study"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-21",
    "location": "Banff, Canada",
    "date": "21 Aug - 2 Sep 1978",
    "meeting": "1978 NATO Advanced Study in Nuclear Theory: Common Problems in Low-energy and Medium-energy Nuclear Physics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-11",
    "location": "Les Arcs, France",
    "date": "11-23 Mar 1979",
    "meeting": "XIV Rencontre de Moriond: Session 1 - High-Energy Hadronic Interactions, Session 2 - High Energy Leptonic Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-03",
    "location": "Madison, Wis.",
    "date": "3-4 Nov 1978",
    "meeting": "Workshop on Relativistic Electron Cooling of High-Energy Beams"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-27",
    "location": "San Francisco, California",
    "date": "27 Nov - 1 Dec 1978",
    "meeting": "25th National Vacuum Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-14",
    "location": "Dacca, Bangladesh",
    "date": "14-17 Jan 1979",
    "meeting": "Physics Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-13",
    "location": "Tokyo, Japan",
    "date": "13-19 May 1979",
    "meeting": "6th International Congress of Radiation Research"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-18",
    "location": "Vancouver, British Columbia, Canada",
    "date": "18-21 Jun 1979",
    "meeting": "1979 Congress of the Canadian Association of Physicists"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-03.1",
    "location": "Los Angeles, California",
    "date": "3-5 Nov 1978",
    "meeting": "Third West Coast Computer Faire"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-11-30",
    "location": "Seattle, Washington",
    "date": "30 Nov 1978",
    "meeting": "Joseph H. Weis Memorial Symposium on Strong Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C72-09-22",
    "location": "Rome, Italy",
    "date": "Sep 19-23, 1972",
    "meeting": "THE NUCLEAR MANY-BODY PROBLEM"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-11.1",
    "location": "San Francisco, California",
    "date": "11-12 Jan 1979",
    "meeting": "Seminar on Laser Technology: Fundamentals, Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-06",
    "location": "Kyoto, Japan",
    "date": "6-18 Aug 1979",
    "meeting": "16th International Cosmic Ray Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-03",
    "location": "Munich, Germany",
    "date": "3-7 Sep 1979",
    "meeting": "International Conference on Magnetism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-20",
    "location": "Jerusalem, Israel",
    "date": "20-23 Mar 1979",
    "meeting": "The Unification Program - Einstein Commemorative Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-10",
    "location": "Warsaw, Poland",
    "date": "10-15 Sep 1979",
    "meeting": "Conference on Hypernuclear and Low-energy Kaon Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-05",
    "location": "Mainz, Germany",
    "date": "5-9 Jun 1979",
    "meeting": "Nuclear Physics with Electromagnetic Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-02-25",
    "location": "Tokyo, Japan",
    "date": "25-28 Feb 1976",
    "meeting": "INS WINTER Meeting on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-05",
    "location": "Trieste, Italy",
    "date": "5-11 Jul 1979",
    "meeting": "The Second Marcel Grossmann Meeting on the Recent Developments of General Relativity (In Honor of Albert Einstein)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-21",
    "location": "Oxford, England",
    "date": "21-22 Mar 1979",
    "meeting": "Developments in Gas Lasers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-11",
    "location": "Tsukuba, Japan",
    "date": "11-14 Aug 1976",
    "meeting": "5th KEK Summer School"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-09-06.2",
    "location": "Chilton, England",
    "date": "6-24 Sep 1976",
    "meeting": "Summer School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C71-08-23",
    "location": "Ithaca, New York",
    "date": "23-27 Aug 1971",
    "meeting": "5th International Symposium on Electron and Photon Interactions at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-12",
    "location": "Rheinhardtsbrunn, Germany",
    "date": "12-17 Oct 1978",
    "meeting": "International Symposium on Elementary Particle Physics Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-02-14.1",
    "location": "Sao Paulo, Brazil",
    "date": "Feb 14-17, 1977",
    "meeting": "International Conference on Luminescence Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-04-13",
    "location": "Urbana, Illinois",
    "date": "Apr 13-15, 1977",
    "meeting": "Symposium on High Speed Computer and Algorithm Organization"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-02",
    "location": "New Orleans, Louisiana",
    "date": "Jun 2-4, 1977",
    "meeting": "Conference on Mathematical Foundations of Quantum Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-10-05.1",
    "location": "Dubna, USSR",
    "date": "Oct 5-7 1976",
    "meeting": "5th All Union Conference on Charged Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-08-02",
    "location": "Boulder, Colo.",
    "date": "Aug 2-5, 1977",
    "meeting": "1977 Cryogenic Engineering Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-25",
    "location": "Kiriat Anavim, Israel",
    "date": "25-29 Mar 1979",
    "meeting": "VIII International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-14",
    "location": "Jerusalem, Israel",
    "date": "14-23 Mar 1979",
    "meeting": "The Jerusalem Einstein Centennial Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-16",
    "location": "Trieste, Italy",
    "date": "16 Jul - 10 Aug 1979",
    "meeting": "Summer Workshop on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-26",
    "location": "Cargese, France",
    "date": "26 Aug - 8 Sep 1979",
    "meeting": "Cargese Summer Institute: Recent Developments in Gauge Theories"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-09.1",
    "location": "Cargese, France",
    "date": "9-29 Jul 1979",
    "meeting": "Cargese Summer Institute: Quarks and Leptons"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-05-12",
    "location": "Yerevan, USSR",
    "date": "12-17 May l977",
    "meeting": "International Symposium on Transition Radiation of High-Energy Particles"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-04",
    "location": "Jaca, Spain",
    "date": "4-9 Jun 1979",
    "meeting": "Xth International GIFT Seminar on Theoretical Physics: Quantum Chromodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-17.1",
    "location": "Santa Cruz, California",
    "date": "17-20 Jul 1979",
    "meeting": "1979 IEEE Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-05",
    "location": "Segovia, Spain",
    "date": "5-10 Feb 1979",
    "meeting": "VII International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-13",
    "location": "Erice, Italy",
    "date": "13-21 Mar 1979",
    "meeting": "Highly Specialized Seminars: Probing Hadrons with Leptons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-25.1",
    "location": "Erice, Italy",
    "date": "25 Mar - 5 Apr 1979",
    "meeting": "International School of Physics of Exotic Atoms: Exotic Atoms, A Tool for the Study of Fundamental Interactions and the Structure of Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-08.1",
    "location": "Erice, Italy",
    "date": "8-12 Apr 1979",
    "meeting": "Europhysics Study Conference: Fifty Years of Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-31",
    "location": "Erice, Italy",
    "date": "31 Jul - 10 Aug 1979",
    "meeting": "17th International School of Subnuclear Physics: Pointlike Structures Inside and Outside Hadrons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-18",
    "location": "Andover, New Hampshire",
    "date": "18-22 Aug 1979",
    "meeting": "Gordon Conference on Elementary Particle Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-26",
    "location": "Erice, Italy",
    "date": "26 Mar - 6 Apr 1979",
    "meeting": "International School of Nuclear Physics: Heavy Ion Interactions at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-13.1",
    "location": "Leipzig, Germany",
    "date": "13-17 Mar 1979",
    "meeting": "10th Spring Symposium on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-02",
    "location": "Hamburg, Germany",
    "date": "2-3 Apr 1979",
    "meeting": "ECFA Study of an ep Facility for Europe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-02",
    "location": "Dobogoko, Hungary",
    "date": "2-15 Sep 1979",
    "meeting": "1979 JINR-CERN School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-30",
    "location": "St. Andrews, Scotland",
    "date": "30 Jul - 17 Aug 1979",
    "meeting": "20th Scottish Universities Summer School in Physics : Laser Plasma Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-20",
    "location": "Los Alamos, N.Mex.",
    "date": "20-31 Aug 1979",
    "meeting": "LAMPF Program Options Workshop in Intermediate Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-02",
    "location": "Dublin, Ireland",
    "date": "2-6 Jul 1979",
    "meeting": "Workshop on Current Problems in General Relativity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-26",
    "location": "Hamburg, Germany",
    "date": "26 Feb - 2 Mar 1979",
    "meeting": "Electron Proton Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-26.1",
    "location": "Rome, Italy",
    "date": "26-27 Mar 1979",
    "meeting": "The European Great Projects - International EPS Seminar"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-23.1",
    "location": "Philadelphia, Pennsylvania",
    "date": "23-25 Apr 1979",
    "meeting": "International Symposium on Computer Architecture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-28.1",
    "location": "Bonn, Germany",
    "date": "28 Feb - 2 Mar 1979",
    "meeting": "German Physical Society Conference on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-27",
    "location": "Batavia, Illinois",
    "date": "27 Apr 1979",
    "meeting": "International Symposium in Honor of Robert R. Wilson"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-14",
    "location": "Santa Fe, N.Mex.",
    "date": "14-17 May 1979",
    "meeting": "Topical Conference on Data Acquisition Systems in Particle and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-09",
    "location": "New York, New York",
    "date": "9-10 Mar 1979",
    "meeting": "The New York Einstein Centennial"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-26.1",
    "location": "San Francisco, California",
    "date": "26 Feb - 1 Mar 1979",
    "meeting": "COMPCON Spring '79"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-27",
    "location": "Sheffield, England",
    "date": "27-29 Mar 1979",
    "meeting": "trends in On-line Computer Control Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-04.1",
    "location": "New York, New York",
    "date": "4-7 Jun 1979",
    "meeting": "National Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-02.1",
    "location": "Les Houches, France",
    "date": "2-28 Jul 1979",
    "meeting": "Les Houches Summer School in Theoretical Physics: Physical Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-30",
    "location": "Florence, Italy",
    "date": "30 May - 1 Jun 1979",
    "meeting": "3rd Johns Hopkins Workshop on Current Problems in High-Energy Particle Theory"
  }, {}]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-23",
    "location": "Carbondale, Illinois",
    "date": "23 Feb - 3 Mar 1979",
    "meeting": "Albert Einstein Centennial Week"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-07",
    "location": "Trieste, Italy",
    "date": "11 Nov 1979 - Spring",
    "meeting": "Advanced School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-16",
    "location": "Nathiagali, Pakistan",
    "date": "16 Jun - 4 Jul 1979",
    "meeting": "Fourth International College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-12.2",
    "location": "Gomel, USSR",
    "date": "12-23 Sep 1977",
    "meeting": "11th International School for Young Scientists on High-Energy Physics and Relativistic Nuclear Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-12.3",
    "location": "Zvenigorod, USSR",
    "date": "12-15 Sep 1977",
    "meeting": "Lebedev Institute Seminar: Kaon-Nucleus Interactions and Hypernuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-17.1",
    "location": "Tsukuba, Japan",
    "date": "Jul 17-18, 1978",
    "meeting": "1st KEK Symposkum on Radiation Dosimetry"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-24.1",
    "location": "Berkeley, California",
    "date": "Jul 24-28, 1978",
    "meeting": "Summer Study on High-Energy Nuclear Collisions, 4th"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-03.1",
    "location": "Detroit, Mich.",
    "date": "3-5 Apr 1979",
    "meeting": "5th Annual Computer Graphics Conference and Equipment Display"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-09.2",
    "location": "Boulder, Colo.",
    "date": "9-27 Jul 1979",
    "meeting": "NATO Advanced Study Institute in Elementary Particles: Quantum Flavordynamics, Quantum Chromodynamics and Unified Theories"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-31",
    "location": "Amsterdam, Netherlands",
    "date": "31 Aug - 1 Sep 1978",
    "meeting": "Mini-Conference on Modern Trends in Elastic Electron Scattering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-08-30.1",
    "location": "Tokyo, Japan",
    "date": "30-31 Aug 1977",
    "meeting": "9th Conference on Solid State Devices"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-13.3",
    "location": "Argonne, Illinois",
    "date": "13-16 Jun 1977",
    "meeting": "International Discussion Meeting on Radiation Effects on Superconductivity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-20.1",
    "location": "Lausanne, Switzerland",
    "date": "20-25 Aug 1979",
    "meeting": "International Congress of Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-14",
    "location": "Munich, Germany",
    "date": "14-19 Dec 1978",
    "meeting": "9th Texas Symposium on Relativistic Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-22",
    "location": "Los Alamos, N.Mex.",
    "date": "22-24 Jan 1979",
    "meeting": "LAMPF Workshop on Pion Single Charge Exchange"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-30",
    "location": "Geneva, Switzerland",
    "date": "30-31 Oct 1978",
    "meeting": "CERN Neutrino Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-24",
    "location": "Cargese, France",
    "date": "24 Jun - 8 Jul 1979",
    "meeting": "1979 Cargese Summer Institute: Bifurcation Phenomena in Mathematical Physics and Related Topics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-25",
    "location": "Montreal, Quebec, Canada",
    "date": "25-27 Oct 1979",
    "meeting": "Annual Meeting of the Division of Particles and Fields of the APS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-01",
    "location": "Nashville, Tennessee",
    "date": "1-3 May 1980",
    "meeting": "Vanderbilt Symposium on e+ e- Interactions at High Energies"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-14.1",
    "location": "Memphis, Tenn.",
    "date": "14 Mar 1979",
    "meeting": "Einstein Centennial Celebration"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-08.1",
    "location": "Geilo, Norway",
    "date": "8-12 Jan 1979",
    "meeting": "3rd Nordic Meeting on High-Energy Reactions in Nuclei"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-25",
    "location": "Palm Coast, Florida",
    "date": "25 Feb - 2 Mar 1979",
    "meeting": "International Symposium on Fundamentals of Quantum Theory and Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-22",
    "location": "Bari, Italy",
    "date": "22-26 May 1979",
    "meeting": "6th National Congress on Vacuum Science and Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-04.2",
    "location": "Gaithersburg, Maryland",
    "date": "4-6 Jun 1979",
    "meeting": "International Conference on Synchrotron Radiation Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-11",
    "location": "Maria Laach, Germany",
    "date": "11-21 Sep 1979",
    "meeting": "Herbstschule fur Hochenergiephysik (Autumn School of High Energy Physics)"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C69-08-27",
    "location": "Yerevan, USSR",
    "date": "27 Aug - 2 Sep 1969",
    "meeting": "7th International Conference on High-Energy Accelerators"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-18",
    "location": "San Francisco, California",
    "date": "18-21 Sep 1979",
    "meeting": "Western Electronic Show and Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-04",
    "location": "Washington, D.C.",
    "date": "4-7 Sep 1979",
    "meeting": "COMPCON Fall"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-17",
    "location": "San Francisco, California",
    "date": "17-19 Oct 1979",
    "meeting": "IEEE 1979 Nuclear Science Symposium (NSS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-13.1",
    "location": "Kaiserslautern, Germany",
    "date": "13-24 Aug 1979",
    "meeting": "NATO Advanced Study Institute on Field Theoretical Methods in Elementary Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-30",
    "location": "Irvine, California",
    "date": "30 Nov - 1 Dec 1979",
    "meeting": "Irvine Conference on Color, Flavor, and Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-08",
    "location": "Charlottesville, Virginia",
    "date": "8-10 Jan 1979",
    "meeting": "Conference on Future Possibilities for Electron Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-12.2",
    "location": "Chilton, England",
    "date": "12-27 Sep 1978",
    "meeting": "Rutherford School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-24.2",
    "location": "La Jolla, California",
    "date": "24 Jul - 2 Sep 1978",
    "meeting": "DUMAND Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-13.1",
    "location": "Tsukuba, Japan",
    "date": "13-14 Feb 1979",
    "meeting": "Workshop on the Baryon Number of the Universe and Unified Theories"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-22",
    "location": "Tokyo, Japan",
    "date": "22-24 Mar 1979",
    "meeting": "Symposium on Present Status and Future Prospect of Elementary Particle Physics and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-24.1",
    "location": "Tokyo, Japan",
    "date": "Aug 24-25, l978",
    "meeting": "International Symposium on Perspective and Future Projects in High Energy Physics."
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-23",
    "location": "Tokyo, Japan",
    "date": "Mar 23-25 l978",
    "meeting": "Symposium on Accelerator Science and Technology, 2nd"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-20",
    "location": "Rochester, New York",
    "date": "Apr 20-21 1978",
    "meeting": "1st Conference on Radiocarbon Dating with Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-01.2",
    "location": "Kyoto, Japan",
    "date": "Sep 1-5, 1978",
    "meeting": "Summer Institute for Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-27",
    "location": "Vienna, Austria",
    "date": "27-29 Feb 1980",
    "meeting": "1980 Wire Chamber Conference (WCC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-25",
    "location": "Goa, India",
    "date": "25-29 Sep 1979",
    "meeting": "X International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-30",
    "location": "Lake Tahoe, California",
    "date": "30 Aug - 1 Sep 1979",
    "meeting": "International Conference on Two-Photon Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-03-14",
    "location": "Gif-sur-Yvette, France",
    "date": "Mar 14-18 1977",
    "meeting": "Workshop on Detectors and Detecting Systems Used in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-19.3",
    "location": "Las Vegas, Nevada",
    "date": "19-21 Jun 1978",
    "meeting": "15th Design Automation Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C74-07-22.2",
    "location": "Ann Arbor, Mich.",
    "date": "Jul 22-26, 1974",
    "meeting": "Summer Studies on High-Energy Physics with Polarized Beams."
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-26",
    "location": "Redstone Arsenal, Ala.",
    "date": "Oct 26-17, 1977",
    "meeting": "Workshop on Solitons in Action"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-03.1",
    "location": "Gif-sur-Yvette, France",
    "date": "3-7 Sep 1979",
    "meeting": "11th Gif Summer School on Particle Physics: Production and Detection of Heavy Bosons, W+-, Z-0"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-27",
    "location": "Stony Brook, New York",
    "date": "27-28 Sep 1979",
    "meeting": "Supergravity Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-22",
    "location": "Erice, Italy",
    "date": "22-29 Aug 1979",
    "meeting": "International School of History of Science: Some Influential Schools and Figures in Contemporary Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.1",
    "location": "Erice, Italy",
    "date": "23-28 Jun 1980",
    "meeting": "8th International Conference on Neutrino Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-17",
    "location": "Madison, Wis.",
    "date": "17-23 Jul 1980",
    "meeting": "20th International Conference on High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-01",
    "location": "Erice, Italy",
    "date": "1-14 Jul 1979",
    "meeting": "International School of Astrophysics: X-ray Astronomy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-16",
    "location": "Erice, Italy",
    "date": "16-26 Sep 1979",
    "meeting": "International School of Radiation Damage and Protection: Advances in Radiation Dosimetry and Protection in Medicine"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-17",
    "location": "Visegrad, Hungary",
    "date": "17-20 Sep 1979",
    "meeting": "Symposium on Lepton and Hadron Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-17.1",
    "location": "Brighton, England",
    "date": "17-21 Sep 1979",
    "meeting": "9th European Microwave Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-04.1",
    "location": "Roznov, Czechoslovakia",
    "date": "4-13 Sep 1979",
    "meeting": "3rd Summer School on Computing Techniques in Physics: Numerical Methods in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-16.1",
    "location": "Dubrovnik, Yugoslavia",
    "date": "16-30 Sep 1979",
    "meeting": "15th International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-01",
    "location": "Bielefeld, Germany",
    "date": "1-7 Dec 1978",
    "meeting": "II Bielefeld Encounter in Physics and Mathematics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-08",
    "location": "Madison, Wis.",
    "date": "8 Dec 1978",
    "meeting": "Seminar on Baryon Stability"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-02",
    "location": "Toronto, Ontario, Canada",
    "date": "2-4 Oct 1979",
    "meeting": "International Electrical and Electronics Conference and Exposition"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-03",
    "location": "Rio de Janeiro, Brazil",
    "date": "3-5 Oct 1979",
    "meeting": "5th International Conference on Very Large Databases (VLDB 1979)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-17.1",
    "location": "San Francisco, California",
    "date": "17-19 Oct 1979",
    "meeting": "Nuclear Power Systems Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-29",
    "location": "San Juan, Puerto Rico",
    "date": "29-31 Oct 1979",
    "meeting": "Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-05",
    "location": "Pacific Grove, California",
    "date": "5-7 Nov 1979",
    "meeting": "Asilomar Conference on Circuits, SYSTEMS AND Computers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-25",
    "location": "San Francisco, California",
    "date": "25-28 Feb 1980",
    "meeting": "COMPCON Spring '80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-11",
    "location": "Washington, D.C.",
    "date": "11-13 Mar 1981",
    "meeting": "9th Particle Accelerator Conference: Accelerator Engineering & Technology"
  }, {
    "meeting": "PAC 81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-26",
    "location": "San Diego, California",
    "date": "26-28 Feb 1980",
    "meeting": "CLEOS/ICF '80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-26",
    "location": "Clausthal, Germany",
    "date": "26 Jul - 9 Aug 1979",
    "meeting": "Summer School on Differential Geometric Methods in Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-04",
    "location": "Les Diablerets, Switzerland",
    "date": "4-10 Oct 1979",
    "meeting": "2nd ICFA Workshop on Possibilities and Limitations of Accelerators and Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-05",
    "location": "Stanford, California",
    "date": "5-11 Mar 1980",
    "meeting": "Second Novosibirsk/SLAC Conference on Storage Ring Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-06.1",
    "location": "Chicago, Illinois",
    "date": "6-10 Aug 1979",
    "meeting": "SIGGRAPH 79 and Pattern Recognition and Image Processing (PRIP)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-07-13",
    "location": "Bonn, Germany",
    "date": "Jul 13-16, 1977",
    "meeting": "2nd Conference on Differential Geometrical Methods in Mathematical Physics."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-09-05.3",
    "location": "Hakone, Japan",
    "date": "Sep. 5-9, 1977",
    "meeting": "International Symposium on Physics at Ultralow Temperatures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-01",
    "location": "Abingdon, England",
    "date": "1-5 Oct 1979",
    "meeting": "Polarized Target Material Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-15",
    "location": "Tokyo, Japan",
    "date": "15-16 Mar 1979",
    "meeting": "Symposium on Pictures of Elementary Particles with Space-Time Extension"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-29.1",
    "location": "Boston, Mass.",
    "date": "29 May - 1 Jun 1979",
    "meeting": "Fifteenth Symposium on Electron, Ion and Photon Beam Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-20",
    "location": "Schladming, Austria",
    "date": "20 Feb - 1 Mar 1980",
    "meeting": "19th Internationale Universitatswochen for Kernphysik (International School of Particle Physics: Field Theory and Strong Interactions)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-19.1",
    "location": "Upton, New York",
    "date": "19-21 Mar 1979",
    "meeting": "Symposium on Nonlinear Dynamics and the Beam-Beam Interaction"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-28",
    "location": "Stanford, California",
    "date": "28 Jul - 5 Aug 1980",
    "meeting": "8th SLAC Summer Institute on Particle Physics: The Weak Interactions (7-day school, followed by 3-day Topical Conference) (SSI 80)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-10",
    "location": "Rabat, Morocco",
    "date": "10-17 Oct 1979",
    "meeting": "IIeme Rencontre de Rabat: Chromodynamique Quantique"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-26",
    "location": "New York, New York",
    "date": "26-29 Jan 1981",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-20",
    "location": "Baltimore, Maryland",
    "date": "20-23 Apr 1981",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-16",
    "location": "Phoenix, Arizona",
    "date": "16-20 Mar 1981",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-14",
    "location": "Coral Gables, Florida",
    "date": "14-17 Jan 1980",
    "meeting": "Orbis Scientiae 1980"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-09",
    "location": "Cargese, France",
    "date": "9-15 Sep 1979",
    "meeting": "Workshop on Neutral Current Interactions in Atoms"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-03.3",
    "location": "Les Houches, France",
    "date": "3-13 Sep 1979",
    "meeting": "International Colloquium on Complex Analysis, Microlocal Calculus and Relativistic Quantum Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-10.1",
    "location": "Montauk, New York",
    "date": "10-14 Sep 1979",
    "meeting": "10th International Linear Accelerator Conference (LINAC 79)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-13",
    "location": "Wahiawa, Hawaii",
    "date": "13-16 Dec 1979",
    "meeting": "13th Topical Symposium of Health Physics Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-10.1",
    "location": "Geneva, Switzerland",
    "date": "10 Oct 1979",
    "meeting": "Open Presentation of the Results of the Second ICFA Workshop on Possibilities and Limitations of Accelerators and Detectors"
  }, {}]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-02",
    "location": "St.Croix, U.S. Virgin Islands",
    "date": "2-13 Jul 1980",
    "meeting": "1rst NATO Advanced Study Institute on Techniques and Concepts of High-Energy Physics"
  }, {
    "meeting": "ASI"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-16",
    "location": "Banff, Canada",
    "date": "16-28 Aug 1981",
    "meeting": "Banff Summer Institute in Particles and Fields: QCD, Gauge Theories and Grand Unification Schemes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-01",
    "location": "Bad Honnef, Germany",
    "date": "1-12 Sep 1980",
    "meeting": "Advanced Summer Institute on High-Energy Physics: Current Topics in Elementary Particle Physics"
  }, {
    "meeting": "ASI"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-09",
    "location": "Les Arcs, France",
    "date": "9-15 Mar 1980",
    "meeting": "XVth Rencontre de Moriond: Part I, High-Energy Hadronic Interactions"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-21.1",
    "location": "Boston, Mass.",
    "date": "21-24 Apr 1980",
    "meeting": "International Magnetics Conference (INTERMAG 80)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-06",
    "location": "La Boule, France",
    "date": "6-8 May 1980",
    "meeting": "International Symposium on Computer Architecture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-13",
    "location": "Boston, Mass.",
    "date": "13-15 May 1980",
    "meeting": "ELECTRO '80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-19",
    "location": "Anaheim, California",
    "date": "19-22 May 1980",
    "meeting": "National Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-26.1",
    "location": "Washington, D.C.",
    "date": "26-30 May 1980",
    "meeting": "International Microwave Symposium and Workshops"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23",
    "location": "Boston, Mass.",
    "date": "23-26 Jun 1980",
    "meeting": "XI International Quantum Electronics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-16",
    "location": "Anaheim, California",
    "date": "16-18 Sep 1980",
    "meeting": "Western Electronic Show and Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-22",
    "location": "Washington, D.C.",
    "date": "22-26 Sep 1980",
    "meeting": "COMPCON Fall 1980"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-25",
    "location": "Lausanne, Switzerland",
    "date": "25 Sep - 1 Oct 1980",
    "meeting": "1980 International Symposium on High-Energy Physics with Polarized Beams and Polarized Targets"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-17",
    "location": "Eugene, Oregon",
    "date": "17-23 Aug 1980",
    "meeting": "9th International IUPAP Conference on  Few Body Problems in Physics"
  }, {
    "meeting": "Ninth"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-03.2",
    "location": "Ithaca, New York",
    "date": "3-5 Oct 1977",
    "meeting": "2nd International Topical Conference on High Power Electron and Ion Beam Research and Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-28",
    "location": "Berkeley, California",
    "date": "28-30 Aug 1979",
    "meeting": "4th Conference on Distributed Data Management and Computer Networks."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-11",
    "location": "Dubna, USSR",
    "date": "11-13 Oct 1978",
    "meeting": "6th All Union Conference on Charged Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C69-09-15",
    "location": "Herceg-Novi, Yugoslavia",
    "date": "15-28 Sep 1969",
    "meeting": "International School of Elementary Particle Physics, Herceg-Novi."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-03",
    "location": "Genova, Italy",
    "date": "3-6 Jun 1980",
    "meeting": "8th International Cryogenic Engineering Conference and Exhibition"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-25",
    "location": "Upton, New York",
    "date": "25-26 Apr 1980",
    "meeting": "6th International Conference on Experimental Meson Spectroscopy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-14",
    "location": "Seattle, Washington",
    "date": "14-18 Jul 1980",
    "meeting": "SIGGRAPH 80: 7th Annual Conference on Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-08",
    "location": "Hamburg, Germany",
    "date": "8-10 Oct 1979",
    "meeting": "DESY Workshop 1979: Quarks, Jets and QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-25.1",
    "location": "Stanford, California",
    "date": "25-26 Oct 1979",
    "meeting": "6th Annual Meeting for Users of Stanford Synchrotron Radiation Laboratory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-29.1",
    "location": "Los Alamos, N.Mex.",
    "date": "29-30 Oct 1979",
    "meeting": "13th LAMPF Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-14",
    "location": "Budapest, Hungary",
    "date": "14-18 Apr 1980",
    "meeting": "2nd International Conference on Multiphoton Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-09",
    "location": "Bologna, Italy",
    "date": "9-12 Sep 1980",
    "meeting": "Europhysics Conference on Computing in High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-22.1",
    "location": "Cannes, France",
    "date": "22-26 Sep 1980",
    "meeting": "3rd European Conference on Surface Science (ECOSS3)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15",
    "location": "Los Angeles, California",
    "date": "15-17 Jun 1981",
    "meeting": "International Microwave Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-17",
    "location": "Orlando, Florida",
    "date": "17-21 Dec 1979",
    "meeting": "International Conference on Lasers (Lasers '79)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-22",
    "location": "Trieste, Italy",
    "date": "22-25 Jan 1980",
    "meeting": "Topical Meeting on Heavy Ion Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-03.2",
    "location": "Montreal, Quebec, Canada",
    "date": "3-8 Sep 1979",
    "meeting": "CMS Summer Research Institute: Geometrical and Topological Methods in Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-25",
    "location": "Mysore, India",
    "date": "25-30 Nov 1979",
    "meeting": "The Charmed Physics of the Seventies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-06",
    "location": "Erice, Italy",
    "date": "6-18 May 1979",
    "meeting": "International School of Cosmology and Gravitation: Spin, Torsion, Rotation and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-14",
    "location": "Erice, Italy",
    "date": "14-19 Aug 1979",
    "meeting": "Interdisciplinary Seminars: The Meaning of Culture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-18.1",
    "location": "Les Houches, France",
    "date": "18-29 Feb 1980",
    "meeting": "NATO Advanced Study Institute: Common Trends in Particle and Condensed Matter Physics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-28",
    "location": "Paris, France",
    "date": "28-30 Nov 1979",
    "meeting": "Topical Workshop on Forward Production of High-Mass Flavors at Collider Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-24.1",
    "location": "Ronda, Spain",
    "date": "24-29 Mar 1980",
    "meeting": "VIIIth International Spanish Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-11",
    "location": "Honolulu, Hawaii",
    "date": "11-15 Feb 1980",
    "meeting": "DUMAND Signal Processing Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-24",
    "location": "Honolulu, Hawaii",
    "date": "24 Jul - 2 Aug 1980",
    "meeting": "1980 DUMAND Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-17.1",
    "location": "New York, New York",
    "date": "17-21 Dec 1979",
    "meeting": "International Conference on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-14",
    "location": "San Francisco, California",
    "date": "14-16 Mar 1980",
    "meeting": "5th West Coast Computer Faire"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-05.1",
    "location": "Marseille, France",
    "date": "5-6 Jul 1979",
    "meeting": "Colloquium on Fundamental Interactions, in honor of A. Visconti"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-14",
    "location": "Vraona, Greece",
    "date": "14-27 Sep 1980",
    "meeting": "The 1980 CERN School of Computing"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-08",
    "location": "Malente, Germany",
    "date": "8-21 Jun 1980",
    "meeting": "The 1980 CERN School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-09",
    "location": "Copenhagen, Denmark",
    "date": "9-13 Jun 1980",
    "meeting": "Symposium on Topical Questions in QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-03.2",
    "location": "Madison, Wis.",
    "date": "3-4 Oct 1978",
    "meeting": "Workshop on the Cooling of High-Energy Beams"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-29",
    "location": "Frascati, Italy",
    "date": "29-30 Jun 1978",
    "meeting": "Wiggler Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-20.3",
    "location": "Tubingen, Germany",
    "date": "20 Jun - 1 Jul 1977",
    "meeting": "Topical Seminar on Recent Developments in Particle and Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-16.1",
    "location": "Newark, Del.",
    "date": "16-21 Oct 1978",
    "meeting": "Topical Conference on Cosmic Rays and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-10",
    "location": "St. Andrews, Scotland",
    "date": "10-30 Aug 1980",
    "meeting": "21st Scottish Universities Summer School in Physics: Gauge Theories and Experiments at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-22",
    "location": "Karpacz, Poland",
    "date": "22 Feb - 6 Mar 1980",
    "meeting": "17th Karpacz Winter School of Theoretical Physics: Fundamental Interactions"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-07",
    "location": "Rio de Janeiro, Brazil",
    "date": "7-18 Jan 1980",
    "meeting": "6th Brazilian Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-25",
    "location": "Erice, Italy",
    "date": "25 Mar - 6 Apr 1980",
    "meeting": "International School of Nuclear Physics: Nuclear Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-03",
    "location": "Erice, Italy",
    "date": "3-13 Sep 1980",
    "meeting": "Advanced School of Astronomy: Physical Processes in Red Giants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-12-27",
    "location": "La Jolla, California",
    "date": "27-30 Dec 1977",
    "meeting": "Workshop on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-14.1",
    "location": "Toronto, Ontario, Canada",
    "date": "14-16 Jul 1980",
    "meeting": "4th International Conference on Baryon Resonances"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-27",
    "location": "Akaslompolo, Finland",
    "date": "27 Jul - 7 Aug 1980",
    "meeting": "Arctic School of Physics 1980: Quarks and Leptons Today, followed by Topical Conference on Particle Physics (Aug 6-7)"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-17",
    "location": "Erice, Italy",
    "date": "17-24 Mar 1980",
    "meeting": "Europhysics Study Conference on Unification of the Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-30",
    "location": "Karlsruhe, Germany",
    "date": "30 Mar - 3 Apr 1981",
    "meeting": "7th International Conference on Magnet Technology (MT-7)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-09",
    "location": "Batavia, Illinois",
    "date": "9-12 Jan 1980",
    "meeting": "Fermilab Muon-Neutrino Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-28.1",
    "location": "Santa Barbara, California",
    "date": "28 Jul - 1 Aug 1980",
    "meeting": "Workshop on Lattice Gauge Theory and Related Subjects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-05",
    "location": "Santa Barbara, California",
    "date": "5-8 May 1980",
    "meeting": "Conference on Stellar Collapse, Supernovae and Pulsar Formation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-24.2",
    "location": "Rome, Italy",
    "date": "24-28 Mar 1980",
    "meeting": "Workshop on Low-energy and Intermediate-energy Kaon-Nucleon Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-14",
    "location": "Nathiagali, Pakistan",
    "date": "14 Jun - 2 Jul 1980",
    "meeting": "5th International Summer College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-16",
    "location": "Cargese, France",
    "date": "16-31 Jul 1980",
    "meeting": "1980 Cargese Summer Institute: Phase Transitions, Status of the Experimental and Theoretical Situations"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-16",
    "location": "Uppsala, Sweden",
    "date": "16-20 Jun 1980",
    "meeting": "International Conference on Experimentation at LEP"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-13",
    "location": "San Francisco, California",
    "date": "13-15 Feb 1980",
    "meeting": "International Solid State Circuits Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-02",
    "location": "Bad Honnef, Germany",
    "date": "2-4 Jun 1980",
    "meeting": "4th Workshop on Current Problems in High-Energy Particle Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-30",
    "location": "Trieste, Italy",
    "date": "30 Jun - 4 Jul 1980",
    "meeting": "7th Trieste Conference on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-08",
    "location": "Gaithersburg, Maryland",
    "date": "8-12 Jun 1981",
    "meeting": "2nd International Conference on Precision Measurement and Fundamental Constants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.2",
    "location": "Bressanone, Italy",
    "date": "23-28 Jun 1980",
    "meeting": "5th European Symposium on Nucleon Anti-nucleon Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-07",
    "location": "Rome, Italy",
    "date": "7-9 Sep 1978",
    "meeting": "Conference on Perspectives of Fundamental Physics, Rome, Italy, Sep 7-9, 1978."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-22.1",
    "location": "Tsukuba, Japan",
    "date": "22-23 Mar 1979",
    "meeting": "2nd KEK Symposium on Radiation Dosimetry, Tsukuba, Japan, Mar 22-23, 1979"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-05",
    "location": "Guangzhou, China",
    "date": "5-12 Jan 1980",
    "meeting": "Guangzhou Conference on Theoretical Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-07",
    "location": "Geneva, Switzerland",
    "date": "7-11 Jul 1980",
    "meeting": "XIth International Conference on High Energy Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-13.1",
    "location": "Erice, Italy",
    "date": "13-19 May 1980",
    "meeting": "Workshop on LEP Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-12",
    "location": "Erice, Italy",
    "date": "12-19 Jun 1980",
    "meeting": "Highly Specialized Seminar: Interacting Bose-Fermi System in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-31",
    "location": "Erice, Italy",
    "date": "31 Jul - 11 Aug 1980",
    "meeting": "18th International School of Subnuclear Physics: The High Energy Limit"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-17.1",
    "location": "Erice, Italy",
    "date": "17-29 Aug 1980",
    "meeting": "International School of Quantum Electronics: Physics and Technology of Free Lasers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-17.1",
    "location": "Palm Coast, Florida",
    "date": "17-20 Mar 1980",
    "meeting": "International Symposium on Fundamentals of Quantum Statistics and Quantum Theory, particularly Density Matrix Formalism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-17.2",
    "location": "Munich, Germany",
    "date": "17-22 Mar 1980",
    "meeting": "Kernphysik (DPG)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "SLAC-PUB-0894",
    "location": "Peniscola, Spain",
    "date": "26-31 May 1980",
    "meeting": "XI GIFT Seminar on Theoretical Physics: Electroweak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-03.1",
    "location": "Sesimbra, Portugal",
    "date": "3-6 Jun 1980",
    "meeting": "9th European Symposium on Few Body Problems in Nuclear and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-22",
    "location": "Bruges, Belgium",
    "date": "22-27 Jun 1980",
    "meeting": "11th International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.3",
    "location": "Cocoyoc, Mexico",
    "date": "23-27 Jun 1980",
    "meeting": "9th International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-11",
    "location": "Santa Fe, N.Mex.",
    "date": "11-15 Aug 1980",
    "meeting": "5th International Symposium on Polarization Phenomena in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-03.1",
    "location": "Dubrovnik, Yugoslavia",
    "date": "3-13 Sep 1980",
    "meeting": "3rd Adriatic Meeting on Particle Physics: Recent Developments in Strong Interaction Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-22.2",
    "location": "Smolenice, Czechosolvakia",
    "date": "22-26 Sep 1980",
    "meeting": "Extended Triangle Meeting on Hadron Structure '80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-06",
    "location": "Kyoto, Japan",
    "date": "6-9 Oct 1980",
    "meeting": "7th International CODATA Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-06.1",
    "location": "Tokyo, Japan",
    "date": "6-10 Oct 1980",
    "meeting": "8th World Computer Congress (IFIP) (also Oct.14 in Melbourne)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-14",
    "location": "Melbourne, Australia",
    "date": "14-17 Oct 1980",
    "meeting": "8th World Computer Congress (IFIP) (also Oct.6 in Tokyo)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-06",
    "location": "Oxford, England",
    "date": "6-8 Apr 1981",
    "meeting": "Conference on Nuclear Structure and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07",
    "location": "Istanbul, Turkey",
    "date": "7-11 Sep 1981",
    "meeting": "5th EPS General Conference: Trends in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-05",
    "location": "Houston, Tex.",
    "date": "Mar 5-9 1979",
    "meeting": "2nd International Topical Conference on Meson-Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-25",
    "location": "Acquafredda di Maratea, Italy",
    "date": "25 Aug - 5 Sep 1980",
    "meeting": "NATO Advanced Study Institute: Nonequilibrium, Superconductivity, Phonons and Kapitza Boundaries"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-11.1",
    "location": "Vancouver, British Columbia, Canada",
    "date": "11-15 Aug 1980",
    "meeting": "2nd International Topical Meeting on Muon Spin Rotation (MuSR2)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-02.2",
    "location": "Mexico City, Mexico",
    "date": "2-20 Jun 1980",
    "meeting": "Latin American School of Physics: Group Theory and its Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-04",
    "location": "Cambridge, Massachusetts",
    "date": "4-9 Aug 1980",
    "meeting": "Third Workshop on Lie-admissible Formulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-21.1",
    "location": "Cambridge, Mass.",
    "date": "21-25 Aug 1978",
    "meeting": "First Workshop on Lie-admissible Formulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-01",
    "location": "Cambridge, Mass.",
    "date": "1-8 Aug 1979",
    "meeting": "Second Workshop on Lie-admissible Formulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-08",
    "location": "Amiens, France",
    "date": "8-12 Apr 1980",
    "meeting": "International Workshop on Gamma-Gamma Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-25.1",
    "location": "Anaheim, California",
    "date": "25-26 Mar 1980",
    "meeting": "13th Annual Symposium of the American Vacuum Society: Vacuum Technology for a New Decade"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-01",
    "location": "Lake Placid, New York",
    "date": "1-3 Oct 1980",
    "meeting": "21st Annual Symposium on the Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-01.1",
    "location": "Dublin, Ireland",
    "date": "1-5 Sep 1980",
    "meeting": "Working Seminar on Models of Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-30.1",
    "location": "Bogota, Colombia",
    "date": "30 Jul - 5 Aug 1979",
    "meeting": "Einstein Centennial Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-18",
    "location": "Columbus, Ohio",
    "date": "18-19 Mar 1980",
    "meeting": "Conference on Recent and Emerging Materials Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-28",
    "location": "Fonyod, Hungary",
    "date": "28 Sep - 4 Oct 1980",
    "meeting": "International Summer School on Formation Processes in Thin Films"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-02",
    "location": "Boulder, Colo.",
    "date": "2-3 May 1980",
    "meeting": "Fourth Regional Conference on the History and Philosophy of Science: The Changes in Science at the Turn of the Century"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-21",
    "location": "Orsay, France",
    "date": "Jun 21 - 22, 1979",
    "meeting": "Workshop on Baryonium and other Unusual Hadron States."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-02.1",
    "location": "New York, New York",
    "date": "2-3 May, 1980",
    "meeting": "Columbia Workshop on an Electron-Proton Colliding Beam Facility"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-29",
    "location": "Zakopane, Poland",
    "date": "29 May - 12 Jun 1980",
    "meeting": "1980 Cracow Summer School on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-24",
    "location": "Bonn, Germany",
    "date": "24-29 Aug 1981",
    "meeting": "10th International Symposium on Lepton and Photon Interactions at High Energy"
  }, {
    "meeting": "LP 81"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-03-07",
    "location": "Frascati, Italy",
    "date": "Mar 7-10, 1978",
    "meeting": "Workshop on Few Body Systems and Electromagnetic Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-05-22.2",
    "location": "Irvine, California",
    "date": "May 22-25 l978",
    "meeting": "3rd International Conference on Collective Methods of Acceleration"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.4",
    "location": "Varenna, Italy",
    "date": "23 Jun - 5 Jul 1980",
    "meeting": "International School of Physics 'Enrico Fermi': From Nuclei to Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-21",
    "location": "Varenna, Italy",
    "date": "21 Jul - 2 Aug 1980",
    "meeting": "International School of Physics 'Enrico Fermi': Theory of Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-01",
    "location": "Erice, Italy",
    "date": "1-15 Jun 1980",
    "meeting": "International School of Mathematical Physics: Rigorous Atomic and Molecular Physics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-22",
    "location": "Upton, New York",
    "date": "22-24 May 1980",
    "meeting": "Annual Meeting of the High-Energy Discussion Group (HEDG) and AGS 20th Anniversary"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-09.3",
    "location": "Serpukhov, USSR",
    "date": "9-15 Jul 1979",
    "meeting": "International Workshop on High-Energy Physics and Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-09.4",
    "location": "Varenna, Italy",
    "date": "9-21 Jul 1979",
    "meeting": "International School of Physics 'Enrico Fermi': Nuclear Structure and Heavy Ion Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-20",
    "location": "Trieste, Italy",
    "date": "20 Oct 1980 - Spring 1981",
    "meeting": "Advanced School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-01.1",
    "location": "New York, New York",
    "date": "1-3 Oct 1980",
    "meeting": "IEEE International Conference on Circuits and Computers (ICCC 80)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-03.2",
    "location": "Dublin, Ireland",
    "date": "3-6 Jun 1980",
    "meeting": "International Conference on Boundary and Interior Layers: Computational and Asymptotic methods"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-06.1",
    "location": "Santa Fe, N.Mex.",
    "date": "6-8 May 1980",
    "meeting": "16th Annual Symposium of the American Vacuum Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-11",
    "location": "Bologna, Italy",
    "date": "11-14 Jun 1980",
    "meeting": "IAU Symposium on the Origin of Cosmic Rays"
  }, {
    "meeting": "International Astronomical Union"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-16.1",
    "location": "Hamilton, Ont., Canada",
    "date": "16-19 Jun 1980",
    "meeting": "Congress of the Canadian Association of Physicists"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-13",
    "location": "Birmingham, England",
    "date": "13-15 Aug 1980",
    "meeting": "International Conference - Computer Graphics 80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-30",
    "location": "Hamburg, Germany",
    "date": "30 Sep - 2 Oct 1980",
    "meeting": "DESY Workshop on Flavor Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-11",
    "location": "Dallas, Tex.",
    "date": "11-14 Nov 1980",
    "meeting": "26th Conference on Magnetism and Magnetic Materials (3M or MMM)"
  }]
}, {
  "meeting_name": [{
    "date": "16-22 Sep 1980",
    "coference_code": "C80-09-16.1",
    "meeting": "7th International Workshop on Weak Interactions with Neutrino Beams (Fiftieth Anniversary of the Discovery of the Neutrino)",
    "location": "Balaton, Hungary"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-05",
    "location": "Basel, Switzerland",
    "date": "5-6 April 1979",
    "meeting": "Spring Meeting of the Swiss Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-02",
    "location": "Cable, Wisc.",
    "date": "2-4 Oct 1980",
    "meeting": "Telemark Workshop on Neutrino Mass: Cosmological, Theoretical and Experimental Considerations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-28",
    "location": "Batavia, Illinois",
    "date": "28-31 May 1980",
    "meeting": "International Symposium on the History of Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-19.2",
    "location": "Karlsruhe, Germany",
    "date": "Mar 19-21, 1979",
    "meeting": "Joint CERN - KfK Workshop on Physics with Cooled Low Energetic Antiprotons."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-15",
    "location": "Ithaca, New York",
    "date": "15-18 Jul 1980",
    "meeting": "1980 Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-29",
    "location": "Chania, Greece",
    "date": "29 Jun - 9 Jul 1980",
    "meeting": "Workshop on Gauge Theories and their Phenomenological Implications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-09",
    "location": "Chania, Greece",
    "date": "9-23 Jul 1980",
    "meeting": "Workshop on Nonlinear Evolution Equations and Dynamical Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.5",
    "location": "Florence, Italy",
    "date": "23-28 Jun 1980",
    "meeting": "International Conference on the Recasting of Science Between the Two World Wars"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-23",
    "location": "Stanford, California",
    "date": "23-24 Oct 1980",
    "meeting": "7th Annual Meeting of the Stanford Synchrotron Radiation Laboratory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-18",
    "location": "Karpacz, Poland",
    "date": "18 Feb - 18 Mar 1981",
    "meeting": "18th Winter School of Theoretical Physics: Gauge Theories of Fundamental Interactions - Status and Prospects"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-08",
    "location": "Gif-sur-Yvette, France",
    "date": "8-12 Sep 1980",
    "meeting": "12th Gif Summer School on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-20.1",
    "location": "Stoughton, Wis.",
    "date": "20-21 Oct 1980",
    "meeting": "13th Annual Synchrotron Radiation Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-01",
    "location": "Fuji-Yoshida, Japan",
    "date": "1-4 Jul 1980",
    "meeting": "1980 INS Kikuchi Summer School on Nuclear Physics at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-10",
    "location": "Tsukuba, Japan",
    "date": "Aug 10-14 1979",
    "meeting": "7th KEK Summer School"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-13.1",
    "location": "Blacksburg, Virginia",
    "date": "Dec 13-15 1979",
    "meeting": "Workshop on Weak Interactions and Related Topics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-03.2",
    "location": "Erice, Italy",
    "date": "3-13 Sep 1980",
    "meeting": "International School of Cosmic Ray Astrophysics: Workshop on Acceleration of Particles in Nature"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-23.1",
    "location": "Dubna, USSR",
    "date": "Aug 23-27 1979",
    "meeting": "International Symposium on Fundamental Problems of Theoretical and Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-05",
    "location": "Rome, Italy",
    "date": "5-6 Jun 1980",
    "meeting": "Conference at Academy of Lincei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-05",
    "location": "Orlando, Florida",
    "date": "5-7 Nov 1980",
    "meeting": "IEEE 1980 Nuclear Science Symposium (NSS) and Nuclear Power Systems Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-19",
    "location": "Stara Lesna, Czechsolvakia",
    "date": "19-28 May 1981",
    "meeting": "4th Summer School on Computing Techniques in Physics: Microprocessors and their Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-18",
    "location": "Pisa, Italy",
    "date": "18-20 Sep 1980",
    "meeting": "Meeting on Miniaturization of High-Energy Physics Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-21",
    "location": "Erice, Italy",
    "date": "21-30 Apr 1981",
    "meeting": "International School of Nuclear Physics, 5th Course: Quarks and the Nucleus"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-17.2",
    "location": "Minsk, USSR",
    "date": "17-25 Sep 1979",
    "meeting": "International School of Young Physicists on the Problems of Charged Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-06.1",
    "location": "Versailles, France",
    "date": "6-10 Jul 1981",
    "meeting": "IXth International Conference on High-Energy Physics and Nuclear Structure (ICOHEPANS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-02",
    "location": "Hiroshima, Japan",
    "date": "Feb 2-4 1980",
    "meeting": "2nd Meeting on Exotic Resonances"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-03.3",
    "location": "Minneapolis, Minnesota",
    "date": "3-5 Sep 1980",
    "meeting": "Joint AAS HEAD-APS Cosmic Division Meeting: Cosmic Ray Astrophysics and Gamma Ray Line Astronomy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-08",
    "location": "Erice, Italy",
    "date": "8-14 Mar 1981",
    "meeting": "Europhysics Study Conference on Partons in Soft-Hadronic Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-30.1",
    "location": "London, England",
    "date": "30 Jun - 11 Jul 1980",
    "meeting": "21st Health Physics Summer School"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-30.2",
    "location": "Les Houches, France",
    "date": "30 Jun - 26 Jul 1980",
    "meeting": "Les Houches Summer School of Theoretical Physics: Laser-Plasma Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-07.1",
    "location": "Trieste, Italy",
    "date": "7-31 Jul 1980",
    "meeting": "Summer Seminar on Complex Analysis"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-09.1",
    "location": "Maria Laach, Germany",
    "date": "9-19 Sep 1980",
    "meeting": "Herbstschule fur Hochenergiephysik: Gauge Models - Theories and Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-21",
    "location": "Kupari-Dubrovnik Yugoslavia",
    "date": "21 Sep - 5 Oct 1980",
    "meeting": "16th International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-24",
    "location": "Bielefeld, Germany",
    "date": "24-31 Aug 1980",
    "meeting": "International Symposium on Statistical Mechanics of Quarks and Hadrons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-25.1",
    "location": "Trieste, Italy",
    "date": "25-29 Aug 1980",
    "meeting": "Session on Developments in Grand Unified Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-25",
    "location": "Bologna, Italy",
    "date": "25-28 Nov 1980",
    "meeting": "Workshop on Nuclear Physics with Real and Virtual Photons: From Collective States to Quarks in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-15",
    "location": "Baltimore, Maryland",
    "date": "15-19 Dec 1980",
    "meeting": "10th Texas Symposium on Relativistic Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-06.1",
    "location": "Paris, France",
    "date": "6-9 Apr 1981",
    "meeting": "Colloquium: Physics of Photon - Photon Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-09",
    "location": "Lisbon, Portugal",
    "date": "9-15 Jul 1981",
    "meeting": "1981 EPS International Conference on High-Energy Physics"
  }, {
    "meeting": "Europhysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-09",
    "location": "Santa Cruz, California",
    "date": "9-11 Sep 1981",
    "meeting": "Particles and Fields 1981: Testing the Standard Model (Annual Meeting of Division of Particles and Fields of the APS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-31",
    "location": "Canterbury, England",
    "date": "31 Aug - 4 Sep 1981",
    "meeting": "10th International Colloquium: Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-11",
    "location": "Berlin, Germany",
    "date": "11-21 Aug 1981",
    "meeting": "6th International Conference on Mathematical Physics - Congress of Association for Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-23",
    "location": "New Orleans, Louisiana",
    "date": "May 23-26 1979",
    "meeting": "Symposium on Quantum Theory and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-04",
    "location": "Tsukuba, Japan",
    "date": "Dec 4-5, 1979",
    "meeting": "3rd KEK Symposium on Radiation Dosimetry"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-17.3",
    "location": "Granlibakken, Tahoe City, California",
    "date": "Mar 17 - 21, 1980",
    "meeting": "Workshop on Nuclear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-01-14.1",
    "location": "Los Alamos, N.Mex.",
    "date": "14-17 Jan 1980",
    "meeting": "Workshop on Nuclear Structure with Intermediate Energy Probes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-04.2",
    "location": "London, England",
    "date": "4-8 Sep 1978",
    "meeting": "7th Symposium on Photoelectronic Image Devices"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-23.6",
    "location": "Ottawa, Canada",
    "date": "23 Jun - 4 Jul 1980",
    "meeting": "CHEER Workshop (Canadian High-Energy Electron Ring)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-23",
    "location": "New Orleans, Louisiana",
    "date": "23-25 Nov 1981",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-25",
    "location": "San Francisco, California",
    "date": "25-28 Jan 1982",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-08",
    "location": "Dallas, Tex.",
    "date": "8-12 Mar 1982",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-21",
    "location": "Piscataway, New Jersey",
    "date": "21-22 Nov 1980",
    "meeting": "19th Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-21",
    "location": "Notre Dame, Indiana",
    "date": "21-26 Jun 1981",
    "meeting": "XIIth International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-01",
    "location": "Wailea, Hawaii",
    "date": "1-8 Jul 1981",
    "meeting": "9th International Conference on Neutrino Physics and Astrophysics- NEUTRINO '81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-12",
    "location": "Grenoble, France",
    "date": "12-15 May 1981",
    "meeting": "International Magnetics Conference (INTERMAG 81)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-21",
    "location": "Berkeley, California",
    "date": "May 21-24 1979",
    "meeting": "1st Workshop on Ultra-Relativistic Nuclear Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-05-20",
    "location": "Kazimierz, Poland",
    "date": "May 22-26 1979",
    "meeting": "2nd International Symposium on Hadron Structure and Multiparticle Production"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-29",
    "location": "Saclay, France",
    "date": "29 Sep - 3 Oct 1980",
    "meeting": "Symposium on Perspectives in Electro and Photonuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-05",
    "location": "Los Alamos, N.Mex.",
    "date": "5-8 Jan 1981",
    "meeting": "Workshop on Nuclear and Particle Physics at Energies up to 31 GeV: New and Future Aspects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-17",
    "location": "Schladming, Austria",
    "date": "17-26 Feb 1981",
    "meeting": "20th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Recent Developments in Mathematical Physics)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-10",
    "location": "Grenoble, France",
    "date": "10 - 11 Oct 1977",
    "meeting": "Workshop on Fundamental Physics Experiments with Reactor Neutrons and Neutrinos"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-24",
    "location": "Ann Arbor, Mich.",
    "date": "24-26 Apr 1981",
    "meeting": "2nd Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-17",
    "location": "Bad Windsheim, Germany",
    "date": "17-28 Aug 1981",
    "meeting": "NATO Advanced Study Institute on Quantum Optics, Theory of Measurement, and Test of Relativity"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-19",
    "location": "Ft. Lauderdale, Florida",
    "date": "19-23 Jan 1981",
    "meeting": "Orbis Scientiae 1981"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-04",
    "location": "Geneva, Switzerland",
    "date": "4-6 May 1981",
    "meeting": "Topical Conference on Applications of Microprocessors to High Energy Physics Experiments"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-04-27",
    "location": "Boulder, Colo.",
    "date": "27-29 Apr 1978",
    "meeting": "Symposium on Foundations of Radiation Theory and Quantum Electrodynamics."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-15",
    "location": "Les Arcs, France",
    "date": "15-21 Mar 1981",
    "meeting": "XVIth Rencontre de Moriond I: Perturbative QCD & Electroweak Interactions."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-17.1",
    "location": "Andover, New Hampshire",
    "date": "17-21 Aug 1981",
    "meeting": "1981 Gordon Conference on Elementary Particle Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-27",
    "location": "Stanford, California",
    "date": "27 Jul - 4 Aug 1981",
    "meeting": "9th SLAC Summer Institute on Particle Physics: The Strong Interactions (followed by 3 day Topical Conference) (SSI 81)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-15.1",
    "location": "Les Arcs, France",
    "date": "15-21 Mar 1981",
    "meeting": "Moriond Meeting on High-Energy Astrophysics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-25",
    "location": "Les Arcs, France",
    "date": "25-31 Jan 1981",
    "meeting": "1st Moriond Workshop: Lepton Pair Production"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-01",
    "location": "Miami Beach, Florida",
    "date": "1-4 Dec 1980",
    "meeting": "5th Conference on Pattern Recognition"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-01.1",
    "location": "Miami Beach, Florida",
    "date": "1-5 Dec 1980",
    "meeting": "Symposium on Distributed Data Acquisition, Computing & Control"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-21",
    "location": "San Francisco, California",
    "date": "21-26 Feb 1981",
    "meeting": "COMPCON Spring '81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-11",
    "location": "Milton Keynes, England",
    "date": "11 Dec 1979",
    "meeting": "Conference on Statistical Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-23",
    "location": "Tokyo, Japan",
    "date": "23-26 Mar 1981",
    "meeting": "1981 INS International Symposium on Nuclear Radiation Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-12",
    "location": "San Francisco, California",
    "date": "12-14 Nov 1980",
    "meeting": "Online '80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-01.2",
    "location": "Peyresq, France",
    "date": "1-13 Sep 1980",
    "meeting": "La Pensee Physique en 1980: Science et Humanisme en Notre Temps"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-07",
    "location": "New York, New York",
    "date": "7-9 Apr 1981",
    "meeting": "ELECTRO 1981"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-15",
    "location": "San Francisco, California",
    "date": "15-17 Sep 1981",
    "meeting": "Western Electronic Show and Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-21",
    "location": "San Francisco, California",
    "date": "21-23 Oct 1981",
    "meeting": "IEEE 1981 Nuclear Science Symposium (NSS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-21.1",
    "location": "San Francisco, California",
    "date": "21-23 Oct 1981",
    "meeting": "Nuclear Power Systems Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-22",
    "location": "San Francisco, California",
    "date": "22-25 Feb 1982",
    "meeting": "COMPCON Spring 1982"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-16.2",
    "location": "Primorsko, Bulgaria",
    "date": "16-25 Sep 1980",
    "meeting": "IV Bulgarian School on Elementary Particles and High-Energy Physics: Mathematical Problems of Quantum Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-09-04.3",
    "location": "Gif-sur-Yvette, France",
    "date": "4-9 Sep 1978",
    "meeting": "Gif Summer School in Particle Physics: Quark and Gluon Jets - Quantum chromodynamics, Cosmic Rays"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-31.1",
    "location": "Freiburg, Germany",
    "date": "31 Aug - 11 Sep 1981",
    "meeting": "12th NATO Advanced Summer Institute on Theoretical Physics: Structural Elements in Particle Physics and Statistical Mechanics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-06",
    "location": "Hanko, Finland",
    "date": "6-19 Jun 1981",
    "meeting": "1981 CERN - JINR School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-17.2",
    "location": "Banff, Canada",
    "date": "17-29 Aug 1980",
    "meeting": "NATO Advanced Study Institute on Nonlinear Phenomena in Physics and Biology"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-31",
    "location": "Erice, Italy",
    "date": "31 Jul - 11 Aug 1981",
    "meeting": "19th International School of Subnuclear Physics: The Unity of the Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-02",
    "location": "Palm Coast, Florida",
    "date": "2-4 Mar 1981",
    "meeting": "Sanibel Symposium: International Workshop on Large Order Perturbation Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-06-05.5",
    "location": "Grenoble, France",
    "date": "Jun 5-7 1978",
    "meeting": "International Workshop on Neutron Interferometry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-29.2",
    "location": "Berkeley, California",
    "date": "Oct 29 - Nov 9, 1979",
    "meeting": "Heavy ion Fusion Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-20",
    "location": "Trieste, Italy",
    "date": "20 0ct - 11 Dec 1981",
    "meeting": "ICTP Autumn Course on Variational Methods in Analysis and Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07.1",
    "location": "Trieste, Italy",
    "date": "7 Sep - 2 Oct 1981",
    "meeting": "ICTP College on Microprocessors: Technology and Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-22",
    "location": "Trieste, Italy",
    "date": "22 Apr - 6 May 1981",
    "meeting": "First School on Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-04",
    "location": "Dresden, Germany",
    "date": "4-9 Feb 1980",
    "meeting": "International Conference on Extreme States in Nuclear Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-17",
    "location": "Nagpur, India",
    "date": "17-20 Feb 1980",
    "meeting": "Einstein Centenary Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-21",
    "location": "Rome, Italy",
    "date": "21-23 Feb 1980",
    "meeting": "International Meeting on Astrophysics and Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-28",
    "location": "New Orleans, Louisiana",
    "date": "28 Feb - 1 Mar 1980",
    "meeting": "International Conference on Band Structure and Nuclear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-14.3",
    "location": "Jena, Germany",
    "date": "14-19 Jul 1980",
    "meeting": "9th International Conference on General Relativity and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-10.3",
    "location": "Chilton, England",
    "date": "Sep 10-27 1979",
    "meeting": "School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-01",
    "location": "Toulouse, France",
    "date": "1-4 Apr 1980",
    "meeting": "6th International Conference on Solid State Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C74-02-15.1",
    "location": "Chilton, England",
    "date": "15-16 Feb 1974",
    "meeting": "1st Oxford Conference on Quantum Gravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-08",
    "location": "Washington, D.C.",
    "date": "8-10 Dec 1980",
    "meeting": "International Electron Devices Meeting"
  }, {
    "meeting": "IEDM"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-03",
    "location": "Dallas, Tex.",
    "date": "3-7 Aug 1981",
    "meeting": "SIGGRAPH 81: 8th Annual Conference on Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-28",
    "location": "Erice, Italy",
    "date": "28 Mar - 8 Apr 1981",
    "meeting": "International School of Radiation Damage and Protection: 4th Course - Advances in Biological Effects and Dosimetry of Low-energy Electromagnetic Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-11.1",
    "location": "Erice, Italy",
    "date": "11-23 May 1981",
    "meeting": "International School of Cosmology and Gravitation: The Origin and Evolution of Galaxies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-18",
    "location": "Santa Barbara, California",
    "date": "18-22 May 1981",
    "meeting": "Conference on the Interaction of Particle Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-15",
    "location": "Santa Barbara, California",
    "date": "15 Jul - 17 Aug 1981",
    "meeting": "Workshop on Common Problems in Statistical and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-00",
    "location": "Santa Barbara, California",
    "date": "Jul 1981 - Jan 1982",
    "meeting": "Fundamental Basis of Phenomenological Models in High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-02.1",
    "location": "Los Alamos, N.Mex.",
    "date": "2-6 Mar 1981",
    "meeting": "Conference on Nonlinear Problems: Present and Future"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-03.1",
    "location": "Les Houches, France",
    "date": "3 Aug - 11 Sep 1981",
    "meeting": "Les Houches Summer School in Theoretical Physics: Gauge Theories in High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-13.3",
    "location": "Vancouver, British Columbia, Canada",
    "date": "13-14 Aug 1979",
    "meeting": "Kaon Factory Workshop (with ICOHEPANS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-25",
    "location": "Houston, Tex.",
    "date": "25-28 Feb 1981",
    "meeting": "Nonlinear Problems in Science, an Interdisciplinary Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-25",
    "location": "Tokyo, Japan",
    "date": "25-27 Jun 1981",
    "meeting": "1981 INS Symposium on Quark and Lepton Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-26",
    "location": "Washington, D.C.",
    "date": "26-29 Apr 1982",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-14",
    "location": "Varenna, Italy",
    "date": "14-24 Jul 1981",
    "meeting": "International School of Physics 'Enrico Fermi': Positrons in Solids"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-28",
    "location": "Varenna, Italy",
    "date": "28 Jul - 7 Aug 1981",
    "meeting": "International School of Physics 'Enrico Fermi': Data Acquisition in High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-26",
    "location": "Dallas, Tex.",
    "date": "26-29 May 1981",
    "meeting": "16th Symposium on Electron, Ion and Photon Beam Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-05.1",
    "location": "Santa Cruz, California",
    "date": "5-6 Jan 1981",
    "meeting": "Inaugural Symposium of the University of California: Santa Cruz Institute for Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-28",
    "location": "Blacksburg, Virginia",
    "date": "28-31 May 1981",
    "meeting": "1st Physics in Collision"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-10",
    "location": "Trieste, Italy",
    "date": "10 Aug - 4 Sep 1981",
    "meeting": "ICTP Summer School on Physics Teaching at the University Level (LANGUAGE OF THE SCHOOL WILL BE FRENCH)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-01.1",
    "location": "Syracuse, New York",
    "date": "1-2 May 1980",
    "meeting": "2nd Annual MRST (Montreal-Rochester-Syracuse-Toronto) Meeting"
  }, {
    "meeting": "Montreal Rochester Syracuse Toronto 80"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-22",
    "location": "Madison, Wis.",
    "date": "22-24 Oct 1979",
    "meeting": "Topical Workshop on Production of New Particles in Super High Energy Collisions"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-04",
    "location": "Blacksburg, Virginia",
    "date": "4-6 Dec 1980",
    "meeting": "Workshop on Weak Interactions as Probes of Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-16.1",
    "location": "Upton, New York",
    "date": "16-27 July 1979",
    "meeting": "Workshop on Beam Current Limitations in Storage Rings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-05.1",
    "location": "Dubna, USSR",
    "date": "5-8 Jun 1979",
    "meeting": "International Symposium on Few Particle Problems in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-25",
    "location": "Baltimore, Maryland",
    "date": "25-27 May 1981",
    "meeting": "5th Johns Hopkins Workshop on Current Problems in Particle Theory: Unified Field Theories and Beyond"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-18.2",
    "location": "Rome, Italy",
    "date": "18-29 Jun 1979",
    "meeting": "International School on Electron and Pion Interactions with Nuclei at Intermediate Energies"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-22.1",
    "location": "Stanford, California",
    "date": "22-23 May 1980",
    "meeting": "Beam-beam Interaction Seminar"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-28.1",
    "location": "Oak Ridge, Tennessee",
    "date": "28-30 May 1981",
    "meeting": "Topical Conference on Computerized Data Acquisition in Particle and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-09",
    "location": "Dundee, Scotland",
    "date": "9-29 Aug 1981",
    "meeting": "22nd Scottish Universities Summer School in Physics: Magnetism in Solids, Some Current Topics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-29",
    "location": "Kyoto, Japan",
    "date": "29 Jun - 3 Jul 1981",
    "meeting": "4TH Kyoto Summer Institute: Grand Unified Theories and Related Topics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-01",
    "location": "St. Feliu de Guixols, Spain",
    "date": "1-5 Jun 1981",
    "meeting": "12th GIFT International Seminar on Theoretical Physics: Non-Perturbative Aspects of Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-14",
    "location": "Bechyne, Czechoslovakia",
    "date": "14-21 Jun 1981",
    "meeting": "Selected Topics in Quantum Field Theory and Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.1",
    "location": "Halifax, Canada",
    "date": "15-18 Jun 1981",
    "meeting": "Annual Congress of the Canadian Association of Physicists"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-13",
    "location": "Batavia, Illinois",
    "date": "13-24 Jul 1981",
    "meeting": "1981 Summer School on High-Energy Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-10",
    "location": "Hamburg, Germany",
    "date": "10-11 Feb 1981",
    "meeting": "Workshop on DORIS Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-16",
    "location": "Siguenza, Spain",
    "date": "16-20 Feb 1981",
    "meeting": "9th International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-21",
    "location": "Seattle, Washington",
    "date": "21-24 Jul 1981",
    "meeting": "1981 IEEE Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-30",
    "location": "Batavia, Illinois",
    "date": "30 Apr - 1 May 1981",
    "meeting": "National Society of Black Physicists Annual Meeting and Day of Science Lectures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-09",
    "location": "Ithaca, New York",
    "date": "9-11 Jan 1981",
    "meeting": "Cornell Workshop on Detectors for Experiments at CESRII: e+e- at 100 GeV"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-05",
    "location": "Batavia, Illinois",
    "date": "5-7 May 1981",
    "meeting": "Third Annual Site Development and Land Use Planning Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-20",
    "location": "Stanford, California",
    "date": "20 Feb 1981",
    "meeting": "SLAC Users Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-14.1",
    "location": "Cargese, France",
    "date": "14-31 Jul 1981",
    "meeting": "1981 Cargese Summer Institute: Fundamental Interactions"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-22",
    "location": "Stanford, California",
    "date": "22-23 Oct 1981",
    "meeting": "8th Annual Stanford Synchrotron Radiation Laboratory Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-25",
    "location": "Stanford, California",
    "date": "25-27 Mar 1981",
    "meeting": "Stanford Linear Collider User Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-24",
    "location": "St. Louis, Missouri",
    "date": "24-26 Feb 1981",
    "meeting": "1981 ACM Computer Science Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-09.1",
    "location": "Nice, France",
    "date": "7-9 Oct 1981",
    "meeting": "7th International Conference on Very Large Databases (VLDB 1981)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-28",
    "location": "Nashville, Tennessee",
    "date": "28-30 Oct 1981",
    "meeting": "22nd Annual Symposium on Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-25",
    "location": "Boston, Mass.",
    "date": "25-27 May 1982",
    "meeting": "ELECTRO '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-07",
    "location": "Houston, Tex.",
    "date": "7-10 Jun 1982",
    "meeting": "National Computer Conference (NCC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-15",
    "location": "Dallas, Tex.",
    "date": "15-17 Jun 1982",
    "meeting": "International Microwave Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.2",
    "location": "Islamabad, Pakistan",
    "date": "15 Jun - 2 Jul 1981",
    "meeting": "6th International Nathiagali Summer College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-30",
    "location": "Trieste, Italy",
    "date": "30 Jun - 3 Jul 1981",
    "meeting": "Conference on Differential Geometric Methods in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-29.1",
    "location": "Les Houches, France",
    "date": "29 Jun - 31 Jul 1981",
    "meeting": "NATO Advanced Study Institute: Chaotic Behavior of Deterministic Systems"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.3",
    "location": "Lahnstein, Germany",
    "date": "15-26 Jun 1981",
    "meeting": "NATO Advanced Study Institute: Quantum Electrodynamics of Strong Fields"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-04.1",
    "location": "Trieste, Italy",
    "date": "4-6 May 1981",
    "meeting": "Workshop on Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-15.2",
    "location": "Ithaca, New York",
    "date": "15-17 Jul 1981",
    "meeting": "2nd National Conference on Synchrotron Radiation Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-17",
    "location": "Stanford, California",
    "date": "17-23 Feb 1982",
    "meeting": "International Conference on Instrumentation for Colliding Beam Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-05",
    "location": "Jaipur, India",
    "date": "5-9 Dec l978",
    "meeting": "4th High-Energy Physics Symposium"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-13",
    "location": "Stubicke Toplice, Yugoslavia",
    "date": "13-16 Apr 1981",
    "meeting": "Triangle Meeting on Advances in QCD and Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-10.4",
    "location": "Salamanca, Spain",
    "date": "10-14 Sep 1979",
    "meeting": "Conference on Differential Geometrical Methods in Mathematical Physics (see also 3-7 Sep 1979, Aix-en-Provence, France)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-10.5",
    "location": "Nashville, Tennessee",
    "date": "10-13 Sep 1979",
    "meeting": "International Symposium on Future Directions in Studies of Nuclei Far from Stability"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-17.2",
    "location": "Santa Barbara, California",
    "date": "17-28 Aug 1981",
    "meeting": "Nuclear Theory Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-24.1",
    "location": "Trieste, Italy",
    "date": "24-29 Aug 1981",
    "meeting": "Workshop on Nonlinear Evolution Equations, Solitons and Spectral Methods"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-20.1",
    "location": "Trieste, Italy",
    "date": "20 Oct 1981 - Spring 1982",
    "meeting": "International School for Advanced Studies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-01",
    "location": "Visegrad, Hungary",
    "date": "1-4 Sep 1981",
    "meeting": "Symposium on Particle Physics: Gauge Theories and Lepton-Hadron Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-14.1",
    "location": "Ithaca, New York",
    "date": "14-19 Jun 1981",
    "meeting": "Summer Study on Experiments at square root of S = 100 GeV"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-25.1",
    "location": "Tallahassee, Florida",
    "date": "25-28 Mar 1981",
    "meeting": "Conference on Perturbative Quantum Chromodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-17.4",
    "location": "Aussois, France",
    "date": "17-21 Mar 1980",
    "meeting": "9th Study Days of the Theoretical Physics Division of IPN, Orsay"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-01.1",
    "location": "Villars, Switzerland",
    "date": "1-7 Jun 1981",
    "meeting": "General Meeting on LEP"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-25",
    "location": "Poiana Brasov, Romania",
    "date": "25 Aug - 7 Sep 1981",
    "meeting": "International Summer School of Theoretical Physics: Gauge Theories: Fundamental Interactions and Rigorous Results"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C73-06-06",
    "location": "Dalhouse, India",
    "date": "6-25 June 1973",
    "meeting": "Summer School in Theoretical High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-01",
    "location": "New York, New York",
    "date": "1-2 May 1981",
    "meeting": "Hommage a Sakharov: International Conference in Honor of Andrei Sakharov"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-03.2",
    "location": "Cambridge, Mass.",
    "date": "3-7 Aug 1981",
    "meeting": "Fourth Workshop on Lie-admissible Algebras Formulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-07-03.2",
    "location": "Tutzing, Germany",
    "date": "3-6 Jul 1978",
    "meeting": "Conference on Quantum Theory and the Structures of Time and Space 3,"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-03.1",
    "location": "La Jolla, California",
    "date": "3-5 Jan 1979",
    "meeting": "Workshop on Particle Acceleration Mechanisms in Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-13",
    "location": "Sofia, Bulgaria",
    "date": "13-19 Oct 1980",
    "meeting": "International Seminar on Cosmic Ray Cascades: Implications for Particle Physics and Astrophysics above 10**14-ev."
  }]
}, {
  "meeting_name": [{
    "date": "20-31 Jul 1981",
    "coference_code": "C81-07-20",
    "meeting": "Physics Opportunities at ISABELLE: Summer Workshop at BNL",
    "location": "Upton, New York"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-20",
    "location": "Kupari-Dubrovnik, Yugoslavia",
    "date": "20 Sep - 4 Oct 1981",
    "meeting": "17th International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-26",
    "location": "Cochin, India",
    "date": "26-30 Dec 1980",
    "meeting": "5th High-Energy Physics Symposium"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-03",
    "location": "Berkeley, California",
    "date": "3-5 Feb 1981",
    "meeting": "5th Berkeley Workshop on Distributed Data Management and Computer Networks"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-01-29.1",
    "location": "Ahmedabad, India",
    "date": "29 Jan - 3 Feb 1979",
    "meeting": "Einstein Centenary Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.4",
    "location": "Ithaca, New York",
    "date": "15-20 Jun 1981",
    "meeting": "CESR II Summer Study"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-06",
    "location": "Ithaca, New York",
    "date": "6-8 Feb 1981",
    "meeting": "Z-0 Physics Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-16",
    "location": "Munich, Germany",
    "date": "16-21 Jul 1981",
    "meeting": "International Symposium in Memory of Werner Heisenberg: Unified Theories of Elementary Particles - Critical Assessment and Prospects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-25.1",
    "location": "Chester, England",
    "date": "25-28 Aug 1981",
    "meeting": "Conference on Vector and Parallel Processors in Computational Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-29",
    "location": "Hamburg, Germany",
    "date": "29 Sep - 1 Oct 1981",
    "meeting": "1981 DESY Workshop on Testing QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-03",
    "location": "Geneva, Switzerland",
    "date": "3-14 Mar 1980",
    "meeting": "Workshop on P anti-P in the SPS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-05",
    "location": "Orleans, France",
    "date": "5-7 Jan 1982",
    "meeting": "First International Conference on Non-potential Interactions and their Lie-admissible Treatment"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-11",
    "location": "Atlanta, Georgia",
    "date": "11-13 May 1981",
    "meeting": "31st Electronic Components Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-10",
    "location": "Atlanta, Georgia",
    "date": "10-13 Nov 1981",
    "meeting": "27th Annual Conference on Magnetism and Magnetic Materials"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-20",
    "location": "Erice, Italy",
    "date": "20-31 May 1981",
    "meeting": "International School of Technological Risk Assessment 1st Course: The Elements of Risk Assessment"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-24",
    "location": "Erice, Italy",
    "date": "24-28 Jun 1981",
    "meeting": "Europhysics Study Conference: Career Outlook for Physicists in Europe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-13.1",
    "location": "Paris, France",
    "date": "13-25 Jul 1981",
    "meeting": "17th International Cosmic Ray Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-04",
    "location": "Erice, Italy",
    "date": "4-16 Oct 1981",
    "meeting": "International School of Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-06",
    "location": "Erice, Italy",
    "date": "6-14 Oct 1981",
    "meeting": "Europhysics Study Conference: Unification of Fundamental Interactions II:"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-04.1",
    "location": "Bad Honnef, Germany",
    "date": "4-9 Oct 1981",
    "meeting": "International Symposium on Polarization Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-15",
    "location": "Erice, Italy",
    "date": "15-22 Nov 1981",
    "meeting": "Europhysics Study Conference: The Search for Charm, Beauty and Truth at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-04",
    "location": "Istanbul, Turkey",
    "date": "4-5 Sep 1981",
    "meeting": "Seminars on Problems of Physics in the Less Developed Regions in Europe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07.2",
    "location": "Amsterdam, Netherlands",
    "date": "7-11 Sep 1981",
    "meeting": "11th European Microwave Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-14",
    "location": "Erice, Italy",
    "date": "14-20 Dec 1981",
    "meeting": "Workshop on the Anti-p p Colliders"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-05",
    "location": "Cambridge, England",
    "date": "5-18 Sep 1982",
    "meeting": "CERN School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-26",
    "location": "Paris, France",
    "date": "26-31 Jul 1982",
    "meeting": "21st International Conference on High Energy Physics"
  }, {
    "meeting": "Rochester"
  }, {
    "meeting": "high-energy ICHEP'82 82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-14",
    "location": "Balatonfured, Hungary",
    "date": "14-19 Jun 1982",
    "meeting": "10th International Conference on Neutrino Physics: Neutrino '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-29.1",
    "location": "Santa Fe, N.Mex",
    "date": "29 Sep - Oct 2, 1980",
    "meeting": "Applied Superconductivity Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-18",
    "location": "Amiens, France",
    "date": "18 Dec 1980",
    "meeting": "Gamma-Gamma Seminar"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-28",
    "location": "College Park, Maryland",
    "date": "28-30 Oct 1982",
    "meeting": "1982 Meeting of the Division of Particles and Fields of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-29",
    "location": "Telluride, Colo.",
    "date": "29-31 March 1979",
    "meeting": "Conference on the (p,n) Reaction and the Nucleon Nucleon Force"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.5",
    "location": "Barcelona, Spain",
    "date": "15-20 Jun 1981",
    "meeting": "Workshop on Relativistic Action-at-a-distance: Classical and Quantum Aspects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-28.1",
    "location": "Batavia, Illinois",
    "date": "28-30 April 1980",
    "meeting": "High Intensity Targeting Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-08",
    "location": "Vancouver, British Columbia, Canada",
    "date": "8-9 August 1980",
    "meeting": "TRIUMF Muon Physics Facility Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-01",
    "location": "Akaslompolo, Finland",
    "date": "1-13 Aug 1982",
    "meeting": "The Arctic School of Physics 1982: Gauge Theories of the Eighties"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-19.3",
    "location": "Lowell, Mass.",
    "date": "19-23 Mar 1979",
    "meeting": "NSF-CBMS Conference on Geometric Methods in Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-10",
    "location": "Ithaca, New York",
    "date": "10 Apr 1981",
    "meeting": "B-Decay Workshop, Cornell University"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-03",
    "location": "Denton, Tex.",
    "date": "3-5 Nov 1980",
    "meeting": "6th Conference on the Application of Accelerators in Research and Industry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-08.2",
    "location": "Darmstadt, Germany",
    "date": "8 Dec 1980",
    "meeting": "Workshop on ECR Ion Sources and Related Topics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-03-04",
    "location": "Princeton, New Jersey",
    "date": "4-9 Mar 1979",
    "meeting": "Einstein Centennial Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07.3",
    "location": "Gif-sur-Yvette, France",
    "date": "7-11 Sep 1981",
    "meeting": "13th Summer School in Particle Physics: Perturbative QCD and High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-10-10.2",
    "location": "Tokyo, Japan",
    "date": "10 Oct 1977",
    "meeting": "Centenary Meeting of the Mathematical and Physical Societies of Japan"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-04.1",
    "location": "Argonne, Illinois",
    "date": "4-5 Dec 1980",
    "meeting": "Workshop on Foundations of the Relativistic Theory of Atomic Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-02",
    "location": "Chapel Hill, North Carolina",
    "date": "2-3 Oct 1981",
    "meeting": "20th Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-05",
    "location": "Clermont-Ferrand, France",
    "date": "5-6 Mar 1981",
    "meeting": "Seminar on Gamma-Gamma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-01",
    "location": "Kalpakkam, India",
    "date": "1-14 Jan 1981",
    "meeting": "Winter School in Theoretical High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-12",
    "location": "Oaxtepec, Mexico",
    "date": "12-16 Jan 1981",
    "meeting": "2nd International Conference on Recent Progress in Many-Body Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-12.1",
    "location": "Amsterdam, Netherlands",
    "date": "12-14 Jan 1981",
    "meeting": "Informal Meeting on Gauge Theories and Phenomenology of Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-27",
    "location": "Tokyo, Japan",
    "date": "27-30 Jan 1981",
    "meeting": "Japan-Italy Symposium on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-02",
    "location": "Aussois, France",
    "date": "2-6 Feb 1981",
    "meeting": "6th Biennial Study Session on Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-02-13",
    "location": "Tsukuba, Japan",
    "date": "13-14 Feb 1981",
    "meeting": "KEK Meeting on Multiparticle Production"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-16.1",
    "location": "Austin, Tex.",
    "date": "16-19 Mar 1981",
    "meeting": "Workshop on Long-Time Prediction in Nonlinear Conservative Dynamical Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-23.1",
    "location": "Abingdon, England",
    "date": "23-26 Mar 1981",
    "meeting": "Workshop on Application of the SNS to Heavy Ion Fusion"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-03",
    "location": "Ithaca, New York",
    "date": "3-5 Apr 1981",
    "meeting": "CESR II Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-06.2",
    "location": "Liverpool, England",
    "date": "6-9 Apr 1981",
    "meeting": "Interdisciplinary Surface Science Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-29",
    "location": "London, England",
    "date": "29-30 Apr 1981",
    "meeting": "Meeting on Gauge Theories of the Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-30.1",
    "location": "Place not known",
    "date": "30 Apr - 1 May 1981",
    "meeting": "3rd Annual MRST (Montreal-Rochester-Syracuse-Toronto) Meeting"
  }, {
    "meeting": "Montreal Rochester Syracuse Toronto 81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-05.1",
    "location": "Alushta, USSR",
    "date": "5-9 May 1981",
    "meeting": "6th International Conference on Problems of Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-18.1",
    "location": "Miami Beach, Florida",
    "date": "18-21 May 1981",
    "meeting": "1981 Spring DECUS U.S. Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-25.1",
    "location": "Hefei, China",
    "date": "25 May - 15 Jun 1981",
    "meeting": "Summer School on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-20",
    "location": "Erice, Italy",
    "date": "20 May - 1 Jun 1982",
    "meeting": "International School of Cosmology and Gravitation: 8th Course: Unified Field Theories of More than Four Dimensions, Including Exact Solutions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-01.2",
    "location": "Munich, Germany",
    "date": "1-5 Jun 1981",
    "meeting": "4th Symposium on Neutron Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-10.1",
    "location": "Dresden, East Germany",
    "date": "10-16 Apr 1980",
    "meeting": "10th International Symposium on Nuclear Electronics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-27",
    "location": "Bad Liebenzell, Germany",
    "date": "27 Sep - 3 Oct 1981",
    "meeting": "KfK Summer School 81 on Quarks and Nuclear Forces"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-10",
    "location": "Durham, New Hampshire",
    "date": "10-12 Apr 1980",
    "meeting": "First Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-14",
    "location": "Chicago, Illinois",
    "date": "14-17 Sep 1981",
    "meeting": "COMPUMAG: Conference on the Computation of Electro Magnetic Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-27",
    "location": "New Orleans, Louisiana",
    "date": "27-30 May 1981",
    "meeting": "Research Symposium in Honor of 80th Birthday of P.A.M. Dirac"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-24.1",
    "location": "Blacksburg, Virginia",
    "date": "24-27 Jun 1981",
    "meeting": "Microcomputer Design Interfacing, Programming and Application Using the Z80/8085/8080"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-20.2",
    "location": "Ann Arbor, Mich.",
    "date": "20-24 Jul 1981",
    "meeting": "Mini and Microcomputers: Their Structure, Characteristics and Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-10.1",
    "location": "Wolfeboro, New Hampshire",
    "date": "10-14 Aug 1981",
    "meeting": "Gordon Conference on Few-Body Problems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-14.1",
    "location": "Washington, D.C.",
    "date": "14-18 Sep 1981",
    "meeting": "COMPCON Fall '81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-15.1",
    "location": "Innsbruck, Austria",
    "date": "15-18 Sep 1981",
    "meeting": "International Meeting on Relativistic Astrophysics: Origins and Evolution of the Solar System, Late Stages of Stellar Evolution"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-19",
    "location": "Madison, Wis.",
    "date": "19-20 Oct 1981",
    "meeting": "14th Annual Synchrotron Radiation Users' Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-11",
    "location": "Paris, France",
    "date": "11 Dec 1981",
    "meeting": "69th Physics Exhibition, 1981"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-04",
    "location": "Arlington, Tex.",
    "date": "4-8 Apr 1982",
    "meeting": "6th International Conference on Positron Annihilation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-06",
    "location": "Inverness, Scotland",
    "date": "6-11 Jun 1982",
    "meeting": "3rd International Symposium on Radiation Protection: Advances in Theory and Practice"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-25",
    "location": "Schladming, Austria",
    "date": "25 Feb - 6 Mar 1982",
    "meeting": "21st Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Electroweak Interactions)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-29",
    "location": "Rome, Italy",
    "date": "29-30 Oct 1981",
    "meeting": "Workshop on Physics and Astrophysics with a Multikiloton Modular Underground Track Detector"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-04",
    "location": "Daresbury, England",
    "date": "4-5 Oct 1980",
    "meeting": "Daresbury Study Weekend on Topics in Heavy Ion Reactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-04.1",
    "location": "Paris, France",
    "date": "4-23 Aug 1980",
    "meeting": "1980 Summer Institute of the Ecole Normale Superieure, LPT"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-04.2",
    "location": "Cambridge, Mass.",
    "date": "4-8 Aug 1980",
    "meeting": "7th International Conference on Atomic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-24.1",
    "location": "Berkeley, California",
    "date": "24-30 Aug 1980",
    "meeting": "International Conference on Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-20",
    "location": "Nara, Japan",
    "date": "20-24 Aug 1982",
    "meeting": "Symposium on Gauge Theory and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-11.1",
    "location": "Trieste, Italy",
    "date": "11-15 Dec 1981",
    "meeting": "Monopoles in Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-15",
    "location": "Chapel Hill, North Carolina",
    "date": "15-17 Apr 1982",
    "meeting": "Third Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-30",
    "location": "Upton, New York",
    "date": "Jan 30-31 1981",
    "meeting": "Neutrino Oscillation Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-01-19.1",
    "location": "Chilton, England",
    "date": "Jan 19-20, 1981",
    "meeting": "Meeting on the Application of Holographic Techniques to Bubble Chamber Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-16.2",
    "location": "Cambridge, England",
    "date": "Jun 16 - Jul 12, 1980",
    "meeting": "Nuffield Workshop on Superspace and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-18.1",
    "location": "East Lansing, Mich.",
    "date": "18 - 21 Sep, 1979",
    "meeting": "6th International Conference on Atomic Masses and Fundamental Constants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-21",
    "location": "Paris, France",
    "date": "21-23 Jul 1982",
    "meeting": "International Colloquium on the History of Particle Physics: Some Discoveries, Concepts, Institutions from the Thirties to the Fifties"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-21",
    "location": "Cali, Colombia",
    "date": "21 Jun - 9 Jul 1982",
    "meeting": "Latin American School of Physics: Stochastic Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-26",
    "location": "Copenhagen, Denmark",
    "date": "26-30 Oct 1981",
    "meeting": "Strings Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-14",
    "location": "Erice, Italy",
    "date": "14-19 Aug 1981",
    "meeting": "International Seminar on World-wide Implications of a Nuclear War"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-10",
    "location": "Madison, Wisc.",
    "date": "10-12 Dec 1981",
    "meeting": "2nd Topical Workshop on Forward Collider Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-02",
    "location": "Les Houches, France",
    "date": "2-21 Jun 1982",
    "meeting": "Les Houches Summer School on Gravitational Radiation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-07",
    "location": "Helsingor, Denmark",
    "date": "7-13 Jun 1981",
    "meeting": "4th International Conference on Nuclei Far From Stability"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-18.3",
    "location": "Dubna, USSR",
    "date": "18-21 Sep 1979",
    "meeting": "International Conference on Systems and Techniques of Analytical Computing and Their Applications in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-18.2",
    "location": "Tsukuba, Japan",
    "date": "18-19 Sep 1979",
    "meeting": "Symposium on High-Energy Detectors: Present and Future"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-07",
    "location": "Darmstadt, Germany",
    "date": "7-10 Oct 1980",
    "meeting": "Workshop on Future Relativistic Heavy Ion Experiments."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-14",
    "location": "Ithaca, New York",
    "date": "14-16 Nov 1980",
    "meeting": "WorkshopS on Detectors and Experiments for e+ e- at 100-GeV."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-07-02.1",
    "location": "Karlsruhe, Germany",
    "date": "2-4 Jul 1980",
    "meeting": "Workshop on RF Superconductivity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-08.1",
    "location": "Giessen, Germany",
    "date": "8-11 Sep 1980",
    "meeting": "1st Conference on Charged Particle Optics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-07.1",
    "location": "Dayton, Ohio",
    "date": "7 Jun 1981",
    "meeting": "5th International Workshop on Rare Earth - Cobalt Permanent Magnets"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-18",
    "location": "Coral Gables, Florida",
    "date": "18-22 Jan 1982",
    "meeting": "Orbis Scientiae 1982"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-09.1",
    "location": "Santa Barbara, California",
    "date": "9-20 Aug 1982",
    "meeting": "Workshop on Path Integrals"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-16",
    "location": "Stanford, California",
    "date": "16-24 Aug 1982",
    "meeting": "10th SLAC Summer Institute on Particle Physics: Physics at Very High Energies (followed by 3 day Topical Conference) (SSI 82)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-14.1",
    "location": "New Orleans, Louisiana",
    "date": "14-18 Dec 1981",
    "meeting": "Lasers '81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-06",
    "location": "Tsukuba, Japan",
    "date": "6-11 Nov 1981",
    "meeting": "2nd Tristan Physics Workshop"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-02.1",
    "location": "Wuppertal, Germany",
    "date": "2-3 Oct 1981",
    "meeting": "Physics with ep Colliders"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-05.1",
    "location": "Mexico City, Mexico",
    "date": "5-7 Jan 1982",
    "meeting": "Pan American Symposium on Particles and Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-03",
    "location": "Las Vegas, Nev.",
    "date": "3-6 May 1982",
    "meeting": "28th International Instrumentation Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-24.1",
    "location": "Herceg-Novi, Yugoslavia",
    "date": "24 Aug - 3 Sep, 1976",
    "meeting": "3rd International Summer School on Radiation Protection"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-15",
    "location": "Karpacz, Poland",
    "date": "15-28 Feb 1982",
    "meeting": "19th Winter School of Theoretical Physics: Phase Transitions and disordered Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-24",
    "location": "Les Arcs, France",
    "date": "24-30 Jan 1982",
    "meeting": "2nd Moriond Workshop: New Flavors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-14",
    "location": "Les Arcs, France",
    "date": "14-20 Mar 1982",
    "meeting": "XVIIth Rencontre de Moriond on Elementary Particle Physics: I. Electroweak Interactions and Grand Unified Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-03",
    "location": "Philadelphia, Pa",
    "date": "3-5 Nov 1982",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-21",
    "location": "Los Angeles, California",
    "date": "21-25 Mar 1983",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-18",
    "location": "Baltimore, Maryland",
    "date": "18-21 Apr 1983",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-20",
    "location": "San Francisco, California",
    "date": "20-23 Nov 1983",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-31.2",
    "location": "Rackova Dolina, Czechoslovakia",
    "date": "31 Aug - 5 Sep 1981",
    "meeting": "Seminar on Particle Physics: Hadron Structure '81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-05",
    "location": "Vienna, Austria",
    "date": "5-8 Sep 1981",
    "meeting": "International Conference on Ludwig Boltzmann"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-15.2",
    "location": "Ferrara, Italy",
    "date": "15-18 Sep 1981",
    "meeting": "10th European Conference on Few and Several Body Problems in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-28",
    "location": "Nice, France",
    "date": "28 Sep - 2 Oct 1981",
    "meeting": "SEAS Anniversary Meeting: Workshop on Analysis and Design of Computer Installations and Communication systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-05",
    "location": "Dubrovnik, Yugoslavia",
    "date": "5-10 Oct 1981",
    "meeting": "Multidimensional Data Analysis"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-05.1",
    "location": "Trieste, Italy",
    "date": "5-30 Oct 1981",
    "meeting": "Workshop on Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-29",
    "location": "Chester, England",
    "date": "29-31 Mar 1982",
    "meeting": "Vacuum '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-05",
    "location": "Coventry, England",
    "date": "5-8 Apr 1982",
    "meeting": "4th International Conference on Trends in On-line Computer Control Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-20",
    "location": "Montreal, Quebec, Canada",
    "date": "20-23 Jul 1982",
    "meeting": "3rd Joint International Magnetics Conference (INTERMAG 82) and Magnetism and Magnetic Materials (MMM) Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-08",
    "location": "Maria Laach, Germany",
    "date": "8-18 Sep 1981",
    "meeting": "Herbstschule fur Hochenergiephysik"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-08.2",
    "location": "Chilton, England",
    "date": "8-25 Sep 1980",
    "meeting": "Rutherford School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-02.1",
    "location": "Stockholm, Sweden",
    "date": "2-4 Jun 1982",
    "meeting": "2nd Physics in Collision"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-01",
    "location": "Roaring Brook, New York",
    "date": "1-12 Jul 1982",
    "meeting": "2nd NATO Advanced Study Institute on Techniques and Concepts of High-Energy Physics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-20",
    "location": "Erice, Italy",
    "date": "20-30 Jun 1982",
    "meeting": "International School of Cosmic Ray Astrophysics: Composition and Origin of Cosmic Rays"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-13",
    "location": "Rochester, New York",
    "date": "13 Mar 1981",
    "meeting": "CLEO Collaboration Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-27",
    "location": "Erice, Italy",
    "date": "27 Mar - 8 Apr 1982",
    "meeting": "International School of Nuclear Physics: Collective Bands in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-09",
    "location": "Dubna, USSR",
    "date": "9-19 Dec 1980",
    "meeting": "14th International School on High-Energy Physics for Young Scientists."
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-23",
    "location": "Salt Lake City, Utah",
    "date": "23-27 Mar 1982",
    "meeting": "2nd Rocky Mountain-Southwest Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-06.1",
    "location": "Volendam, Netherlands",
    "date": "6-11 Jun 1982",
    "meeting": "XIII International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-14.1",
    "location": "Les Arcs, France",
    "date": "14-20 Mar 1982",
    "meeting": "2nd Moriond Astrophysics Meeting: Recent Developments in Observational and Theoretical Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-14",
    "location": "Upton, New York",
    "date": "14-16 Apr 1983",
    "meeting": "7th International Conference on Meson Spectroscopy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-14",
    "location": "Phoenix, Arizona",
    "date": "14-16 Apr 1982",
    "meeting": "Conference on Lasers and Electro-optics (CLEO '82)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-29.1",
    "location": "Les Houches, France",
    "date": "29 Mar - Apr 10 1982",
    "meeting": "Les Houches Winter School of Theoretical Physics: Statistical Mechanics of Ionic Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-22",
    "location": "Cracow, Poland",
    "date": "22 May - 9 Jun 1981",
    "meeting": "XXIst Cracow School of Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-11",
    "location": "Bombay, India",
    "date": "11-14 Jan 1982",
    "meeting": "International Colloquium on Baryon Nonconservation (ICOBAN)"
  }, {
    "meeting": "ICOBAN"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-31",
    "location": "Glasgow, Scotland",
    "date": "31 Mar - 2 Apr 1982",
    "meeting": "Institute of Physics Conference on Nuclear Structure and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-19",
    "location": "Providence, Rhode Island",
    "date": "19-20 Jun 1981",
    "meeting": "Brown Workshop on Nonperturbative Studies in Quantum Chromodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-21",
    "location": "Bechyne, Czechoslovakia",
    "date": "21-30 Jun 1983",
    "meeting": "5th Czechoslovakian Summer School on Computing Techniques in Physics: Databases and Data Structures in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-03.4",
    "location": "Aix-en-Provence, France",
    "date": "3-7 Sep 1979",
    "meeting": "International Conferences on Differential Geometrical Methods in Mathematical Physics. (see also 10-14 Sep 1979, Salamanca, Spain)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-28",
    "location": "Boulder, Colo.",
    "date": "28 Jun - 1 Jul 1982",
    "meeting": "Conference on Precision Electromagnetic Measurements - CPEM '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-14.2",
    "location": "San Antonio, Tex.",
    "date": "14-18 Mar 1982",
    "meeting": "Workshop on Irreversible Processes in Quantum Mechanics and Quantum Optics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-11.1",
    "location": "Rio de Janeiro, Brazil",
    "date": "11-22 Jan 1982",
    "meeting": "7th Brazilian Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-17",
    "location": "Stanford, California",
    "date": "17-19 Dec 1981",
    "meeting": "Stanford Linear Collider User Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-02.2",
    "location": "Florence, Italy",
    "date": "2-4 Jun 1982",
    "meeting": "6th Johns Hopkins Workshop on Current Problems in Particle Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-29",
    "location": "Zinal, Switzerland",
    "date": "29 Aug - 11 Sep 1982",
    "meeting": "1982 CERN School of Computing"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-23",
    "location": "Pearson Coll., BC, Canada",
    "date": "23 Aug - 3 Sep 1982",
    "meeting": "NATO Advanced Study Institute: Progress in Nuclear Dynamics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-20",
    "location": "Berlin, Germany",
    "date": "20-23 Sep 1983",
    "meeting": "Europhysics Conference on Computing in Accelerator Design and Operation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-30",
    "location": "Shanghai, China",
    "date": "30 Aug - 2 Sep 1982",
    "meeting": "3rd Marcel Grossmann Meeting on the Recent Developments of General Relativity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-28.1",
    "location": "Les Houches, France",
    "date": "28 Jun - 29 Jul 1982",
    "meeting": "Les Houches Summer School on Theoretical Physics: New Trends in Atomic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-02",
    "location": "Les Houches, France",
    "date": "2 Aug - 10 Sep 1982",
    "meeting": "Les Houches Summer School in Theoretical Physics: Recent Advances in Field Theory and Statistical Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-03",
    "location": "Erice, Italy",
    "date": "3-14 Aug 1982",
    "meeting": "20th International School of Subnuclear Physics: Gauge Interactions: Theory and Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-30",
    "location": "Zakopane, Poland",
    "date": "30 May - 12 Jun 1982",
    "meeting": "XXII Cracow School of Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-09",
    "location": "Hamburg, Germany",
    "date": "9-13 Aug 1982",
    "meeting": "International Conference on X-ray and VUV Synchrotron Radiation Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-08-22.1",
    "location": "Khabarovsk, USSR",
    "date": "22-29 Aug 1979",
    "meeting": "DUMAND Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-09.1",
    "location": "Tsukuba, Japan",
    "date": "9-11 Jul 1981",
    "meeting": "1st Workshop on Detectors for TRISTAN e+ e- Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-22",
    "location": "Nashville, Tennessee",
    "date": "22-24 May 1982",
    "meeting": "5th International Conference on Particle Physics: Novel Results in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-28",
    "location": "Masella, Spain",
    "date": "28 Jan - 6 Feb 1982",
    "meeting": "Xth International Winter Meeting on Fundamental Physics and XIII GIFT International Seminar on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-21.1",
    "location": "Trieste, Italy",
    "date": "21 Jun-31 Jul 1982",
    "meeting": "ICTP Summer Workshop in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-22.4",
    "location": "Granada, Spain",
    "date": "c80/09/22.3",
    "meeting": "3rd Topical School: The Many-Body Problem Jastrow Correlations Versus Brueckner Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-22.3",
    "location": "Serpukhov, USSR",
    "date": "22-28 Sep 1980",
    "meeting": "International Workshop on Problems of High-Energy Physics and Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-12",
    "location": "Dronten, Netherlands",
    "date": "12-23 Aug 1980",
    "meeting": "International Summer School on Nuclear Structure"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-28",
    "location": "Oxford, England",
    "date": "28 Jun - 15 Jul, 1977",
    "meeting": "SRC/LMS Research Symposium on Representations of Lie Groups"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-02-20.1",
    "location": "Caracas, Venezuela",
    "date": "20 Feb 1980",
    "meeting": "Conference on Gravity, Gravities, Supersymmetries and Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-10-15",
    "location": "Batavia, Illinois",
    "date": "15-21 Oct 1978",
    "meeting": "1st Workshop on Possibilities and Limitations of Accelerators and Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-11",
    "location": "Kobe, Japan",
    "date": "11-14 May 1982",
    "meeting": "9th International Cryogenic Engineering Conference and International Cryogenic Materials Conference (ICEC9-ICMC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-30.1",
    "location": "Santiago de Compostela, Spain",
    "date": "30 Aug - 3 Sep 1982",
    "meeting": "European Symposium on Nucleon-Antinucleon and Quark-Antiquark Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-06",
    "location": "Trieste, Italy",
    "date": "6-18 Sep 1982",
    "meeting": "September School on Supergravity and Supersymmetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-17",
    "location": "Trieste, Italy",
    "date": "17-21 Dec 1982",
    "meeting": "Workshop on Non-perturbative Field Theory and QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-05.2",
    "location": "La Jolla, California",
    "date": "5-7 Jan 1982",
    "meeting": "Annual Workshop on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-16",
    "location": "Venice, Italy",
    "date": "16-18 Mar 1982",
    "meeting": "International Conference on Unified Theories and their Experimental Tests"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-26.1",
    "location": "Austin, Tex.",
    "date": "26-29 Apr 1982",
    "meeting": "9th International Conference on Computer Architecture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-01",
    "location": "New York, New York",
    "date": "1-4 Jun 1982",
    "meeting": "1982 Electron, Ion and Photon Beam Technology Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-13",
    "location": "Anaheim, California",
    "date": "13-17 Jun 1982",
    "meeting": "1982 Annual Conference on Pattern Recognition and Image Processing (PRIP '82)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-14",
    "location": "Los Angeles, California",
    "date": "14-16 Sep 1982",
    "meeting": "Western Electronic Show and Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-20",
    "location": "Washington, DC",
    "date": "20-24 Sep 1982",
    "meeting": "COMPCON Fall 1982"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-20",
    "location": "Washington, DC",
    "date": "20-22 Oct 1982",
    "meeting": "IEEE 1982 Nuclear Science Symposium (NSS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-28.1",
    "location": "San Francisco, California",
    "date": "28 Feb - 3 Mar 1983",
    "meeting": "COMPCON Spring 1983"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-21.1",
    "location": "Santa Fe, New Mex.",
    "date": "21-23 Mar 1983",
    "meeting": "10th Particle Accelerator Conference"
  }, {
    "meeting": "PAC 83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-19",
    "location": "New York, New York",
    "date": "19-21 Apr 1983",
    "meeting": "ELECTRO '83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16",
    "location": "Anaheim, California",
    "date": "16-19 May 1983",
    "meeting": "National Computer Conference (NCC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-11.1",
    "location": "Isl. Vlieland, Netherlands",
    "date": "11-14 May 1982",
    "meeting": "Annual Theoretical Physics Conference (Vosbergen Conf.)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-23.1",
    "location": "Istanbul, Turkey",
    "date": "23-28 Aug 1982",
    "meeting": "11th International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-12-26.1",
    "location": "Santiago, Chile",
    "date": "26-30 Dec 1980",
    "meeting": "2nd Chilean Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-30",
    "location": "Stanford, California",
    "date": "30 Nov - 5 Dec 1981",
    "meeting": "Crystal Ball Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-05",
    "location": "Lewes, Del.",
    "date": "5 Jun - 3 Jul 1982",
    "meeting": "Lewes Center for Physics: An East Coast Summer Physics Center"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-23.2",
    "location": "Santa Barbara, California",
    "date": "23-27 Aug 1982",
    "meeting": "Workshop on Computational Methods for Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-04",
    "location": "Irvine, California",
    "date": "4-5 Dec 1982",
    "meeting": "Eighth Irvine Conference on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-14.1",
    "location": "Alushta, USSR",
    "date": "14-15 April 1980",
    "meeting": "International School on Nuclear Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-06-30",
    "location": "Clausthal, Germany",
    "date": "30 Jun - 2 Jul, 1977",
    "meeting": "Informal Meeting on Differential Geometric Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-10",
    "location": "Cocoyoc, Mexico",
    "date": "10-12 Jan 1982",
    "meeting": "Symposium on Group Theory and its Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-20",
    "location": "Brighton, England",
    "date": "20-27 Jul 1983",
    "meeting": "International Europhysics Conference on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-16",
    "location": "Upton, New York",
    "date": "16-22 Sep 1982",
    "meeting": "5th International Symposium on High-Energy Spin Physics with Polarized Beams and Polarized Targets"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-13",
    "location": "Austin, Tex.",
    "date": "13-17 Dec 1982",
    "meeting": "11th Texas Symposium on Relativistic Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-04",
    "location": "Ithaca, New York",
    "date": "4-9 Aug 1983",
    "meeting": "11th International Symposium on Lepton and Photon Interactions at High Energies"
  }, {
    "meeting": "LP 83 11th"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-23",
    "location": "Telemark, Wisc.",
    "date": "23-25 Sep 1982",
    "meeting": "Conference on Neutrino Mass and Gauge Structure of Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-20",
    "location": "Sintra, Portugal",
    "date": "20-30 Aug 1980",
    "meeting": "NATO Advanced Study Institute on the Science and Technology of Superconducting Materials"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-03.1",
    "location": "Saclay, France",
    "date": "3-7 May 1982",
    "meeting": "International Conference on Selected Aspects of Heavy Ion Reactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-19",
    "location": "Los Alamos, N.Mex.",
    "date": "19-22 Jul 1982",
    "meeting": "Workshop on LAMPF II: A 16-GeV High Intensity Proton Synchrotron"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-30",
    "location": "Genoa, Italy",
    "date": "30 May - 2 Jun 1983",
    "meeting": "4th COMPUMAG: Conference on the Computation of Electromagnetic Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-09-13",
    "location": "Argonne, Illinois",
    "date": "13-14 Sep 1979",
    "meeting": "Symposium on the History of the ZGS."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-21",
    "location": "St. Andrews, Scotland",
    "date": "21 Aug - Sep 1982",
    "meeting": "3rd UK Theory Institute (High-Energy Physics)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-10",
    "location": "Bielefeld, Germany",
    "date": "10-14 May 1982",
    "meeting": "Workshop on Quark Matter Formation and Heavy Ion Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-19",
    "location": "Kupari-Dubrovnik, Yugoslavia",
    "date": "19 Sep - 3 Oct 1982",
    "meeting": "International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-21",
    "location": "Santa Barbara, California",
    "date": "21-23 Jan 1982",
    "meeting": "Low-energy Tests of High-Energy Particle Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-31",
    "location": "Islamabad, Pakistan",
    "date": "31 Jul - 19 Aug 1982",
    "meeting": "7th International Nathiagali Summer College on Physics and Contemporary Needs."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-22.2",
    "location": "Jodlowy Dwor, Poland",
    "date": "22-28 May 1980",
    "meeting": "3rd Warsaw Symposium on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-24",
    "location": "Trieste, Italy",
    "date": "24 Mar - 13 May 1982",
    "meeting": "International School for Advanced Studies: Lectures on Weak Interactions (SISSA/ISAS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-22",
    "location": "Trieste, Italy",
    "date": "22 Mar - 28 May 1982",
    "meeting": "International School for Advanced Studies: Lectures on Lattice Gauge Theories and Statistical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-08",
    "location": "Newark, Del.",
    "date": "8-9 Oct 1982",
    "meeting": "21st Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-13",
    "location": "Frascati, Italy",
    "date": "13-17 Sep 1982",
    "meeting": "International Conference on EXAFS and Near Edge Structures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-03",
    "location": "Erice, Italy",
    "date": "3-15 Jul 1982",
    "meeting": "Advances in Superconductivity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-19",
    "location": "Los Angeles, California",
    "date": "19-25 Aug 1981",
    "meeting": "XVIth International Conference on Low Temperature Physics"
  }, {}, {}]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-27",
    "location": "Boulder, Colo.",
    "date": "27-29 Mar 1980",
    "meeting": "Special Session in Mathematical Physics organized as part of American Mathematical Society 774th Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-05",
    "location": "Rome, Italy",
    "date": "5-6 Feb 1982",
    "meeting": "Workshop on Lepton Detection in Experiment UA1"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-15",
    "location": "Los Angeles, California",
    "date": "15-20 Mar 1982",
    "meeting": "Annual SHARE Conference 1982"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-28.1",
    "location": "Rome, Italy",
    "date": "28 Sep - 3 Oct 1981",
    "meeting": "Vatican Study Week on Cosmology and Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-10.2",
    "location": "Vancouver, British Columbia, Canada",
    "date": "10-14 Aug 1981",
    "meeting": "2nd TRIUMF Kaon Factory Physics Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-07",
    "location": "Orsay, France",
    "date": "7-8 Oct 1981",
    "meeting": "3rd Seminar on Gamma Gamma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-01",
    "location": "Trieste, Italy",
    "date": "1-26 Aug 1983",
    "meeting": "Summer School on Dynamical Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-04",
    "location": "Palo Alto, California",
    "date": "4-7 Oct 1982",
    "meeting": "The Fifteenth Annual Microprogramming Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-18",
    "location": "Trieste, Italy",
    "date": "18 Oct 1982 - Spring 83",
    "meeting": "International School for Advanced Studies, Physics / Mathematics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-07.1",
    "location": "Argonne, Illinois",
    "date": "7-11 Jun 1982",
    "meeting": "1982 Summer Workshop on Proton Decay Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-09",
    "location": "Erice, Italy",
    "date": "9-16 May 1982",
    "meeting": "International School of Physics of Exotic Atoms: Workshop on Physics at Lear with Low-energy Cooled Antiprotons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-02.1",
    "location": "Stanford, California",
    "date": "2-13 Aug 1982",
    "meeting": "Second Summer School on High-Energy Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-21",
    "location": "Stanford, California",
    "date": "21-22 Oct 1982",
    "meeting": "Ninth Annual Stanford Synchrotron Radiation Laboratory Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "date": "5-11 Sep 1982",
    "coference_code": "C82-09-05.1",
    "meeting": "8th International Workshop on Weak Interactions and Neutrinos",
    "location": "Javea, Spain"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-10-14.1",
    "location": "Dubna, USSR",
    "date": "14-16 Oct 1980",
    "meeting": "7th All Union Conference on Charged Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-22",
    "location": "Perugia, Italy",
    "date": "22-30 April, 1982",
    "meeting": "Symposium in Honor of the 90th Birthday of Louis de Broglie - Wave Particle Dualism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-11",
    "location": "Erice, Italy",
    "date": "11-18 Sep 1982",
    "meeting": "Europhysics Study Conference - Multibody Phenomena in Strong, Electromagnetic and Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-29",
    "location": "Oaxtepec, Mexico",
    "date": "29 Nov-17 Dec 1982",
    "meeting": "School and Workshop: Nonlinear Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-13",
    "location": "Varenna, Italy",
    "date": "13-23 Jul 1982",
    "meeting": "Gamow Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-28",
    "location": "Hamburg, Germany",
    "date": "28-30 Sept 1982",
    "meeting": "1982 DESY Workshop: Electroweak Interactions at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-21.1",
    "location": "San Francisco, California",
    "date": "21-28 Jul 1982",
    "meeting": "Eighth World Conference on Earthquake Engineering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-09",
    "location": "Stoughton, Wis.",
    "date": "9-11 Sept 1982",
    "meeting": "Beam Cooling Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-12",
    "location": "Varna, Bulgaria",
    "date": "12-21 Sept 1982",
    "meeting": "Summer School on Differential Geometric Methods in Mathematical Physics with International Conference on Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-21",
    "location": "San Francisco, California",
    "date": "21-28 Jul 1984",
    "meeting": "Eighth World Conference on Earthquake Engineering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-13",
    "location": "Zuoz, Switzerland",
    "date": "13-21 Apr 1982",
    "meeting": "Spring School: Beyond the Standard Model"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-25.1",
    "location": "Enschede, Netherlands",
    "date": "25-26 May 1982",
    "meeting": "Dynamics Days Twente: Annual Workshop on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-17",
    "location": "Cargese, France",
    "date": "17-26 Jun 1982",
    "meeting": "Nonlinear Physics: Solitons in Real Systems, Transitions to Turbulence"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-20.1",
    "location": "Heidelberg, Germany",
    "date": "20-25 Jun 1982",
    "meeting": "Hypernuclear and Kaon Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-04",
    "location": "Batavia, Illinois",
    "date": "4 Mar 1982",
    "meeting": "Workshop on A-Alpha Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-07",
    "location": "Batavia, Illinois",
    "date": "7-8 Oct 1982",
    "meeting": "Workshop on Drell-Yan Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-07",
    "location": "Stillwater, Okla.",
    "date": "7-9 Mar 1983",
    "meeting": "Workshop on Nonperturbative QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-10",
    "location": "Houston, Tex.",
    "date": "10-12 Dec 1979",
    "meeting": "1979 Annual Meeting of Division of Electron and Atomic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-10.1",
    "location": "San Diego, California",
    "date": "10-13 Dec 1979",
    "meeting": "1979 Fall DECUS U.S. Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-12-10.2",
    "location": "Mexico City, Mexico",
    "date": "10-14 Dec 1979",
    "meeting": "UNAM Workshop on Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "SLAC-PUB-0984",
    "location": "Adelaide, S.Australia",
    "date": "9-19 Feb 1983",
    "meeting": "3rd Mathematical Physics Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-26.1",
    "location": "Bad Honnef, Germany",
    "date": "26-29 Oct 1981",
    "meeting": "International Symposium on Nuclear Fission and Related Collective Phenomena and Properties of Heavy Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-30.1",
    "location": "Bielefeld, Germany",
    "date": "30 Nov - 4 Dec 1981",
    "meeting": "Bielefeld Encounters in Physics and Mathematics III"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-26",
    "location": "Batavia, Illinois",
    "date": "26-27 Sep 1981",
    "meeting": "Direct Photon Workfest"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-25",
    "location": "Tokyo, Japan",
    "date": "25-26 Dec 1981",
    "meeting": "4th INS Winter Seminar of Quarks and Leptons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-30",
    "location": "Kiev, USSR",
    "date": "30 Aug - 6 Sep 1981",
    "meeting": "IXth International Conference on Nonlinear Oscillations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-13.3",
    "location": "Seattle, Washington",
    "date": "13 Jul - 7 Aug 1981",
    "meeting": "Summer Institute on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-15.6",
    "location": "Moscow, USSR",
    "date": "15-17 Jun 1981",
    "meeting": "V Seminar on Electromagnetic Interactions of Nuclei at Low and Intermediate Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-22.1",
    "location": "Banff, Canada",
    "date": "22-26 Feb 1982",
    "meeting": "Relativistic Heavy Ion Winter School"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-19",
    "location": "Sanibel, Florida",
    "date": "19 Mar 1982",
    "meeting": "Sanibel Symposium in Honor of Prof. J. Mayer"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-18",
    "location": "Los Alamos, N.Mex.",
    "date": "18-23 Feb 1982",
    "meeting": "Laser Acceleration of Particles Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-23.1",
    "location": "Bad Schandau, E.Germany",
    "date": "23-28 Mar 1982",
    "meeting": "13th Spring Symposium on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-21",
    "location": "Szczyrk, Poland",
    "date": "21-29 Sep 1981",
    "meeting": "Sixth Autumn School in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-15.1",
    "location": "Didcot, England",
    "date": "15 Mar 1982",
    "meeting": "Conference on Lattice Methodology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-18.2",
    "location": "Santa Barbara, California",
    "date": "18-22 May 1981",
    "meeting": "Workshop on Grand Unification and Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-05",
    "location": "Ahrenshoop, Germany",
    "date": "5-12 Nov 1981",
    "meeting": "Symposium on Special Topics in Gauge Field Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-04.1",
    "location": "Tokyo, Japan",
    "date": "4-8 Sep 1981",
    "meeting": "22nd Colloquium Spectroscopicum Internationale"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-12",
    "location": "Bad Honnef, Germany",
    "date": "12-15 Oct 1981",
    "meeting": "International Workshop on Resonances in Heavy Ion Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "SLAC-PUB-0986",
    "location": "Scheveningen, Netherlands",
    "date": "23-28 Aug 1981",
    "meeting": "Fifth Scheveningen Conference on Differential Equations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07.5",
    "location": "Caen, France",
    "date": "7-10 Sep 1981",
    "meeting": "9th International Conference on Cyclotrons and their Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-28.1",
    "location": "Asilomar, California",
    "date": "28-30 Oct 1981",
    "meeting": "American Physical Society Meeting at Asilomar"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-04",
    "location": "Delhi, India",
    "date": "4-6 Jan 1982",
    "meeting": "International Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-07.4",
    "location": "Bristol, England",
    "date": "7-12 Sep 1981",
    "meeting": "11th International Conference on Solid State Nuclear Track Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-15.3",
    "location": "Dubna, USSR",
    "date": "15-19 Sep 1981",
    "meeting": "6th International Seminar on High-Energy Physics Problems"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-13.1",
    "location": "Moscow, USSR",
    "date": "13-15 Oct 1981",
    "meeting": "Second Seminar on Quantum Gravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-01.4",
    "location": "Prague, Czechoslovakia",
    "date": "1-4 Jun 1981",
    "meeting": "International Conference on Pion Few Nucleon Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-09.1",
    "location": "Marseille, France",
    "date": "9-13 Jun 1981",
    "meeting": "Joint U.S.-France Seminar on Theoretical Aspects of Quantum Chromodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-11-07",
    "location": "Geneva, Switzerland",
    "date": "7 Nov 1980",
    "meeting": "28th Plenary Meeting of the European committee for Future Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-17.3",
    "location": "Quebec, Canada",
    "date": "17-20 Aug 1981",
    "meeting": "6th International Conference on Fast Ion Beam Spectroscopy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-18.1",
    "location": "Trieste, Italy",
    "date": "18 Apr-13 May 1983",
    "meeting": "2nd College on Microprocessors: Technology and Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-20.2",
    "location": "Trieste, Italy",
    "date": "20 Jun - 31 Jul 1983",
    "meeting": "3rd ICTP Workshop in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-09",
    "location": "Mainz, Germany",
    "date": "9-10 May 1980",
    "meeting": "Symposium on Present Status and Aims of Quantum Electrodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-17",
    "location": "Paris, France",
    "date": "17 Jul 1981",
    "meeting": "Paris Workshop on Cascade Simulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-15",
    "location": "Vienna, Austria",
    "date": "15-18 Feb 1983",
    "meeting": "1983 Wire Chamber Conference (WCC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-06.2",
    "location": "Cargese, France",
    "date": "6-19 Jun 1982",
    "meeting": "Atomic Physics of Highly Ionized Atoms"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-05",
    "location": "Sukhumi, USSR",
    "date": "5-7 May 1982",
    "meeting": "Quarks 82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-21",
    "location": "Charlottesville, Virginia",
    "date": "21-24 Apr 1982",
    "meeting": "New Horizons in Electromagnetic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-28.2",
    "location": "Snowmass, Colo.",
    "date": "28 Jun-16 Jul 1982",
    "meeting": "1982 DPF Summer Study on Elementary Particle Physics and Future Facilities (Snowmass 82)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-26.1",
    "location": "Antwerp, Belgium",
    "date": "26 Jul-5 Aug 1982",
    "meeting": "Workshop on Physics of Polarons and Excitons in Polar Semiconductors and Ionic Crystals"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-26.2",
    "location": "Boston, Mass.",
    "date": "26-30 Jul 1982",
    "meeting": "SIGGRAPH 82: 9th Annual Conference on Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-20.1",
    "location": "Las Vegas, Nev.",
    "date": "20-22 Jul 1982",
    "meeting": "19th Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-30",
    "location": "Knoxville, Tennessee",
    "date": "30 Nov - 3 Dec 1982",
    "meeting": "Applied Superconductivity Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-23",
    "location": "London, England",
    "date": "23 Apr 1982",
    "meeting": "Recent Developments in Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-04.1",
    "location": "Venice, Italy",
    "date": "4-9 Jul 1982",
    "meeting": "General Relativity and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-25",
    "location": "Novosibirsk, USSR",
    "date": "25-27 Jul 1982",
    "meeting": "International Conference on Synchrotron Radiation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-09.2",
    "location": "Aspen, Colo.",
    "date": "9-28 Aug 1982",
    "meeting": "Grand Unified Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-01",
    "location": "Bad Honnef, Germany",
    "date": "1-12 Sep 1982",
    "meeting": "Conference on Current Topics in Elementary Particle Physics: Gauge Theories of Fundamental Interactions - Formal Development and Experimental Verifications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-13.1",
    "location": "Berlin, Germany",
    "date": "13-15 Sep 1982",
    "meeting": "Semiconductors in the Vacuum UV: Applications of Synchrotron Radiation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-07.1",
    "location": "Washington, DC",
    "date": "7-9 Dec 1981",
    "meeting": "27th International Electron Devices Meeting"
  }, {
    "meeting": "IEDM"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-10",
    "location": "Washington, DC",
    "date": "10-12 Jun 1981",
    "meeting": "81)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-10",
    "location": "San Francisco, California",
    "date": "10-12 Feb 1982",
    "meeting": "29th IEEE international Solid-state Circuits Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-31",
    "location": "New York, New York",
    "date": "31 Jan-5 Feb 1982",
    "meeting": "1982 IEEE Power Engineering Society Winter Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-23",
    "location": "La Plagne, France",
    "date": "23-29 Jan 1983",
    "meeting": "XVIII Rencontre de Moriond: Hadronic Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-13",
    "location": "La Plagne, France",
    "date": "13-19 Mar 1983",
    "meeting": "Moriond Astrophysics Meeting: Galaxies and the Early Universe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-19",
    "location": "La Plagne, France",
    "date": "19-25 Mar 1983",
    "meeting": "3rd Moriond Workshop: Antiproton-Proton Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-14",
    "location": "Bratislava, Czechoslovakia",
    "date": "14-18 Nov 1983",
    "meeting": "Hadron Structure '83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-14",
    "location": "Racine, Wis.",
    "date": "14-17 Oct 1982",
    "meeting": "NATO Advanced Study Institute on Magnetic Monopoles"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-09",
    "location": "Strasbourg, France",
    "date": "9-12 Nov 1981",
    "meeting": "European Hybrid Spectrometer Workshop on Holographic and High-Resolution Techniques."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-15",
    "location": "Batavia, Illinois",
    "date": "15-16 Oct 1981",
    "meeting": "Workshop on Silicon Detectors for High-Energy Physics."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-10-01.1",
    "location": "Boston, Mass.",
    "date": "1-3 Oct 1979",
    "meeting": "World Conference of the International Nuclear Target Development Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-06",
    "location": "Louvain-la-Neuve, Belgium",
    "date": "6-9 Nov 1979",
    "meeting": "Colloquium on Functional Integration: Theory and Applications."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-08",
    "location": "Honolulu, Hawaii",
    "date": "8-14 Feb 1982",
    "meeting": "DUMAND Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-24.1",
    "location": "Belgodere, Corsica",
    "date": "24-28 May 1982",
    "meeting": "15th Colloquium on Numerical Analysis"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-09",
    "location": "Nanjing, China",
    "date": "9-17 Apr 1982",
    "meeting": "Academic Sinica/Max-Planck Society Workshop on High-Energy Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-03.2",
    "location": "Upton, New York",
    "date": "3-6 May 1982",
    "meeting": "Workshop on Accelerator Orbit and Particle Tracking Programs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-18",
    "location": "Louisville, Kentucky",
    "date": "18-19 Jun 1981",
    "meeting": "8th DOE Workshop on Personnel Neutron Dosimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-12",
    "location": "London, England",
    "date": "12 Mar 1982",
    "meeting": "Meeting on the Big Bang and Element Creation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-19.1",
    "location": "Santa Fe, New Mexico",
    "date": "19-23 Oct 1981",
    "meeting": "11th International Linear Accelerator Conference (LINAC 81)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-28.3",
    "location": "Rethymno, Crete",
    "date": "28 Jun - 2 Jul 1982",
    "meeting": "Europhysics Study Conference on Nuclear Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-25",
    "location": "Monterey, California",
    "date": "25-29 Oct 1982",
    "meeting": "6th International Workshop: Laser Interaction and Related Plasma Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-27",
    "location": "San Francisco, California",
    "date": "27-29 Jun 1983",
    "meeting": "SIGPLAN 83: Symposium on Programming Language Issues in Software Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-23",
    "location": "Amman, Jordan",
    "date": "23-30 Oct 1982",
    "meeting": "Petra School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-30.2",
    "location": "Amsterdam, Netherlands",
    "date": "30 Aug - 3 Sep 1982",
    "meeting": "International Conference on Nuclear Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-25",
    "location": "Stanford, California",
    "date": "25-27 Mar 1982",
    "meeting": "Near Zero / New Frontiers of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-20",
    "location": "Como, Italy",
    "date": "20-25 Jun 1983",
    "meeting": "Quantum Chaos"
  }, {
    "meeting": "NATO Advanced Research Workshop on Quantum Chaos, Chaotic Behavior in Quantum Systems: Theory and Applications"
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-30",
    "location": "Cambridge, Mass.",
    "date": "30 Apr - 1 May 1982",
    "meeting": "Workshop on Neutrino-Antineutrino Oscillations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-25.1",
    "location": "Karlsruhe, Germany",
    "date": "25-29 Mar 1982",
    "meeting": "1982 Spring Meeting for Nuclear and High-Energy Physics of the Deutsche Physikalische Gesellschaft"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-06.1",
    "location": "Gif-sur-Yvette, France",
    "date": "6-10 Sep 1982",
    "meeting": "14th Summer School on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-12.1",
    "location": "Erice, Italy",
    "date": "12-17 Sep 1982",
    "meeting": "Jet Structure from Quark and Lepton Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-30.3",
    "location": "Seattle, Washington",
    "date": "30 Aug - 1 Sep 1982",
    "meeting": "1982 ACM Sigmetrics Conference on Measurement and Modeling of Computer Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-27",
    "location": "Varenna, Italy",
    "date": "27 Jul-6 Aug 1982",
    "meeting": "International School of Physics 'Enrico Fermi': Nuclear Structure and Heavy Ion Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-22.1",
    "location": "Philadelphia, Pennsylvania",
    "date": "22-24 Apr 1982",
    "meeting": "International Workshop on Very High-Energy Interactions in Cosmic Rays"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-23",
    "location": "Tokyo, Japan",
    "date": "23-25 Oct 1981",
    "meeting": "Workshop on High-Energy Nuclear Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-21.2",
    "location": "Catania, Italy",
    "date": "21-26 Mar 1983",
    "meeting": "International Conference on Heavy Ion Physics and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-27",
    "location": "Los Alamos, N.Mex.",
    "date": "27 Sep-1 Oct 1982",
    "meeting": "Workshop on Science Underground"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-13.1",
    "location": "New Orleans, Louisiana",
    "date": "13-17 Dec 1982",
    "meeting": "Lasers '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-11",
    "location": "Paris, France",
    "date": "11-12 Mar 1982",
    "meeting": "College de France Gamma-gamma Seminar"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-12",
    "location": "Rome, Italy",
    "date": "12-14 Jan 1983",
    "meeting": "3rd Topical Workshop on Proton Antiproton Collider Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-29.2",
    "location": "Darmstadt, Germany",
    "date": "29 Mar-2 Apr 1982",
    "meeting": "Symposium on Accelerator Aspects of Heavy Ion Fusion"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-09",
    "location": "Marseille, France",
    "date": "9-13 Jun 1981",
    "meeting": "French - American Seminar on Theoretical Aspects of Quantum Chromodynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-21",
    "location": "Tokyo, Japan",
    "date": "21-23 Nov 1979",
    "meeting": "INS Symposium on Particle Physics in GeV Region: Present Status and Future Prospect."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-21",
    "location": "Philadelphia, Pennsylvania.",
    "date": "21-23 Apr 1983",
    "meeting": "Fourth Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-27.1",
    "location": "Oxford, England",
    "date": "27-30 Sep 1982",
    "meeting": "The Challenge of Ultra-High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-04.1",
    "location": "Geneva, Switzerland",
    "date": "4-6 Oct 1982",
    "meeting": "Workshop on Software in High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-19",
    "location": "Serpukhov, USSR",
    "date": "19-21 Oct 1982",
    "meeting": "All-Union Accelerator Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-19.1",
    "location": "Munich, Germany",
    "date": "19-22 Oct 1982",
    "meeting": "6th International Conference on Pattern Recognition"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-23",
    "location": "Liverpool, England",
    "date": "23-25 Mar 1983",
    "meeting": "Nuclear Structure and Particle Physics Conference (IoP)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-22",
    "location": "Dubrovnik, Yugoslavia",
    "date": "22-28 May 1983",
    "meeting": "Topical Conference on the Phenomenology of Unified Field Theories from Standard Model to Supersymmetries"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-11",
    "location": "Batavia, Illinois",
    "date": "11-16 Aug 1983",
    "meeting": "12th International Conference on High-Energy Accelerators"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-13",
    "location": "Aachen, Germany",
    "date": "13-16 Apr 1983",
    "meeting": "5th International Workshop on Photon Photon Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-21.3",
    "location": "Copenhagen, Denmark",
    "date": "21-23 Mar 1983",
    "meeting": "International Facilities for Physics Research"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-04",
    "location": "Padua, Italy",
    "date": "4-9 Jul 1983",
    "meeting": "10th International Conference on General Relativity and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-21",
    "location": "Karlsruhe, Germany",
    "date": "21-27 Aug 1983",
    "meeting": "10th International Conference on Few-Body Problems in Physics (Few Body X)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-26",
    "location": "Madrid, Spain",
    "date": "26 Sep - 1 Oct 1983",
    "meeting": "9th International Vacuum Congress (IVC-9)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-27",
    "location": "Prague, Czechoslovakia",
    "date": "27-31 Aug 1984",
    "meeting": "6th EPS General Conference: Trends in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-12.2",
    "location": "Corfu, Greece",
    "date": "12-30 Sep 1982",
    "meeting": "1st Hellenic School on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-24",
    "location": "New York, New York",
    "date": "24-27 Jan 1983",
    "meeting": "General Meeting of The American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-21.1",
    "location": "Oak Ridge, Tenn.",
    "date": "21-23 Apr 1982",
    "meeting": "Lasers in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-01",
    "location": "Los Alamos, N.Mex.",
    "date": "1-4 Feb 1982",
    "meeting": "LAMPF II Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-12",
    "location": "Singapore, Singapore",
    "date": "12-18 Jun 1983",
    "meeting": "Asia Pacific Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-13.1",
    "location": "La Plagne, France",
    "date": "13-19 Mar 1983",
    "meeting": "XVIII Rencontre de Moriond: Electroweak Interactions(Leptonic Session)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-08",
    "location": "Edinburgh, Scotland",
    "date": "8-28 Aug 1982",
    "meeting": "NATO Advanced Study Institute on Laser Physics, Systems and Techniques"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-23.3",
    "location": "Poznan, Poland",
    "date": "23-27 Aug 1982",
    "meeting": "22nd International AMPERE Congress: Magnetic Resonances and Related Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-16.1",
    "location": "Dronten, Netherlands",
    "date": "16-28 Aug 1982",
    "meeting": "NATO Advanced Study Institute on Nuclear Structure: Symmetries and Broken Symmetries"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-05",
    "location": "Lund, Sweden",
    "date": "5-7 Oct 1982",
    "meeting": "Workshop on the Use of Electron Rings for Nuclear Physics Research in the Intermediate Energy Region"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-20.1",
    "location": "Todtnauberg, Germany",
    "date": "20-24 SEP 1982",
    "meeting": "Meeting in the Black Forest on Quark Masses and Lattice Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-24",
    "location": "Warrington, England",
    "date": "24-25 Sep 1982",
    "meeting": "Daresbury Synchrotron Radiation Source Users Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-17",
    "location": "Frascati, Italy",
    "date": "17-21 Jan 1983",
    "meeting": "International Colloquium on Matter Non Conservation (ICOMAN '83)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-12",
    "location": "Bad Honnef, Germany",
    "date": "12-14 Jun 1979",
    "meeting": "Meson Theory of Nuclear Forces and Nuclear Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-04-21.2",
    "location": "Geneva, Switzerland",
    "date": "21-23 Apr 1982",
    "meeting": "Workshop on Supersymmetry versus Experiment"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-06",
    "location": "Chicago, Illinois",
    "date": "6-16 Jul 1982",
    "meeting": "American Mathematical Society summer seminar on Appication of Group Theory in Physics and Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-24.2",
    "location": "Kazimierz, Poland",
    "date": "24-28 May 1982",
    "meeting": "Vth Warsaw Symposium on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-20.1",
    "location": "Wuhan, China",
    "date": "20 Mar - 2 Apr 1982",
    "meeting": "1982 Wuhan Workshop on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-18",
    "location": "Ottawa, Canada",
    "date": "18-19 May 1982",
    "meeting": "Symposium on Gamma Ray Astronomy in Perspective of Future Space Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-12",
    "location": "Kyoto, Japan",
    "date": "12-16 Jul 1982",
    "meeting": "Kyoto Summer Institute"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-21.2",
    "location": "Cambridge, England",
    "date": "21 Jun - 9 Jul 1982",
    "meeting": "Nuffield Workshop on the Very Early Universe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-15",
    "location": "Blacksburg, Virginia",
    "date": "15-17 Sep 1983",
    "meeting": "1983 Meeting of the Division of Particles and Fields of the APS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-26",
    "location": "East Lansing, Michigan",
    "date": "26 Sep - 1 Oct 1982",
    "meeting": "International Conference on Nucleus-Nucleus Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-03.1",
    "location": "Chicago, Illinois",
    "date": "3-5 Nov 1982",
    "meeting": "23rd Annual Symposium on Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-27.1",
    "location": "Les Houches, France",
    "date": "27 Jun - 4 Aug 1983",
    "meeting": "Les Houches Summer School on Theoretical Physics: Relativity, Groups and Topology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-08",
    "location": "Les Houches, France",
    "date": "8 Aug - 2 Sep 1983",
    "meeting": "Les Houches Summer School on Theoretical Physics: Birth and Infancy of Stars"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-30",
    "location": "San Antonio, Tex.",
    "date": "30 Jan - 2 Feb 1984",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26",
    "location": "Detroit, Michigan",
    "date": "26-30 Mar 1984",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-23",
    "location": "Washington, DC",
    "date": "23-26 Apr 1984",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-12.1",
    "location": "Clausthal, Germany",
    "date": "12-15 Jul 1982",
    "meeting": "Third Summer Workshop on Mathematical Physics: Spin Structure and Gauge Geometry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-21",
    "location": "Upton, New York",
    "date": "21-22 Oct 1983",
    "meeting": "22nd Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-19.2",
    "location": "Dallas, Tex.",
    "date": "19-22 Oct 1982",
    "meeting": "35th Annual Gaseous Electronics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-25.1",
    "location": "Columbia, South Carolina",
    "date": "25-28 Oct 1982",
    "meeting": "10th International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-18",
    "location": "Stanford, California",
    "date": "18-26 Jul 1983",
    "meeting": "11th SLAC Summer Institute on Particle Physics: Dynamics and Spectroscopy at High Energy (Followed by 3-day Topical Conference) (SSI 83)"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-16.1",
    "location": "Verona, Italy",
    "date": "16-26 Jul 1981",
    "meeting": "International School of Intermediate Energy Nuclear Physics, 3rd Course"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-06",
    "location": "Erice, Italy",
    "date": "6-18 Apr 1983",
    "meeting": "International School of Nuclear Physics, 7th Course: Mesons, Isobars, Quarks and Nuclear Excitations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-17.1",
    "location": "Miami, Florida",
    "date": "17-22 Jan 1983",
    "meeting": "20th Annual Orbis Scientiae: Dedicated to P.A.M. Dirac's 80th Year"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-23",
    "location": "Schladming, Austria",
    "date": "23 Feb - 5 Mar 1983",
    "meeting": "22nd Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Developments in High Energy Physics)"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-18.1",
    "location": "Santa Cruz, California",
    "date": "18-20 Mar 1983",
    "meeting": "Theoretical Symposium on Intense Medium Energy Sources of Strangeness"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-13",
    "location": "Warrington, England",
    "date": "13-14 Nov 1982",
    "meeting": "Study Weekend: The Application of Synchrotron Radiation to Problems in Materials Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-04.1",
    "location": "Aspen, Colo.",
    "date": "4-30 Jul 1983",
    "meeting": "Aspen Workshop on Monopoles, Early Universe and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-01.1",
    "location": "Aspen, Colo.",
    "date": "1-27 Aug 1983",
    "meeting": "Aspen Workshop on Extensions of the Standard Models of the Fundamental Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-09.2",
    "location": "Tubingen, Germany",
    "date": "9-11 Sep 1981",
    "meeting": "International Symposium on Clustering Phenomena in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-12.2",
    "location": "Protvino, USSR",
    "date": "12-18 Jul 1982",
    "meeting": "V International Workshop on High-Energy Physics and Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-06",
    "location": "Geneva, Switzerland",
    "date": "6-10 Dec 1982",
    "meeting": "Workshop on SPS Fixed Target Physics for the Years 1984-1989"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-01",
    "location": "Erice, Italy",
    "date": "1-15 Feb 1983",
    "meeting": "Europhysics Study Conference: Electroweak Effects at High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C68-00-00",
    "location": "Paris, France",
    "date": "1968",
    "meeting": "3rd International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C72-08-31",
    "location": "Poznan, Poland",
    "date": "29 Aug - 1 Sep, 1972",
    "meeting": "5th International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-00",
    "location": "Novosibirsk, USSR",
    "date": "Aug 1976",
    "meeting": "7th International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-11.1",
    "location": "Honolulu, Hawaii",
    "date": "11-24 Aug 1983",
    "meeting": "9th Hawaii Topical Conference in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.1",
    "location": "Stanford, California",
    "date": "16-20 May 1983",
    "meeting": "Workshop on Polarized Electron Sources"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-01.2",
    "location": "Boulder, Colo.",
    "date": "1-10 Aug 1983",
    "meeting": "VIIth International Congress on Mathematical Physics (IAMP)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-05",
    "location": "Grenoble, France",
    "date": "5-9 Sep 1983",
    "meeting": "8th International Conference on Magnet Technology (MT-8)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-05",
    "location": "Philadelphia, Pennsylvania",
    "date": "5-8 Apr 1983",
    "meeting": "International Magnetics Conference (INTERMAG 83)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-02",
    "location": "Erice, Italy",
    "date": "2-14 Jul 1983",
    "meeting": "International School of Mathematical Physics: Regular and Chaotic Motions in Dynamical Systems (A NATO Advanced Study Institute)"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-06",
    "location": "Cargese, France",
    "date": "6-22 Jul 1983",
    "meeting": "Cargese Summer Institute: Particles and Fields"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-01",
    "location": "Cargese, France",
    "date": "1-15 Sep 1983",
    "meeting": "Cargese Summer Institute: Progress in Gauge Field Theory"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-23.1",
    "location": "Padua, Italy",
    "date": "23-25 Mar 1983",
    "meeting": "Three Day In-depth Review on the Impact of Specialized Processors in Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-08.1",
    "location": "Los Alamos, N.Mex.",
    "date": "8-12 Jun 1981",
    "meeting": "Los Alamos Neutrino Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-21.1",
    "location": "Geilo, Norway",
    "date": "21-26 Apr 1981",
    "meeting": "NATO Advanced Research Institute on Artificial Particle Beams Utilized in Space Plasma Studies."
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-20.1",
    "location": "Ann Arbor, Mich.",
    "date": "20-27 May 1981",
    "meeting": "Workshop on High Intensity Polarized Proton Ion Sources"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-22.1",
    "location": "Hamburg, Germany",
    "date": "22-27 Mar 1982",
    "meeting": "Workshop on Polarized Electron Acceleration and Storage"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-22",
    "location": "Lake Tahoe, California",
    "date": "22-27 Jun 1983",
    "meeting": "XIVth International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-05.1",
    "location": "Trieste, Italy",
    "date": "5-10 Sep 1983",
    "meeting": "XII International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C71-02-15",
    "location": "Karpacz, Poland",
    "date": "15 - 27 Feb 1971",
    "meeting": "8th Winter School of Theoretical Physics - New Developments in Relativistic Quantum Field Theory and its Application"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C70-02-17",
    "location": "Karpacz, Poland",
    "date": "1970",
    "meeting": "7th Winter School of Theoretical Physics - Liquid Helium and Many-Body Problems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C68-02-17",
    "location": "Karpacz, Poland",
    "date": "17 Feb - 2 Mar, 1968",
    "meeting": "5th Winter School of Theoretical Physics - Axiomatic Approach to Quantum Field Theory and Many-Body Problem"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C67-02-17",
    "location": "Karpacz, Poland",
    "date": "17 Feb - 2 Mar, 1967",
    "meeting": "4th Winter School of Theoretical Physics - Functional Methods in Quantum Field Theory and Statistical Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-06",
    "location": "Montreal, Quebec, Canada",
    "date": "May 6-7, 1982",
    "meeting": "4th Annual MRST (Montreal-Rochester-Syracuse-Toronto) High Energy Theory Meeting"
  }, {
    "meeting": "Montreal Rochester Syracuse Toronto 82"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-03",
    "location": "Pisa, Italy",
    "date": "3-7 Jun 1983",
    "meeting": "2nd Pisa Meeting on Advanced Detectors: Frontier Detectors for Frontier Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-31",
    "location": "Edinburgh, Scotland",
    "date": "31 Jul - 20 Aug 1983",
    "meeting": "The Scottish Universities Summer School in Physics: Statistical and Particle Physics, Common Problems and Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-02",
    "location": "Albuquerque, New Mexico",
    "date": "2-6 May 1983",
    "meeting": "29th International Instrumentation Symposium: Instrumentation for the Information Age"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-26.1",
    "location": "Upton, New York",
    "date": "26-29 Sep 1983",
    "meeting": "QUARK MATTER 1983: Third International Conference on Ultra Relativistic Nucleus-Nucleus Collisions"
  }, {
    "meeting": "Nucleus 3rd"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-00",
    "location": "Copenhagen, Denmark",
    "date": "May-Sep 1983",
    "meeting": "Nordita Workshop on Chaos"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-31",
    "location": "Los Angeles, California",
    "date": "31 May - 3 Jun 1983",
    "meeting": "1983 International Symposium on Electron, Ion & Photon Beams"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-25",
    "location": "Edinburgh, Scotland",
    "date": "25-29 Jul 1983",
    "meeting": "15th IUPAP International Conference on Thermodynamics and Statistical Mechanics"
  }, {
    "meeting": "International Union of Pure and Applied Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-14",
    "location": "Karpacz, Poland",
    "date": "14-26 Feb 1983",
    "meeting": "19th Winter School and Workshop on Theoretical Physics: Supersymmetry and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-03",
    "location": "Erice, Italy",
    "date": "3-14 Aug 1983",
    "meeting": "International School of Subnuclear Physics: How Far We Are from the Gauge Forces"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-05",
    "location": "Balatonfured, Hungary",
    "date": "5-11 Jun 1983",
    "meeting": "6th International Balaton Meeting: High-Energy Heavy Ion and Hadron- Nucleus Collisions"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-31",
    "location": "Como, Italy",
    "date": "31 Aug - 2 Sep 1983",
    "meeting": "3rd International Conference on Physics in Collision: High Energy ee/ep/pp Interactions"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-05.4",
    "location": "Marseille, France",
    "date": "5-9 Sep 1983",
    "meeting": "15th Summer School in Particle Physics"
  }, {
    "meeting": "GIF 83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-05.3",
    "location": "Munich, Germany",
    "date": "5-16 Sep 1983",
    "meeting": "NATO Advanced Study Institute: Quarks, Leptons and Beyond"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-10",
    "location": "Princeton, New Jersey",
    "date": "10-17 Nov 1982",
    "meeting": "International Workshop on Bismuth Germanate (BGO)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-11",
    "location": "Toledo, Spain",
    "date": "11-16 Apr 1983",
    "meeting": "XIth International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-13",
    "location": "Chania, Greece",
    "date": "13-28 Aug 1983",
    "meeting": "2nd Workshop on Nonlinear Evolution Equations and Dynamical Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-15.2",
    "location": "Los Alamos, N.Mex.",
    "date": "15-18 Mar 1982",
    "meeting": "Workshop on Muon Science and Facilities at Los Alamos"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-22.1",
    "location": "Bloomington, Indiana",
    "date": "22-24 Oct 1981",
    "meeting": "Workshop on Pion Production and Absorption in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.2",
    "location": "Orlando, Florida",
    "date": "16-18 May 1983",
    "meeting": "33rd Electronic Components Conference (ECC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-01",
    "location": "Boston, Mass.",
    "date": "1-3 Jun 1983",
    "meeting": "International Microwave Symposium and Workshops"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-13",
    "location": "Stockholm, Sweden",
    "date": "13-16 Jun 1983",
    "meeting": "10th International Symposium on Computer Architecture"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-18.1",
    "location": "Gatlinburg, Tennessee",
    "date": "18-21 Jul 1983",
    "meeting": "Nuclear and Space Radiation Effects Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-26.2",
    "location": "Toronto, Ontario, Canada",
    "date": "26-28 Sep 1983",
    "meeting": "Electrical and Electronics Conference and Exposition (IEEC & E)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-19",
    "location": "San Francisco, California",
    "date": "19-21 Oct 1983",
    "meeting": "IEEE 1983 Nuclear Science Symposium (NSS) and Nuclear Power Systems Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-08.1",
    "location": "Pittsburgh, Pennsylvania",
    "date": "8-11 Nov 1983",
    "meeting": "29th Magnetism and Magnetic Materials Conference (MMM)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-08",
    "location": "San Francisco, California",
    "date": "8-10 Nov 1983",
    "meeting": "Western Electronic Show & Convention (WESCON)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-18",
    "location": "San Francisco, California",
    "date": "18-20 Mar 1983",
    "meeting": "8th West Coast Computer Faire"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-09",
    "location": "Amsterdam, Netherlands",
    "date": "9-11 Jun 1983",
    "meeting": "Workshop on Experimentation at HERA"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-19",
    "location": "Leipzig, Germany",
    "date": "19-25 Jul 1984",
    "meeting": "22nd International Conference on High-Energy Physics"
  }, {
    "meeting": "Rochester"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-28",
    "location": "Berkeley, California",
    "date": "28 Feb - 4 Mar 1983",
    "meeting": "DPF Workshop on Collider Detectors: Present Capabilities and Future Possibilities"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-27",
    "location": "Hamburg, Germany",
    "date": "27-29 Sep 1983",
    "meeting": "1983 DESY Workshop on Hadron and Jet Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-27.2",
    "location": "Girona, Spain",
    "date": "27 Jun - 1 Jul 1983",
    "meeting": "XIVth GIFT International Seminar on Theoretical Physics: Relativistic Astrophysics and Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-11",
    "location": "Erice, Italy",
    "date": "11-21 May 1983",
    "meeting": "Advanced School of Astronomy: Stellar Nucleosynthisis"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-16.3",
    "location": "Eindhoven, Netherlands",
    "date": "16-19 Sep 1980",
    "meeting": "9th International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-01",
    "location": "Erice, Italy",
    "date": "1-7 Oct 1983",
    "meeting": "Induced Gravitation Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-05.1",
    "location": "Bielefeld, Germany",
    "date": "5-14 May 1980",
    "meeting": "Workshop on Electron - Atom and Molecule Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-14",
    "location": "Moscow, USSR",
    "date": "12-14 April 1981",
    "meeting": "4th International Conference on Collective Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-21",
    "location": "Rio de Janeiro, Brazil",
    "date": "21-25 Jul 1983",
    "meeting": "2nd Pan American Symposium on Perspectives for Pan American Collaboration in Experimental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-07",
    "location": "Tucson, Ariz.",
    "date": "7-9 Nov 1983",
    "meeting": "24th Annual IEEE Symposium on Foundations of Computer SCience"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-18.2",
    "location": "Los Alamos, N.Mex.",
    "date": "18-29 Jul 1983",
    "meeting": "3rd LAMPF II Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-06",
    "location": "Dubrovnik, Yugoslavia",
    "date": "6-16 Jun 1983",
    "meeting": "4th Adriatic Meeting on Particle Physics: Frontiers in Particle Physics '83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-08",
    "location": "Upton, New York",
    "date": "8-9 Apr 1983",
    "meeting": "HEDG/BNL Information Meeting on the Status of the BNL Colliding Beam Accelerator Studies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-08.1",
    "location": "Andover, New Hampshire",
    "date": "8-12 Aug 1983",
    "meeting": "Gordon Conference on Elementary Particle Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-06",
    "location": "Ann Arbor, Mich.",
    "date": "6-9 Oct 1983",
    "meeting": "Monopole '83"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-23",
    "location": "Vancouver, British Columbia, Canada",
    "date": "23-25 Jun 1983",
    "meeting": "Time Projection Workshop"
  }]
}, {
  "meeting_name": [{
    "date": "4-10 Sep 1983",
    "coference_code": "C83-09-04",
    "meeting": "9th International Workshop on Weak Interactions and Neutrinos",
    "location": "Talloires, France"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-07",
    "location": "Enschede, Netherlands",
    "date": "7-9 Jun 1983",
    "meeting": "Dynamics Days Twente"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-05.1",
    "location": "Tabor, Czechoslovakia",
    "date": "5-18 Jun 1983",
    "meeting": "1983 JINR-CERN School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-10",
    "location": "Racine, Wis.",
    "date": "10-12 Nov 1983",
    "meeting": "Fifty Years of Weak Interactions: From the Fermi Theory to the W. Perspectives for the Future (POSTPONED UNTIL MAY 29 1984 SEE C84/05/29)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-19",
    "location": "Florence, Italy",
    "date": "19-28 Aug 1983",
    "meeting": "International School of Intermediate Energy Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-28.2",
    "location": "Granada, Spain",
    "date": "28 Sep - 3 Oct, 1981",
    "meeting": "4th Topical School on Interacting Bosons in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-06-02.1",
    "location": "Budapest, Hungary",
    "date": "2-14 Jun 1980",
    "meeting": "Symposium 5 on Theoretical Problems in High-Energy Astrophysics and Meeting of COSPAR Interdisciplinary Scientific Commission E"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-31",
    "location": "Copenhagen, Denmark",
    "date": "31 Oct - 4 Nov 1983",
    "meeting": "Workshop on Monopoles, GUTS and the Early Universe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-24",
    "location": "Saitama, Japan",
    "date": "24-26 Nov 1982",
    "meeting": "4th All - Japan Symposium on Accelerator Science and Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C73-01-22.1",
    "location": "Providence, Rhode Island",
    "date": "22-26 Jan 1973",
    "meeting": "International Centennial Boltzmann Seminar on Transportation Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.4",
    "location": "Berkeley, California",
    "date": "16-19 May 1983",
    "meeting": "3rd Biennial Conference on Real-Time Computer Applications in Nuclear and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-06.1",
    "location": "Upton, New York",
    "date": "6-16 Jul 1983",
    "meeting": "3rd Summer School on High-Energy Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-12",
    "location": "San Francisco, California",
    "date": "12-16 Dec 1983",
    "meeting": "6th International Conference on Lasers and Applications: Lasers '83"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-27",
    "location": "Boulder, Colo.",
    "date": "27 May - 8 Jun 1983",
    "meeting": "NATO Advanced Study Institute on Quantum Electrodynamics and Quantum Optics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-04",
    "location": "Bari, Italy",
    "date": "4-7 May 1983",
    "meeting": "Open Questions in Quantum Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-05.1",
    "location": "New York, New York",
    "date": "5-8 Apr 1983",
    "meeting": "A New York Academy of Sciences Science Week Symposium: Computer Culture: The Scientific, Intellectual and Social Impact of the Computer"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-16",
    "location": "Houston, Texas",
    "date": "16-18 Mar 1983",
    "meeting": "15th Symposium on the Interface of Computer Science and Statistics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-29",
    "location": "Zakopane, Poland",
    "date": "29 May - 11 Jun 1983",
    "meeting": "XXIII Cracow School of Theoretical Physics: Fundamental Interactions and Structure of Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-01.3",
    "location": "Liblice, Czechoslovakia",
    "date": "1-4 Jun 1981",
    "meeting": "Symposium on Mesons and Light Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-11",
    "location": "Whitehorse, Yukon, Canada",
    "date": "11-26 Aug 1984",
    "meeting": "Yukon Advanced Study Institute: Quarks and the Structure of Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-08.1",
    "location": "Los Alamos, N.Mex.",
    "date": "8-12 Feb 1982",
    "meeting": "Workshop on LAMPF II Synchrotron"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-29",
    "location": "Abingdon, England",
    "date": "29-30 Jul 1982",
    "meeting": "Symposium on New Techniques in X-ray and XUV Optics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-09",
    "location": "Montpellier, France",
    "date": "9-10 Dec 1982",
    "meeting": "Seminar on Gamma-Gamma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-01",
    "location": "Trieste, Italy",
    "date": "1 Nov 1983 - Spring 1984",
    "meeting": "International School for Advanced Studies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-06.1",
    "location": "Trieste, Italy",
    "date": "6-8 Jun 1983",
    "meeting": "Topical Conference on Radiative Corrections in SU(2)-L x U(1)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-02",
    "location": "Cambridge, Mass.",
    "date": "2-7 Aug 1983",
    "meeting": "First Workshop on Hadronic Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-02.1",
    "location": "Cambridge, Massachusetts",
    "date": "2-7 Aug 1983",
    "meeting": "5th Workshop on Lie-Admissible Formulations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-18.1",
    "location": "Dubna, USSR",
    "date": "18-20 May 1982",
    "meeting": "3rd Symposium on Problems of Collective Methods of Acceleration"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-06-08",
    "location": "Dubna, USSR",
    "date": "8-18 Jun 1982",
    "meeting": "4th International School on Neutron Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-04-15",
    "location": "Oxford, England",
    "date": "15-19 Apr 1980",
    "meeting": "Oxford Conference on Quantum Gravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-23",
    "location": "Islamabad, Pakistan",
    "date": "23 Jul - 11 Aug 1983",
    "meeting": "8th International Summer College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-13.1",
    "location": "Bad Honnef, Germany",
    "date": "13-16 Jun 1983",
    "meeting": "Quarks and Nuclear Structure"
  }, {
    "meeting": "3rd Klaus Erkelenz Symposium: Quarks and Nuclear Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-21.2",
    "location": "Bad Honnef, Germany",
    "date": "21-23 Jun 1983",
    "meeting": "7th Johns Hopkins Workshop on Current Problems in High-Energy Particle Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-28",
    "location": "Berkeley, California",
    "date": "28 Jun - 1 Jul 1983",
    "meeting": "6th High-Energy Heavy Ion Study, 2nd Workshop on Anomalons"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-24",
    "location": "Bielefeld, Germany",
    "date": "24-25 Jul 1983",
    "meeting": "Collisions in Strong Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-17",
    "location": "Helsinki, Finland",
    "date": "17-21 Jun 1984",
    "meeting": "Quark Matter '84: 4th International Symposium on Ultra-Relativistic Nucleus-Nucleus Collisions"
  }, {
    "meeting": "nucleus fourth"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-25.1",
    "location": "Detroit, Mich.",
    "date": "25-29 Jul 1983",
    "meeting": "SIGGRAPH 83: 10th Annual Conference of Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-29",
    "location": "Como, Italy",
    "date": "29-30 Aug 1983",
    "meeting": "Workshop on Search for Heavy Flavors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-01.1",
    "location": "Shelter Island, New York",
    "date": "1-2 Jun 1983",
    "meeting": "Shelter Island II"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-28",
    "location": "Ithaca, New York",
    "date": "28 Mar - 2 Apr 1983",
    "meeting": "20 TeV Hadron Collider Technical Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-11",
    "location": "Vancouver, British Columbia, Canada",
    "date": "11-13 Jul 1983",
    "meeting": "Summer Computer Simulation Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-07-20.1",
    "location": "Turnhout, Belgium",
    "date": "Jul 20-31 1981",
    "meeting": "NATO Advanced Study Institute on Electron Correlations in Solids, Molecules and Atoms."
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-02.2",
    "location": "Mt. Sorak, Korea",
    "date": "2-7 Aug 1982",
    "meeting": "1st Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-29",
    "location": "Tokyo, Japan",
    "date": "29 Sep - 1 Oct 1983",
    "meeting": "High-Energy Photonuclear Effects"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-20.1",
    "location": "St. Feliu de Guixols, Spain",
    "date": "20-26 Sep 1983",
    "meeting": "1st International Meeting on the History of Scientific Ideas: Symmetries in Physics (1600-1980)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-28.1",
    "location": "Batavia, Illinois",
    "date": "28-29 Oct 1982",
    "meeting": "Gas Calorimeter Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-21",
    "location": "Geneva, Switzerland",
    "date": "21-25 Nov 1983",
    "meeting": "1st ESO-CERN Symposium: Large Scale Structure of the Universe, Cosmology and Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-05",
    "location": "Bern, Switzerland",
    "date": "5-8 Mar 1984",
    "meeting": "4th Topical Workshop on Proton-Antiproton Collider Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-21",
    "location": "College Park, Maryland",
    "date": "21-25 May 1984",
    "meeting": "13th International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-10",
    "location": "Trieste, Italy",
    "date": "10-14 Oct 1983",
    "meeting": "Workshop on Perspectives in Nuclear Physics at Intermediate Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-02",
    "location": "Batavia, Illinois",
    "date": "2-5 May 1984",
    "meeting": "Inner Space/ Outer Space: Conference on Physics at the Interface of Astrophysics / Cosmology and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-20",
    "location": "Schladming, Austria",
    "date": "20 Feb - 1 Mar 1984",
    "meeting": "23rd Internationale Universitatswochen fur Kernphysik: (International School of Particle Physics: Stochastic Methods and Computer Techniques in Quantum Dynamics)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-12",
    "location": "Providence, Rhode Island",
    "date": "12-14 Apr 1984",
    "meeting": "Fifth Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-18.2",
    "location": "Shimoda, Japan",
    "date": "18-22 Apr 1983",
    "meeting": "Yamada Conference on Muon Spin Rotation and Associated Problems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-09",
    "location": "Toronto, Ontario, Canada",
    "date": "9-10 May 1983",
    "meeting": "5th Annual MRST (Montreal-Rochester-Syracuse-Toronto) Meeting on High Energy Theory"
  }, {
    "meeting": "Montreal Rochester Syracuse Toronto 83"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-11",
    "location": "Geneva, Switzerland",
    "date": "11-21 Oct 1983",
    "meeting": "1983 CERN 1st Accelerator School: Antiprotons for Colliding Beam Facilities"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-28",
    "location": "Jerusalem, Israel",
    "date": "28 Dec 1983 - 6 Jan 1984",
    "meeting": "1st Jerusalem Winter School for Theoretical Physics: Intersection Between Elementary Particle Physics and Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-09",
    "location": "Aiguablava, Spain",
    "date": "9-22 Sep 1984",
    "meeting": "1984 CERN School of Computing"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-27",
    "location": "Stanford, California",
    "date": "27-28 Oct 1983",
    "meeting": "SSRL Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-30.2",
    "location": "Kazimierz, Poland",
    "date": "30 May - 3 Jun 1983",
    "meeting": "VIth Warsaw Symposium on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-02-28.2",
    "location": "Les Houches, France",
    "date": "28 Feb - 12 Mar 1983",
    "meeting": "Les Houches Winter School"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-15",
    "location": "La Plagne, France",
    "date": "15-21 Jan 1984",
    "meeting": "4th Moriond Workshop: Massive Neutrinos in Particle Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-26",
    "location": "La Plagne, France",
    "date": "26 Feb - 4 Mar 1984",
    "meeting": "1984 Rencontres de Moriond: Electroweak Interactions and Unified Theories (Leptonic Session)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-26.1",
    "location": "La Plagne, France",
    "date": "26 Feb - 4 Mar 1984",
    "meeting": "Rencontre de Moriond: Origin of High-Energy Cosmic Rays"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-04",
    "location": "La Plagne, France",
    "date": "4-10 Mar 1984",
    "meeting": "Rencontres de Moriond: New Particle Production at High-Energy (Hadronic Session)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-29.1",
    "location": "Altenberg, Germany",
    "date": "29 Aug - 3 Sep 1983",
    "meeting": "3rd International Conference on Recent Progress in Many-Body Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-04",
    "location": "Bielefeld, Germany",
    "date": "4-8 Jun 1984",
    "meeting": "International Symposium on Phase Transitions in the Very Early Universe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-25.2",
    "location": "Tokyo, Japan",
    "date": "25-27 Jul 1983",
    "meeting": "Nihon University Meeting on Current Topics in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-15",
    "location": "Erice, Italy",
    "date": "15-25 Nov 1983",
    "meeting": "International School of Radiation Damage and Protection"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-08",
    "location": "Erice, Italy",
    "date": "8-20 Apr 1984",
    "meeting": "International School of Nuclear Physics: Nuclear and Subnuclear Degrees of Freedom and Lepton Nucleus Scattering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-08.2",
    "location": "Jerusalem, Israel",
    "date": "8-12 Aug 1983",
    "meeting": "7th International Conference on Vacuum Ultraviolet Radiation Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-22",
    "location": "Bangalore, India",
    "date": "22 Aug - 3 Sep 1983",
    "meeting": "18th International Cosmic Ray Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-12",
    "location": "Upton, New York",
    "date": "12-14 Sep 1983",
    "meeting": "3rd National Conference on Synchrotron Radiation Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-12.1",
    "location": "San Francisco, California",
    "date": "12-14 Sep 1983",
    "meeting": "5th International Conference on High Power Particle Beams"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-18",
    "location": "Dubrovnik, Yugoslavia",
    "date": "18 Sep - 2 Oct 1983",
    "meeting": "International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-11.1",
    "location": "Lund, Sweden",
    "date": "11-16 Jun 1984",
    "meeting": "15th International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-30",
    "location": "Heidelberg, Germany",
    "date": "30 Jul - 3 Aug 1984",
    "meeting": "10th International Conference on Particles and Nuclei"
  }, {
    "meeting": "ICOHEPANS 1984"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-17",
    "location": "Lisbon, Portugal",
    "date": "17-21 Oct 1983",
    "meeting": "5th Autumn School of Physics: Field Theory and Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-11",
    "location": "Lofthus/Hardanger, Norway",
    "date": "11-24 Jun 1984",
    "meeting": "1984 CERN School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-23",
    "location": "Stanford, California",
    "date": "23 Jul - 3 Aug 1984",
    "meeting": "12th SLAC Summer Institute on Particle Physics: The Sixth Quark (Topical Conference the last 3 days) (SSI 84)"
  }, {
    "meeting": "PIEF - FEST"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-02",
    "location": "St.Croix, U.S. Virgin Islands",
    "date": "2-13 Aug 1984",
    "meeting": "3rd NATO Advanced Study Institute on Techniques and Concepts of High-Energy Physics"
  }, {
    "meeting": "ASI"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-02.1",
    "location": "Upton, New York",
    "date": "2-6 May 1983",
    "meeting": "Conference on Monte Carlo Methods and Future Computer Architectures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-04.3",
    "location": "Odense, Denmark",
    "date": "4-22 Aug 1980",
    "meeting": "NATO Study Institute on the Physics of Superionic Conductors and Electrode Materials"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-10",
    "location": "Salt Lake City, Utah",
    "date": "10-14 Jan 1983",
    "meeting": "Cosmic Ray Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-20.1",
    "location": "Santa Barbara, California",
    "date": "20 Jun - 7 Jul 1983",
    "meeting": "Workshop on Theoretical Aspects of Gauge Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-04.3",
    "location": "Groningen, Netherlands",
    "date": "4-8 Jul 1983",
    "meeting": "6th International Conference on Hyperfine Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-21.4",
    "location": "Georgenthal, Germany",
    "date": "21-25 Mar 1983",
    "meeting": "14th Spring Symposium on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-25",
    "location": "London, England",
    "date": "25-26 May 1983",
    "meeting": "Royal Society Meeting for Discussion on the Fundamental Constants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-25",
    "location": "Tsukuba, Japan",
    "date": "25-27 Jan 1983",
    "meeting": "Workshop on Grand Unified Theories and the Early Universe"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-06.2",
    "location": "Rome, Italy",
    "date": "6-11 Sep 1983",
    "meeting": "Workshop on Quantum Probabilities and Applications to the Quantum Theory of Irreversible Processes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-24",
    "location": "San Miniato, Italy",
    "date": "24-26 Mar 1983",
    "meeting": "Topical Seminar on New Perspectives and Methods for High-Energy Spin Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-21.1",
    "location": "Geneva, Switzerland",
    "date": "21-23 Apr 1983",
    "meeting": "CERN Supersymmetry Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-02",
    "location": "Tsukuba, Japan",
    "date": "2-4 Dec 1982",
    "meeting": "Meeting on New Detectors for High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-25",
    "location": "Fontevraud, France",
    "date": "25-29 Apr 1983",
    "meeting": "Troisieme Journees d'Etudes SATURNE"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-29",
    "location": "Batavia, Illinois",
    "date": "29-30 Apr 1983",
    "meeting": "Calorimeter Calibration Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-01",
    "location": "Bratislava, Czech",
    "date": "1-5 Nov 1982",
    "meeting": "Hadron Structure '82"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-08-24",
    "location": "Tsukuba, Japan",
    "date": "24-26 Aug 1982",
    "meeting": "7th Workshop Meeting on Linear Accelerators"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-10.3",
    "location": "Vancouver, British Columbia, Canada",
    "date": "10-21 Aug 1981",
    "meeting": "NATO Advanced Study Istitute on Relativistic Effects in Atoms, Molecules, and Solids."
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-02-19",
    "location": "Karpacz, Poland",
    "date": "19 Feb - 3 Mar, 1979",
    "meeting": "16th Karpacz Winter School of Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-04-16",
    "location": "Bombay, India",
    "date": "16-18 Apr 1979",
    "meeting": "Workshop on Heavy Ion Reactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-28.2",
    "location": "Ahrenshoop, Germany",
    "date": "28 Oct - 4 Nov, 1982",
    "meeting": "16th International Symposium on Special Topics in Gauge Field Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-26.3",
    "location": "Bloomington, Indiana",
    "date": "26-28 Sep 1983",
    "meeting": "Inaugural Symposium of the Indiana University Institute for Advanced Study: The Role of the Research University in a Changing Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-03-15",
    "location": "Les Arcs, France",
    "date": "9-21 Mar 1980",
    "meeting": "XVth Rencontre de Moriond: I: High-Energy Hadronic Interactions, II: Electroweak and Unified Theory Predictions"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C76-08-11.1",
    "location": "Stanford, California",
    "date": "11-13 Aug 1976",
    "meeting": "4th SLAC TOPICAL Conference on Particle Physics: Weak Interactions at High Energies & the Production of New Particles (follows SLAC Summer Institute)"
  }, {
    "meeting": "SSI 76"
  }]
}, {
  "meeting_name": [{
    "date": "19-21 Jul 1978",
    "coference_code": "C78-07-19",
    "meeting": "6th SLAC TOPICAL Conference: Weak Interactions - Present and Future (follows SLAC Summer Institute C78-07-10)",
    "location": "Stanford, California"
  }, {
    "meeting": "SSI 78"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C77-07-20",
    "location": "Stanford, California",
    "date": "20-22 Jul 1977",
    "meeting": "5th SLAC TOPICAL Conference on Particle Physics :Quark Spectroscopy and Hadron Dynamics (follows SLAC Summer Institute"
  }, {
    "meeting": "SSI 77"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-18",
    "location": "Stanford, California",
    "date": "18-20 Jul 1979",
    "meeting": "7th SLAC TOPICAL Conference on Particle Physics: Quantum Chromodynamics (follows SLAC Summer Institute"
  }, {
    "meeting": "SSI 79"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-08-06",
    "location": "Stanford, California",
    "date": "6-8 Aug 1980",
    "meeting": "8th SLAC TOPICAL Conference on Particle Physics: The Weak Interactions (follows SLAC Summer Institute)"
  }, {
    "meeting": "SSI 80"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-21",
    "location": "Les Arcs, France",
    "date": "15-27 Mar 1981",
    "meeting": "XVIth Rencontre de Moriond: I. Perturbative QCD & Electroweak Interactions, II. Low Q**2 Physics: Theory and Experiment"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-20",
    "location": "Les Arcs, France",
    "date": "14-26 Mar 1982",
    "meeting": "XVIIth Rencontre de Moriond on Elementary Particle Physics: I. Electroweak Interactions and Grand Unified Theories, II. Elementary Hadronic Processes and New Spectroscopy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-13.2",
    "location": "Osaka, Japan",
    "date": "13-14 Sep 1982",
    "meeting": "International Symposium on High Field Magnetism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-20.1",
    "location": "Karpacz, Poland",
    "date": "20 Feb - 3 Mar 1984",
    "meeting": "20th Winter School of Theoretical Physics: Phase Transitions in Disordered Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-09",
    "location": "Durham, England",
    "date": "9-13 Jul 1984",
    "meeting": "7th European Symposium on Antiproton Interactions: From LEAR to the Collider and Beyond"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-21",
    "location": "Toronto, Ontario, Canada",
    "date": "21-24 Jan 1985",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-25",
    "location": "Baltimore, Maryland",
    "date": "25-29 Mar 1985",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-24",
    "location": "Crystal City, Virginia",
    "date": "24-27 Apr 1985",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-19",
    "location": "Kyoto, Japan",
    "date": "19-24 Aug 1985",
    "meeting": "1985 International Symposium on Lepton and Photon Interactions at High Energies, 12th"
  }, {
    "meeting": "LP 85 12th"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-01",
    "location": "Les Houches, France",
    "date": "1 Aug - 7 Sep 1984",
    "meeting": "Summer School in Theoretical Physics, Session XLIII: Critical Phenomena, Random Systems, Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-08",
    "location": "Guanajuato, Mexico",
    "date": "8-11 May 1984",
    "meeting": "Symposium on Recent Developments in Computing, Processor and Software Research for High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-31",
    "location": "Santa Fe, New Mexico",
    "date": "31 Oct - 3 Nov 1984",
    "meeting": "1984 Meeting of the Division of Particles and Fields of the APS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-13",
    "location": "Kyoto, Japan",
    "date": "13-16 May 1981",
    "meeting": "RIMS Symposium on Non-Linear Integrable Systems - Classical Theory and Quantum Theory."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-05",
    "location": "Nashville, Tennessee",
    "date": "5-7 Apr 1984",
    "meeting": "6th International Conference on High-Energy Physics at Vanderbilt: 2nd Symposium on e+ e- Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-22",
    "location": "Santa Cruz, California",
    "date": "22-24 Aug 1984",
    "meeting": "Physics in Collision IV"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-05.1",
    "location": "Argonne, Illinois",
    "date": "5-7 Apr 1984",
    "meeting": "ANL Workshop on Gauge Theories on a Lattice: 1984"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-06.2",
    "location": "Motril, Spain",
    "date": "6-11 Sep 1982",
    "meeting": "5th Topical School on Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-29.2",
    "location": "Florence, Italy",
    "date": "29 Aug - 3 Sep 1983",
    "meeting": "International Conference on Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-02.1",
    "location": "Montpellier, France",
    "date": "2-5 Dec 1982",
    "meeting": "R.C.P. 264: Problemes Inverses"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-12",
    "location": "St. Andrews, Scotland",
    "date": "12 Aug - 1 Sep 1984",
    "meeting": "27th Scottish Universities Summer School in Physics: Fundamental Forces (a NATO ASI)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-29",
    "location": "Racine, Wis.",
    "date": "29 May - 1 Jun 1984",
    "meeting": "Fifty Years of Weak Interactions: From the Fermi Theory to the W. Perspectives for the Future"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-24.3",
    "location": "Bombay, India",
    "date": "24-28 May 1982",
    "meeting": "2nd Indo-US Symposium on Nuclear Physics at Cyclotron and Intermediate Energy."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-14.1",
    "location": "Rabat, Morocco",
    "date": "14-25 Nov 1983",
    "meeting": "3rd Rencontre de Rabat: Session I - Grand Unification Theory, Supersymmetry-Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-28",
    "location": "Rabat, Morocco",
    "date": "28 Nov - 3 Dec 1983",
    "meeting": "3rd Rencontre de Rabat, Session 2: Phase Transitions-Spin Glass - Magnetic Systems"
  }]
}, {
  "meeting_name": [{
    "date": "13-17 Feb 1984",
    "coference_code": "C84-02-13",
    "meeting": "DPF Workshop on anti-p p Options for the Supercollider",
    "location": "Chicago, Illinois"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "ANTIPROTON"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-04",
    "location": "Trieste, Italy",
    "date": "4-14 Apr 1984",
    "meeting": "Spring School on Supergravity and Supersymmetry"
  }, {
    "meeting": "Trieste Spring School on Supergravity, Supersymmetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-12",
    "location": "Hamburg, Germany",
    "date": "12-16 Jul 1983",
    "meeting": "NATO Advanced Research Workshop: Mathematical Aspects of Superspace"
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-04.1",
    "location": "Acapulco, Mexico",
    "date": "4-10 Sep 1983",
    "meeting": "12th International Conference on Solid State Nuclear Track Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-25.1",
    "location": "Trieste, Italy",
    "date": "25-29 Jun 1984",
    "meeting": "The Eighth Trieste Conference on Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-12.1",
    "location": "Ann Arbor, Mich.",
    "date": "12-17 Dec 1983",
    "meeting": "SSC Workshop: Accelerator Physics Issues for a Superconducting Super Collider"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-18",
    "location": "Batavia, Illinois",
    "date": "18 Nov 1983",
    "meeting": "SSC Workshop: PSSC, Effects of Physics and Detector Issues on Machine Design"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-19",
    "location": "Upton, New York",
    "date": "19 Dec 1983",
    "meeting": "SSC Workshop: PSSC, Effects of Physics and Detector Issues on Machine Design"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-28.3",
    "location": "Bloomington, Indiana",
    "date": "28-30 Oct 1982",
    "meeting": "Workshop on the Interactions between Medium Energy Nucleons in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-30",
    "location": "Bogota, Columbia",
    "date": "30 Mar - 7 Apr, 1982",
    "meeting": "Workshop on the Search of Gravitational Waves"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-12-05.1",
    "location": "Venice, Italy",
    "date": "5-8 Dec, 1978",
    "meeting": "2nd International Conference on Energy Storage, Compression and Switching"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-05",
    "location": "Tucson, Ariz.",
    "date": "5-8 Dec 1983",
    "meeting": "The Physics of the 21st Century"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-04.1",
    "location": "Berkeley, California",
    "date": "4-22 Jun 1984",
    "meeting": "SSC Workshop: Theoretical SSC Workshop at LBL"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "Workshop on Electroweak Symmetry Breaking"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-06",
    "location": "Montana, Switzerland",
    "date": "6-12 Mar 1983",
    "meeting": "25th AVCP Course: The Foundations of Quantum Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-05",
    "location": "Stanford, California",
    "date": "5-7 Aug 1981",
    "meeting": "9th SLAC Topical Conference on Particle Physics: The Strong Interactions (Follows SLAC Summer Institute)"
  }, {
    "meeting": "SSI 81"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-27",
    "location": "Stanford, California",
    "date": "27-29 Jul 1983",
    "meeting": "11th SLAC TOPICAL Conference on Particle Physics: Dynamics and Spectroscopy at High Energy (Follows SLAC Summer Inst.)"
  }, {
    "meeting": "SSI 83"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-23.1",
    "location": "Minneapolis, Minnesota",
    "date": "23-27 Jul 1984",
    "meeting": "SIGGRAPH 84: 11th Annual Conference on Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-23",
    "location": "Snowmass, Colo.",
    "date": "23 Jun - 13 Jul 1984",
    "meeting": "1984 DPF Summer Study on the Design and Utilization of the Superconducting Super Collider (SSC) (Snowmass 84)"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-26",
    "location": "The Woodlands, Texas",
    "date": "26-30 Jan 1984",
    "meeting": "SSC Workshop: Superconducting Super Collider Fixed Target Physics"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-31",
    "location": "Erice, Italy",
    "date": "31 Mar - 6 Apr 1984",
    "meeting": "International School of Physics of Exotic Atoms: Fundamental Interactions in Low-energy Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-12",
    "location": "Marseille, France",
    "date": "12-19 Sep 1984",
    "meeting": "6th International Symposium on High-Energy Spin Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-04.2",
    "location": "Ann Arbor, Mich.",
    "date": "4-29 Jun 1984",
    "meeting": "Theoretical Advanced Study Institute in Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-23",
    "location": "Santa Barbara, California",
    "date": "23-26 Jan 1984",
    "meeting": "Physics Beyond 100 GeV"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-20",
    "location": "Santa Barbara, California",
    "date": "20-24 Aug 1984",
    "meeting": "Role of Integrable Models in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-16",
    "location": "Aspen, Colo",
    "date": "16 Jul - 10 Aug 1984",
    "meeting": "Aspen Workshop on New Trends in QFT, Including Higher Dimensions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-13",
    "location": "Aspen, Colo.",
    "date": "13-31 Aug 1984",
    "meeting": "Aspen Workshop on Glueballs and Lattice QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-16",
    "location": "Salt Lake City, Utah",
    "date": "16-18 Jan 1984",
    "meeting": "11th Annual ACM SIGACT SIGPLAN Symposium on Principles of Programming Languages"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-29.2",
    "location": "Marseille, France",
    "date": "29 Jun - 4 Jul 1981",
    "meeting": "International Workshop on Stochastic Processes in Quantum Theory and Statistical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-18.1",
    "location": "Kamioka, Japan",
    "date": "18-20 Oct 1982",
    "meeting": "Workshop on Monopoles and Proton Decay"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-24.1",
    "location": "Tsukuba, Japan",
    "date": "24 Mar 1983",
    "meeting": "7th Workshop on the Mass of the Electron Neutrino"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C78-08-21.2",
    "location": "Mexico City, Mexico",
    "date": "21-25 Aug 1978",
    "meeting": "3rd Latin American Symposium on Relativity and Gravitation. SILARG III."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-16.1",
    "location": "Bad Windsheim, Germany",
    "date": "16-29 Aug 1981",
    "meeting": "Nato Advanced Study Institute on Quantum Optics and Experimental General Relativity"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.3",
    "location": "Osaka, Japan",
    "date": "16-20 May 1983",
    "meeting": "RCNP International Symposium on Light Ion Reaction Mechanism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-04.3",
    "location": "Gerona, Spain",
    "date": "4-11 Jun 1984",
    "meeting": "XV GIFT Seminar on Supersymmetry and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-02-16",
    "location": "Asilomar, California",
    "date": "16-19 Feb 1982",
    "meeting": "6th Berkeley Workshop on Distributed Data Management and Computer Networks"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-01",
    "location": "Erice, Italy",
    "date": "1-6 Apr 1984",
    "meeting": "Workshop on Quark and Lepton Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-22",
    "location": "Colorado Springs, Colorado",
    "date": "22-25 Jul 1984",
    "meeting": "1984 IEEE 21st Annual Conference on Nuclear and Space Radiation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-10-19.2",
    "location": "Protvino, USSR",
    "date": "19-23 Oct 1981",
    "meeting": "3rd InternationaL Workshop for Superconducting Magnets"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-07",
    "location": "Geneva, Switzerland",
    "date": "7-9 Dec 1983",
    "meeting": "ECFA - CERN Workshop on Hadron Collider in LEP"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-02",
    "location": "Cargese, France",
    "date": "2-15 Sep 1984",
    "meeting": "NATO Advanced Study Institute: Heavy Ion Collisions: From Nuclear Collective Motion to Quarks"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-11.2",
    "location": "Dortmund, Germany",
    "date": "11-16 Jun 1984",
    "meeting": "11th International Conference on Neutrino Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-05-05.2",
    "location": "Aubiere, France",
    "date": "5-6 May 1981",
    "meeting": "Seminar on Gamma Gamma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-00-00",
    "location": "Leningrad, USSR",
    "date": "1981",
    "meeting": "16th Leningrad Winter School in High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-00-00",
    "location": "Leningrad, USSR",
    "date": "1983",
    "meeting": "18th Leningrad Winter School in High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-09-13",
    "location": "Chilton, England",
    "date": "13-26 Sep 1981",
    "meeting": "Rutherford School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-12.3",
    "location": "Chilton, England",
    "date": "12-25 Sep 1982",
    "meeting": "Rutherford School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-09-19",
    "location": "Tsukuba, Japan",
    "date": "19-20 Sep 1980",
    "meeting": "2nd Workshop on Two Nucleon Systems"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-11-28.1",
    "location": "Zvenigorod, USSR",
    "date": "28-30 Nov 1979",
    "meeting": "International Seminar on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-27.1",
    "location": "Tsukuba, Japan",
    "date": "27 Mar 1982",
    "meeting": "Workshop on the Mass of the Electron Neutrino"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-17",
    "location": "Upton, New York",
    "date": "17-19 Jan 1984",
    "meeting": "SSC Workshop on Cryogenics"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-28",
    "location": "Oxford, England",
    "date": "28-31 Aug 1984",
    "meeting": "Vector and Parallel Processors in Computational Science II"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-16",
    "location": "Stanford, California",
    "date": "16 Mar 1984",
    "meeting": "PSSC Meeting at SLAC"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-10",
    "location": "Lake Tahoe, California",
    "date": "10-13 Sep 1984",
    "meeting": "6th International Conference on Photon-Photon Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-07",
    "location": "Darmstadt, Germany",
    "date": "7-11 May 1984",
    "meeting": "12th International Linear Accelerator Conference (LINAC 84)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-01.1",
    "location": "Como, Italy",
    "date": "1-3 Aug 1984",
    "meeting": "Second Workshop on Hadronic Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-15",
    "location": "Los Alamos, New Mexico",
    "date": "15-20 Dec 1983",
    "meeting": "Workshop on Supersymmetry in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-10",
    "location": "Hamburg, Germany",
    "date": "10-13 Apr 1984",
    "meeting": "22nd International Magnetics Conference (INTERMAG 84)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-26.3",
    "location": "Rio de Janiero, Brazil",
    "date": "26-29 Jul 1982",
    "meeting": "Workshops on Cosmic Ray Interactions and High-Energy Results"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-07-19.1",
    "location": "La Paz, Bolivia",
    "date": "19-23 Jul 1982",
    "meeting": "Workshops on Cosmic Ray Interactions and High-Energy Results"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-03",
    "location": "La Jolla, California",
    "date": "3-5 Jan 1984",
    "meeting": "Dynamics Days La Jolla: Workshop on Nonlinear Dynamics and Chaotic Behavior"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-02",
    "location": "Bielefeld, Germany",
    "date": "2-4 Apr 1984",
    "meeting": "Teilchenphysik: Joint Spring Meeting of Elementary Particle Physics Sections of Belgian, German & Dutch Physical Societies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-21",
    "location": "Erice, Italy",
    "date": "21-26 Oct 1984",
    "meeting": "Workshop on Lepton Pair Production"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-18",
    "location": "Bari, Italy",
    "date": "18-24 Jul 1985",
    "meeting": "International Europhysics Conference on High-Energy Physics"
  }, {
    "meeting": "EPS"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-7",
    "location": "Trieste, Italy",
    "date": "7 Feb - 30 Mar 1984",
    "meeting": "Winter College on Fundamental Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-05",
    "location": "Erice, Italy",
    "date": "5-15 Aug 1984",
    "meeting": "International School of Subnuclear Physics: Quarks, Leptons and their Constituents"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-04",
    "location": "Erice, Italy",
    "date": "4-15 Nov 1984",
    "meeting": "International School of Cosmic Ray Astrophysics: Cosmic Radiation in Contemporary Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-10",
    "location": "Erice, Italy",
    "date": "10-22 Apr 1985",
    "meeting": "International School of Nuclear Physics: Nucleus-Nucleus Collisions from the Coulomb Barrier up to the Quark Gluon Plasma"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-15",
    "location": "Novosibirsk, USSR",
    "date": "15-21 Mar 1984",
    "meeting": "3rd International Conference on Instrumentation for Colliding Beam Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-02",
    "location": "Lewes, Del.",
    "date": "2 Jun - 27 Jul 1984",
    "meeting": "Lewes Center for Physics: An East Coast Summer Physics Center"
  }, {
    "meeting": "Workshop on Solitons in Nuclear and Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-09.1",
    "location": "Protvino, USSR",
    "date": "9-15 Jul 1984",
    "meeting": "VII Workshop on High-Energy Physics and Field Theory (Working language Russian)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-13.1",
    "location": "Bogota, Colombia",
    "date": "13-24 Feb 1984",
    "meeting": "1st Equatorial School of Relativistic Astrophysics on Galactic Structures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-03",
    "location": "Fort Collins, Colo",
    "date": "3-6 Jun 1985",
    "meeting": "COMPUMAG: Conference on the Computation of Electromagnetic Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-28",
    "location": "Miami Beach, Florida",
    "date": "28 -30 Mar 1984",
    "meeting": "6th Annual Conference on Computer Graphics: Computer Graphics '84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-11.2",
    "location": "Chalk River, Canada",
    "date": "11-16 Aug 1983",
    "meeting": "Workshop on Kaluza - Klein Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-04.1",
    "location": "Erice, Italy",
    "date": "4-12 Mar 1984",
    "meeting": "Europhysics Topical Conference: Flavor Mixing in Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-28",
    "location": "Erice, Italy",
    "date": "28 May - 4 Jun 1984",
    "meeting": "International Workshop on Data Analysis in Astronomy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-06",
    "location": "Greenbelt, Maryland",
    "date": "6-8 Jan 1983",
    "meeting": "Workshop on Positron - Electron Pairs in Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-20",
    "location": "Baltimore, Maryland",
    "date": "20-22 Jun 1984",
    "meeting": "8th Johns Hopkins Workshop on Current Problems in Particles and Gravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-14",
    "location": "Islamabad, Pakistan",
    "date": "14-30 Jul 1984",
    "meeting": "9th International Summer College on Physics and Contemporary Needs"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-09.2",
    "location": "Trieste, Italy",
    "date": "9-13 Jul 1984",
    "meeting": "International Course on Data Handling in Astronomy and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-29",
    "location": "Irvine, California",
    "date": "29 Nov - 1 Dec 1984",
    "meeting": "Workshop on Composite Models in Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-29",
    "location": "Batavia, Illinois",
    "date": "29-30 Apr 1984",
    "meeting": "Physics at the Superconducting Super Collider Committee Meeting"
  }, {}, {
    "meeting": "SSC"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-27",
    "location": "Batavia, Illinois",
    "date": "27-28 Apr 1984",
    "meeting": "Fermilab Annual Users' Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-14",
    "location": "Paris, France",
    "date": "14-18 May 1984",
    "meeting": "International Meeting on Theoretical Approaches to Heavy Ion Reaction Mechanisms"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-11.1",
    "location": "Devon, Canada",
    "date": "11-13 Jul 1983",
    "meeting": "University of Alberta/TRIUMF Workshop: Studying Nuclei with Medium Energy Protons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-14.1",
    "location": "Alushta, USSR",
    "date": "14-21 April 1983",
    "meeting": "International School - Seminar on Heavy Ion Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-12",
    "location": "Beijing, China",
    "date": "12-21 Jun 1984",
    "meeting": "First Workshop on Colliding Beam Physics in China"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26.1",
    "location": "Geneva, Switzerland",
    "date": "26-27 Mar 1984",
    "meeting": "CERN - ECFA Workshop on Feasibility of Hadron Colliders in the LEP Tunnel (2nd part of Lausanne mtg. of 3/21)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-21",
    "location": "Lausanne, Switzerland",
    "date": "21-24 Mar 1984",
    "meeting": "CERN - ECFA Workshop on Feasibility of Hadron Colliders in the LEP Tunnel (2nd part to be held in Geneva starting 3/26)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-20.1",
    "location": "Bonn, Germany",
    "date": "20-31 Aug 1984",
    "meeting": "1984 NATO ASI on Supersymmetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-09-07",
    "location": "Tokyo, Japan",
    "date": "7-11 Sep 1982",
    "meeting": "Topical Symposium on High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-13",
    "location": "Stanford, California",
    "date": "13-15 Mar 1984",
    "meeting": "PSSC Tracking Workshop: Tracking at the SSC"
  }, {
    "meeting": "SUPERCOLLIDER"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-16",
    "location": "Trieste, Italy",
    "date": "16-19 Apr 1984",
    "meeting": "Workshop on Supersymmetry, Supergravity and Kaluza - Klein Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-23",
    "location": "Steamboat Springs, Colorado",
    "date": "23-30 May, 1984",
    "meeting": "Conference on the Intersections Between Particle and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-29.1",
    "location": "Tarrytown, New York",
    "date": "29 May - 1 Jun 1984",
    "meeting": "1984 International Symposium on Electron, Ion and Photon Beams"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-25",
    "location": "Newport News, Virginia",
    "date": "25-29 Jun 1984",
    "meeting": "CEBAF 1984 Summer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-25",
    "location": "Hamburg, Germany",
    "date": "25-27 Sep 1984",
    "meeting": "1984 DESY Workshop: Electroweak Interactions and Particle Structure"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-16.1",
    "location": "Madison, Wisc.",
    "date": "16-18 Apr 1984",
    "meeting": "3rd DUMAND Signal Processing Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-30",
    "location": "San Francisco, California",
    "date": "30 May - 1 Jun 1984",
    "meeting": "International Microwave Symposium and Workshops"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-06",
    "location": "Zakopane, Poland",
    "date": "6-19 Jun 1984",
    "meeting": "24th Cracow School of Theoretical Physics: Structure of Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-20.2",
    "location": "Kosice, Czechoslovakia",
    "date": "20-25 Aug 1984",
    "meeting": "9th European Cosmic Ray Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-20.3",
    "location": "Shumen, Bulgaria",
    "date": "20-25 Aug 1984",
    "meeting": "XIII International Conference on Differential Geometric Methods in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-26.1",
    "location": "Varenna, Italy",
    "date": "26 Jun - 6 Jul 1984",
    "meeting": "International School of Physics Enrico Fermi: Elementary Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-20.4",
    "location": "Delft, Netherlands",
    "date": "20-24 Aug 1984",
    "meeting": "Conference on Precision Electromagnetic Measurements CPEM '84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-09",
    "location": "Boulder, Colo.",
    "date": "9-12 Oct 1984",
    "meeting": "37th Annual Gaseous Electronics Conference: GEC84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-29",
    "location": "Woodlands, Texas",
    "date": "29-30 Jan 1984",
    "meeting": "Meeting of the PSSC Steering Committee"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-22",
    "location": "San Francisco, California",
    "date": "22-25 Mar 1984",
    "meeting": "9th West Coast Computer Faire"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-31.1",
    "location": "Orlando, Florida",
    "date": "31 Oct - 2 Nov 1984",
    "meeting": "IEEE 1984 Nuclear Science Symposium (NSS) and Nuclear Power Systems Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-20",
    "location": "Albuquerque, New Mexico",
    "date": "20 May - 2 Jun 1984",
    "meeting": "Advanced Study Course on Foundations of Nonequilibrium Statistical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-03",
    "location": "Santa Fe, New Mexico",
    "date": "3-16 Jun 1984",
    "meeting": "NATO ASI: Frontiers of Nonequilibrium Statistical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-28",
    "location": "Philadelphia, Pennsylvania",
    "date": "28-19 Jan 1983",
    "meeting": "Workshop on Bosons in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-07.1",
    "location": "Ibaraki, Japan",
    "date": "7-10 Dec 1983",
    "meeting": "Workshop on Grand Unified Theories and Cosmology"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-07.1",
    "location": "Toulouse, France",
    "date": "7-11 Nov 1983",
    "meeting": "Workshop on Problems of Collapse and Numerical Relativity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-04",
    "location": "Park City, Utah",
    "date": "4-7 Jan 1984",
    "meeting": "International Colloquium on Baryon Nonconservation (ICOBAN '84)"
  }, {
    "meeting": "ICOBAN"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-14",
    "location": "Protvino, USSR",
    "date": "14-17 Sep 1983",
    "meeting": "Workshop on High-Energy Spin Physics"
  }, {
    "meeting": "International Workshop on Spin Phenomena in High Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-16.1",
    "location": "Cape Town, S.Africa",
    "date": "16-27 Jan 1984",
    "meeting": "3rd Advanced Course in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-03",
    "location": "Gif-sur-Yvette, France",
    "date": "3-14 Sep 1984",
    "meeting": "2nd CERN Accelerator School: General Accelerator Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-12.1",
    "location": "Tsukuba, Japan",
    "date": "12-13 Mar 1982",
    "meeting": "4th Meeting on Ultra High Vacuum Techniques for Accelerators and Storage Rings."
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-07",
    "location": "Tsukuba, Japan",
    "date": "7-9 Dec 1982",
    "meeting": "Meeting on Phenomenology of Gauge Theory"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C80-05-21",
    "location": "North Caucsus, USSR",
    "date": "21-23 May 1980",
    "meeting": "1st National Conference on Radiation Charged Particles in Crystals"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-21.1",
    "location": "Florence, Italy",
    "date": "21-25 May 1984",
    "meeting": "Topical Seminar on Perspectives for Experimental Apparatus at Future High Energy Machines"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-08-03.3",
    "location": "London, England",
    "date": "3-21 Aug 1981",
    "meeting": "Nuffield Workshop on Quantum Structure of Space and Time"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-10.1",
    "location": "Annecy-le-Vieux, France",
    "date": "10-12 Jan 1983",
    "meeting": "Annecy Meeting on Supersymmetry and Supergravity at LAPP"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-24",
    "location": "New York, New York",
    "date": "24-29 May 1984",
    "meeting": "AAAS Annual Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-13.1",
    "location": "Batavia, Illinois",
    "date": "13-24 Aug 1984",
    "meeting": "1984 U.S. Summer School on High-Energy Particle Accelerators"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-04.4",
    "location": "Capri, Italy",
    "date": "4-8 Jun 1984",
    "meeting": "2nd Capri Symposium: Electroweak Interactions and Further Developments in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-25.1",
    "location": "Frascati, Italy",
    "date": "25 Sep - 1 Oct 1984",
    "meeting": "Workshop on the Generation of High Fields for Particle Acceleration to Very High Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-16.1",
    "location": "Claremont, California",
    "date": "16 Mar 1983",
    "meeting": "Conference on Physics and the Ultimate Significance of Time"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-25",
    "location": "Cable, Wisconsin",
    "date": "25-27 Oct 1984",
    "meeting": "Telemark III Miniconference: Neutrino Mass and Low-energy Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-03.1",
    "location": "Bad Honnef, Germany",
    "date": "3-6 Sep 1984",
    "meeting": "4th Workshop on Polarized Target Materials and Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-03.2",
    "location": "Bad Honnef, Germany",
    "date": "3-6 Sep 1984",
    "meeting": "1st International Workshop on Local Equilibrium in Strong Interaction Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-25.3",
    "location": "Uxbridge, England",
    "date": "25-29 Jul 1983",
    "meeting": "Interference Microscopy Course"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-05",
    "location": "Enschede, Netherlands",
    "date": "5-7 Jun 1984",
    "meeting": "Dynamics Days - Twente: Workshop on Nonlinear Dynamics and Chaotic Behavior"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-10",
    "location": "Sitges, Spain",
    "date": "10-15 Jun 1984",
    "meeting": "8th Sitges Conference: Applications of Field Theory to Statistical Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-18",
    "location": "Zinal, Switzerland",
    "date": "18-22 Jun 1984",
    "meeting": "Workshop on Programme of CERN Online Mass Separator Facility ISOLDE-3"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-23.2",
    "location": "Trieste, Italy",
    "date": "23-27 Jul 1984",
    "meeting": "5th Trieste International Symposium on First Order Phase Transitions: Statistics and Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-24",
    "location": "Berlin, Germany",
    "date": "24-28 Sep 1984",
    "meeting": "11th International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-27",
    "location": "Bechyne, Czechoslovakia",
    "date": "27 May - 1 Jun 1985",
    "meeting": "European Symposium on Few Body Physics: Mesons and Light Nuclei III"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-03.1",
    "location": "Balatonfured, Hungary",
    "date": "3-7 Jun 1985",
    "meeting": "European Symposium on Dynamics of Few-Body Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-01",
    "location": "St. Andrews, Scotland",
    "date": "1-22 Sep 1984",
    "meeting": "5th UK Institute for Theoretical High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-03.3",
    "location": "Gif-sur-Yvette, France",
    "date": "3-7 Sep 1984",
    "meeting": "16th Gif Summer School on Particle Physics: Cosmology and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-27",
    "location": "San Diego, California",
    "date": "27-30 Nov 1984",
    "meeting": "30th Annual Conference on Magnetism and Magnetic Materials (MMM)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-10.1",
    "location": "Williamsburg, Virginia",
    "date": "10-12 Oct 1983",
    "meeting": "Spectrometer Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-17",
    "location": "Dubna, USSR",
    "date": "17-20 Nov 1981",
    "meeting": "International Symposium on Polarization Phenomena in High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-11-16",
    "location": "Erice, Italy",
    "date": "16-28 Nov 1981",
    "meeting": "Nato Advanced Study Institute on Quantum Metrology and Fundamental Physical Constants."
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-23",
    "location": "Dubna, USSR",
    "date": "23 Nov - 2 Dec 1982",
    "meeting": "15th International School on High-Energy Physics for Young Scientists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-17",
    "location": "Bombannes, France",
    "date": "17-21 Sep 1984",
    "meeting": "3rd Joliot-Curie School of Nuclear Physics: Meson, Baryons, Quarks and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-16",
    "location": "Kupari-Dubrovnik, Yugoslavia",
    "date": "16-30 Sep 1984",
    "meeting": "International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-04",
    "location": "Maria Laach, Germany",
    "date": "4-14 Sep 1984",
    "meeting": "Herbschule fur Hochenergiephysik (Autumn School of High-Energy Physics)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-06-25",
    "location": "Aarhus, Denmark",
    "date": "25-29 Jun 1979",
    "meeting": "4th International Conference on Ion Beam Analysis"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-15",
    "location": "San Francisco, California",
    "date": "15 Jun 1984",
    "meeting": "San Francisco State Symposium: Jacob Bronowski: A Retrospective"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-17.1",
    "location": "Argonne, Illinois",
    "date": "17-18 May 1984",
    "meeting": "Workshop on Polarized Targets in Storage Rings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-11",
    "location": "Chilton, England",
    "date": "11-14 Sep 1983",
    "meeting": "School for Young High-Energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-08",
    "location": "Tokyo, Japan",
    "date": "8-10 Mar 1984",
    "meeting": "Meeting on Physics of Antibaryons and Exotic Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-01",
    "location": "Tokyo, Japan",
    "date": "1-3 Dec 1983",
    "meeting": "5th INS Winter Seminar on Unified Theories for Elementary Particles and their Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-01",
    "location": "Dokka, Norway",
    "date": "1-15 Jan 1984",
    "meeting": "8th Nordic Meeting on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-09",
    "location": "Bielefeld, Germany",
    "date": "9-14 Apr 1984",
    "meeting": "Bielefeld Encounters in Physics and Mathematics IV: Resonances, Models and Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-14",
    "location": "Phoenix, Arizona",
    "date": "14-18 Apr 1986",
    "meeting": "International Magnetics Conference (INTERMAG 86)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-02-05",
    "location": "Pasco, Washington",
    "date": "5-9 Feb 1984",
    "meeting": "17th Mid year Topical Meeting of the Health Physics Society on Computer Applications in Health Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-29.1",
    "location": "Fuji-Yoshida, Japan",
    "date": "29 Jan - 2 Feb 1984",
    "meeting": "INS-Kikuchi Winter School on Accelerators for Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-26",
    "location": "Osaka, Japan",
    "date": "26-30 Aug 1985",
    "meeting": "6th International Symposium on Polarization Phenomena in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-26.1",
    "location": "San Francisco, California",
    "date": "26-30 Aug 1985",
    "meeting": "ICM '85: International Conference on Magnetism"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-26",
    "location": "Washington, DC",
    "date": "26-29 Jun 1984",
    "meeting": "Government Computer EXPO 84 Conference: Integrating Microcomputer Technologies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-29",
    "location": "Bad Honnef, Germany",
    "date": "29-31 Oct 1984",
    "meeting": "1984 Workshop on Electron and Photon Interactions at Intermediate Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-07.2",
    "location": "Los Alamos, New Mexico",
    "date": "7-8 Nov 1983",
    "meeting": "17th LAMPF Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-30.1",
    "location": "Albuquerque, New Mexico",
    "date": "30 May - 3 Jun 1983",
    "meeting": "Proceedings of the 2nd International Conference on Radiation Effects in Insulators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-13",
    "location": "Southhampton, England",
    "date": "13-15 July 1983",
    "meeting": "International Workshop on X - and Gamma - Ray Imaging Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-08",
    "location": "Austin, Texas",
    "date": "8-11 Nov 1982",
    "meeting": "18th Solvay Conference on Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-09.3",
    "location": "Las Vegas, Nev.",
    "date": "9-12 Jul 1984",
    "meeting": "1984 National Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-09.1",
    "location": "Palm Coast, Florida",
    "date": "9-11 Apr 1984",
    "meeting": "NATO Advanced Workshop on Chaos in Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-21",
    "location": "Alushta, USSR",
    "date": "21-24 Apr 1984",
    "meeting": "7th International Conference on Problems of Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-21.1",
    "location": "Ahrenshoop, Germany",
    "date": "21-26 Oct 1984",
    "meeting": "International Symposium on the Theory of Elementary Particles"
  }, {
    "meeting": "International Symposium on Special Topics in Gauge Field Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-09.1",
    "location": "Stockholm, Sweden",
    "date": "9-10 Oct 1984",
    "meeting": "Mini Symposium on UHV Systems in Connection with Particle Accelerators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-17.1",
    "location": "Erice, Italy",
    "date": "17-30 Sep 1984",
    "meeting": "International School of Mathematics 'G. Stampacchia' 3rd Course: Optimization and Related Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-18.3",
    "location": "Kangreung, Korea",
    "date": "18-23 July 1983",
    "meeting": "2nd Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-10",
    "location": "Geilo, Norway",
    "date": "10-21 April 1983",
    "meeting": "Nato Advanced Study Institute on Multicritical Phenomena"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-12-14.2",
    "location": "Mexico City, Mexico",
    "date": "14-18 December 1981",
    "meeting": "International School of Supersymmetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-10.2",
    "location": "Ahrenshoop, Germany",
    "date": "10-14 Oct 1983",
    "meeting": "17th International Symposium on Special Topics in Gauge Field Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-11-30.1",
    "location": "Paris, France",
    "date": "30 Nov - 3 Dec 1982",
    "meeting": "NATO Advanced Research Workshop on Monte Carlo Methods in Quantum Problems"
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-29.3",
    "location": "Tokyo, Japan",
    "date": "29-31 Aug 1983",
    "meeting": "International Symposium on Foundations of Quantum Mechanics in the Light of New Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-14.1",
    "location": "Amsterdam, Netherlands",
    "date": "14-15 Sep 1983",
    "meeting": "Muon Conference on Coincidence Reactions with the Electromagnetic Probe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-30",
    "location": "East Lansing, Mich.",
    "date": "30 Apr - 3 May 1984",
    "meeting": "10th International Conference on Cyclotrons and their Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-04",
    "location": "Vancouver, British Columbia, Canada",
    "date": "4-5 May 1984",
    "meeting": "Workshop on Radiative Processes in Few Nucleon Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-03",
    "location": "Washington, D.C.",
    "date": "3-4 October 1983",
    "meeting": "Summit Working Group on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-18.1",
    "location": "Dubna, USSR",
    "date": "18-20 Jan 1982",
    "meeting": "3rd Workshop on Neutrino Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-20",
    "location": "Schladming, Austria",
    "date": "20 Feb - 1 Mar 1985",
    "meeting": "24th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics): N-N and Anti-N-N Interactions from Low to High Energies)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-25",
    "location": "Adana, Turkey",
    "date": "25 Nov - 2 Dec 1984",
    "meeting": "International Seminar on Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.5",
    "location": "Tokyo, Japan",
    "date": "16-20 May 1983",
    "meeting": "6th International Conference on Radiation Shielding"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-19",
    "location": "Dubna, USSR",
    "date": "19-23 Jun 1984",
    "meeting": "VII International Seminar on High-Energy Physics Problems, Multiquark Interactions and Quantum Chromodynamics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-12.1",
    "location": "Albany, New York",
    "date": "12-14 Apr 1984",
    "meeting": "Symposium on Fundamental Questions in Quantum Mechanics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-20.1",
    "location": "Kazimierz, Poland",
    "date": "21-25 May 1984",
    "meeting": "VII Warsaw Symposium on Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-07.1",
    "location": "Berlin, Germany",
    "date": "7-12 May 1984",
    "meeting": "6th International Congress of the International Radiation Protection Association"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-14.1",
    "location": "Tsukuba, Japan",
    "date": "14-19 May 1984",
    "meeting": "ICFA Seminar on Future Perspectives in High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-10",
    "location": "Gaithersburg, Maryland",
    "date": "10-12 Jul 1984",
    "meeting": "Workshop on Radiation Survey Instruments and Calibrations"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-15",
    "location": "Colorado Springs, Colorado",
    "date": "15-17 August 1983",
    "meeting": "1983 Cryogenic Engineering Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-01",
    "location": "Genoa, Italy",
    "date": "1-3 Oct 1984",
    "meeting": "Discussion Meeting on HERA Experiments"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-27",
    "location": "Jerusalem, Israel",
    "date": "27 Dec 1984 - 4 Jan 1985",
    "meeting": "2nd Jerusalem Winter School for Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-18",
    "location": "Karpacz, Poland",
    "date": "18 Feb - 2 Mar 1985",
    "meeting": "21st Winter School of Theoretical Physics: Spontaneous Symmetry Breaking"
  }, {
    "meeting": "21"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-29",
    "location": "St. Paul, Minnesota",
    "date": "29 Apr - 2 May 1985",
    "meeting": "23rd International Magnetics Conference (INTERMAG 85)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-20.1",
    "location": "Beijing, China",
    "date": "20-22 Jun 1984",
    "meeting": "1st International Conference on Computers and Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-16.1",
    "location": "Arlington, Virginia",
    "date": "16-20 Sep 1984",
    "meeting": "COMPCON Fall '84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-23",
    "location": "Boston, Massachusetts",
    "date": "23-25 Oct 1984",
    "meeting": "1984 IEEE Gallium Arsenide (GaAs) Integrated Circuits Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-19",
    "location": "Tokyo, Japan",
    "date": "19-23 Mar 1984",
    "meeting": "International Symposium on Cosmic Rays and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-30",
    "location": "Anaheim, California",
    "date": "30 Oct - 2 Nov 1984",
    "meeting": "Western Electronic Show and Convention: WESCON '84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-25",
    "location": "San Francisco, California",
    "date": "25-28 Feb 1985",
    "meeting": "COMPCON Spring 1985"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-13",
    "location": "Vancouver, British Columbia, Canada",
    "date": "13-16 May 1985",
    "meeting": "11th Particle Accelerator Conference"
  }, {
    "meeting": "PAC 85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-18",
    "location": "Minneapolis, Minnesota",
    "date": "18-20 Apr 1985",
    "meeting": "6th Workshop on Grand Unification"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-03",
    "location": "Kanpur, India",
    "date": "3-15 Dec 1984",
    "meeting": "Silver Jubilee Workshop on Recent Advances in Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-25.1",
    "location": "Trieste, Italy",
    "date": "25-29 Mar 1985",
    "meeting": "2nd Workshop on Perspectives in Nuclear Physics at Intermediate Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-10-12",
    "location": "Florence, Italy",
    "date": "12-15 Oct 1982",
    "meeting": "International Meeting on Geometry and Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-16",
    "location": "Shumen, Bulgaria",
    "date": "16-19 Aug 1984",
    "meeting": "International Summer School on Elementary Particles and High Energy Physics: Differential Geometric Methods"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-25.1",
    "location": "St.Vincent, Italy",
    "date": "25 Feb - 2 Mar 1985",
    "meeting": "5th Topical Workshop on Proton Antiproton Collider Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-09",
    "location": "Kiryat Anavim, Israel",
    "date": "9-14 Jun 1985",
    "meeting": "16th International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-06",
    "location": "San Francisco, California",
    "date": "6-9 Sep 1984",
    "meeting": "Byte Computer Show"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-31",
    "location": "Santa Margherita di Pula, Italy",
    "date": "31 Jan - 5 Feb 1985",
    "meeting": "Joint US / CERN School on Particle Accelerators: Topical Course on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-25.1",
    "location": "Stanford, California",
    "date": "25-26 Oct 1984",
    "meeting": "SSRL Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-07.3",
    "location": "Uppsala, Sweden",
    "date": "Nov 7-9 1983",
    "meeting": "Workshop on the Physics Program at CELSIUS"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-08-15.1",
    "location": "Colorado Springs, Colorado",
    "date": "Aug 15-17 1983",
    "meeting": "Fifth International Cryogenic Materials Conference (ICMC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-30",
    "location": "Stanford, California",
    "date": "30 Nov - 1 Dec 1984",
    "meeting": "Workshop on e+ e- Physics at High Luminosities"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-03.1",
    "location": "Dogashima, Japan",
    "date": "3-7 Oct 1983",
    "meeting": "3rd French - Japanese Symposium on Nuclear Physics: Comparison of Nuclear Researches with Electromagnetic and Hadronic Probes at Intermediate Energies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-07.1",
    "location": "Dubna, USSR",
    "date": "7-9 Jun 1983",
    "meeting": "Workshop on Problems of Radiation and Detection of Gravitational Waves"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-30",
    "location": "Panchgani, India",
    "date": "30 Jan - 12 Feb 1985",
    "meeting": "TIFR Winter School and International Colloquium on Exactly Solvable Problems in Condensed Matter and Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-09",
    "location": "Tokyo, Japan",
    "date": "9-12 Nov 1983",
    "meeting": "International Symposium on Electromagnetic Properties of Atomic Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-27",
    "location": "Atlanta, Georgia",
    "date": "27-30 Jan 1986",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-31",
    "location": "Las Vegas, Nevada",
    "date": "31 Mar-4 Apr 1986",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-03.1",
    "location": "Oaxtepec Morelos, Mexico",
    "date": "3-14 Dec 1984",
    "meeting": "1st Mexican School of Particles and Fields"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-13",
    "location": "La Plagne, France",
    "date": "13-19 Jan 1985",
    "meeting": "5th Moriond Workshop: Heavy Quarks, Flavor Mixing and CP Violation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-19",
    "location": "Tignes (Savoie) France",
    "date": "19-26 Jan 1985",
    "meeting": "LEAR Workshop: Physics with Low-energy Cooled Antiprotons in in the ACOL Era"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-10",
    "location": "Les Arcs, France",
    "date": "10-17 Mar 1985",
    "meeting": "XXth Rencontre de Moriond: QCD and Beyond"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-17",
    "location": "Les Arcs, France",
    "date": "17-23 Mar 1985",
    "meeting": "XXth Rencontre de Moriond: Electroweak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-17.1",
    "location": "Les Arcs, France",
    "date": "17-23 Mar 1985",
    "meeting": "5th Moriond Astrophysics Meeting: Nucleosynthesis & its Implications on Nuclear and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-01",
    "location": "Les Houches, France",
    "date": "1 Jul - 8 Aug 1985",
    "meeting": "Les Houches School of Theoretical Physics: Architecture of Fundamental Interactions at Short Distances"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12",
    "location": "Les Houches, France",
    "date": "12 Aug - 6 Sep 1985",
    "meeting": "Les Houches Summer School on Theoretical Physics: Signal Processing"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-12",
    "location": "Erice, Italy",
    "date": "12-22 May 1985",
    "meeting": "International School of Cosmology and Gravitation, 9th Course: Topological Properties and Global Structure of Space-Time"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-12",
    "location": "Erice, Italy",
    "date": "12-22 Mar 1985",
    "meeting": "Advanced School of Astronomy: Workshop on Spectral Evolution of Galaxies"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-01",
    "location": "Batavia, Illinois",
    "date": "1-4 May 1985",
    "meeting": "International Symposium on Particle Physics in the 1950s: Pions to Quarks"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-24",
    "location": "Palm Beach Shores, Florida",
    "date": "24-26 Oct 1984",
    "meeting": "25th Annual Symposium on Foundations of Computer Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-10",
    "location": "Gaithersburg, Maryland",
    "date": "10-11 Dec 1984",
    "meeting": "1984 IEEE Computer Society Computer Networking Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-23",
    "location": "New Nork, New York",
    "date": "23-25 Apr 1985",
    "meeting": "ELECTRO '85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-23",
    "location": "San Francisco, California",
    "date": "23-25 Oct 1985",
    "meeting": "IEEE 1985 Nuclear Science Symposium (NSS)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-19",
    "location": "San Francisco, California",
    "date": "19-21 Nov 1985",
    "meeting": "Western Electronic Show and Convention - WESCON '85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-26",
    "location": "University Park, Pennsylvania",
    "date": "26-27 Oct 1984",
    "meeting": "23rd Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-28",
    "location": "Washington, DC",
    "date": "28 Oct - 1 Nov 1984",
    "meeting": "2nd International Congress on Computers in Science"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-04",
    "location": "Reno, Nev.",
    "date": "4-7 Dec 1984",
    "meeting": "31st National Vacuum Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-06",
    "location": "New Delhi, India",
    "date": "6-11 Jan 1985",
    "meeting": "7th International Conference on Positron Annihilation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-18",
    "location": "Telluride, Colo.",
    "date": "18-21 Mar 1985",
    "meeting": "Conference on Antinucleon and Nucleon-Nucleus Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-16",
    "location": "Joensuu, Finland",
    "date": "16-20 Jun 1985",
    "meeting": "Symposium on the Foundations of Modern Physics: 50 Years of the Einstein- Podolsky-Rosen Gedankenexperiment"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-01.1",
    "location": "Paris, France",
    "date": "1-5 Jul 1985",
    "meeting": "11th Europhysics Conference on Intermediate Energy Nuclear Physics with Electromagnetic Probes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-28",
    "location": "Washington, DC",
    "date": "28 Apr-1 May 1986",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-23",
    "location": "Los Angeles, California",
    "date": "23-28 May 1985",
    "meeting": "AAAS Annual Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-06.1",
    "location": "Bratislava, Czechoslovakia",
    "date": "6-12 Sep 1983",
    "meeting": "11th International Symposium on Nuclear Electronics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-07",
    "location": "Kyoto, Japan",
    "date": "7-11 May 1985",
    "meeting": "8th Kyoto Summer Institute: Quantum Gravity and Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-29",
    "location": "Stanford, California",
    "date": "29 Jul - 9 Aug 1985",
    "meeting": "13th SLAC Summer Institute on Particle Physics: Supersymmetry (Topical Conference last 3 days) (SSI 85)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-11",
    "location": "Santa Barbara, California",
    "date": "11-16 Jan 1985",
    "meeting": "International Conference on Solitons and Coherent Structures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-04",
    "location": "Canberra, Australia",
    "date": "4-6 Feb 1985",
    "meeting": "7th NUPP Summer School on Nuclear and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-07",
    "location": "Los Angeles, California",
    "date": "7-18 Jan 1985",
    "meeting": "2nd International Workshop on Laser Acceleration of Particles"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-24",
    "location": "Thessaloniki, Greece",
    "date": "24-29 Jun 1985",
    "meeting": "International Symposium on Particles and the Universe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-15",
    "location": "San Francisco, California",
    "date": "15-18 Apr 1985",
    "meeting": "XUV and X-ray Optics for Synchrotron Radiation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-13",
    "location": "Tsukuba, Japan",
    "date": "13-15 Mar 1985",
    "meeting": "International Symposium on Physics of Proton Antiproton Collision"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-15",
    "location": "Kyoto, Japan",
    "date": "15-17 Aug 1985",
    "meeting": "Meson 50: Kyoto International Symposium: The Jubilee of the Meson Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-04-17",
    "location": "Baltimore, Maryland",
    "date": "17 Apr 1983",
    "meeting": "Short Course on the Nuclear Arms Race"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26.2",
    "location": "Tsukuba, Japan",
    "date": "26-27 Mar 1984",
    "meeting": "5th Meeting on Ultra High Vacuum Techniques for Accelerators and Storage Rings"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-23.3",
    "location": "Cambridge, Mass.",
    "date": "23-24 Jul 1984",
    "meeting": "BUTG Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-25",
    "location": "Tbilisi, USSR",
    "date": "25-31 Aug 1984",
    "meeting": "European Conference on Few Body Problems in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-14",
    "location": "Stanford, California",
    "date": "14 Nov 1984",
    "meeting": "Symposium on the 10th Anniversary of the November Revolution"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-15",
    "location": "Aberdeen, Scotland",
    "date": "15-28 Sep 1985",
    "meeting": "Scottish Summer School in Physics: Synchrotron Radiation sources and their Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-03",
    "location": "Autun, France",
    "date": "3-5 Jul 1985",
    "meeting": "Physics in Collision V"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-04",
    "location": "Erice, Italy",
    "date": "4-14 Aug 1985",
    "meeting": "International School of Subnuclear Physics: Old and New Forces of Nature"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26.3",
    "location": "Berkeley, California",
    "date": "26-30 March 1984",
    "meeting": "Workshop on Detectors for Relativistic Nuclear Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-13",
    "location": "Tokyo, Japan",
    "date": "13-15 Aug 1985",
    "meeting": "1985 INS International Symposium on Composite Models of Quarks and Leptons"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-29.1",
    "location": "Stanford, California",
    "date": "29 Jul - 2 Aug 1985",
    "meeting": "2nd International Conference on X-ray and VUV Synchrotron Radiation Instrumentation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-23",
    "location": "Trieste, Italy",
    "date": "23-27 Sep 1985",
    "meeting": "Topical Meeting on Supergravity and Supersymmetry (Kaluza-Klein)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-09",
    "location": "Zurich, Switzerland",
    "date": "9-13 Sep 1985",
    "meeting": "9th International Conference on Magnet Technology (MT-9)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-09.1",
    "location": "Upton, New York",
    "date": "9-13 Sep 1985",
    "meeting": "5th International Conference on Hypernuclear and Kaon Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-16",
    "location": "Berkeley, California",
    "date": "16-23 Jul 1986",
    "meeting": "23rd International Conference on High-Energy Physics"
  }, {
    "meeting": "Rochester"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-16.1",
    "location": "Marseille, France",
    "date": "16-25 Jul 1986",
    "meeting": "8th International Congress on Mathematical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-20",
    "location": "Verona, Italy",
    "date": "20-30 Jun 1985",
    "meeting": "International School for Intermediate Energy Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-03-25.2",
    "location": "Telluride, Colorado",
    "date": "25-27 Mar 1982",
    "meeting": "International Conference on Spin Excitations in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-11-08.2",
    "location": "Hiroshima, Japan",
    "date": "8-9 Nov 1983",
    "meeting": "U.S. - Japan Joint Workshop Reassessment of Atomic Bomb Radiation Dosimetry in Hiroshima and Nagasaki with special reference to shielding and organ doses"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-05-26.2",
    "location": "Dubna, USSR",
    "date": "25-27 May 1982",
    "meeting": "Meeting on Investigations in the Field of Relativistic Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26.4",
    "location": "Georgenthal, East Germany",
    "date": "26-30 Mar 1984",
    "meeting": "15th Spring Symposium on High-Energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-25.1",
    "location": "Paris, France",
    "date": "25-27 May 1983",
    "meeting": "Interdisciplinary Meeting on Magnetic Monopoles in Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-19.1",
    "location": "Bloomington, Indiana",
    "date": "19-21 Oct 1983",
    "meeting": "Workshop on Manifestations of Hadron Substructure in Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-01",
    "location": "Urbino, Italy",
    "date": "1-14 Sep 1985",
    "meeting": "9th CERN - JINR School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-20",
    "location": "College Park, Maryland",
    "date": "20-22 Apr 1985",
    "meeting": "International Conference on Hadron Spectroscopy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-09.1",
    "location": "New Haven, Connecticut",
    "date": "9 Jun - 5 Jul 1985",
    "meeting": "Theoretical Advanced Study Institute in Elementary Particle Physics"
  }, {
    "meeting": "Yale Summer School on High Energy Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12.1",
    "location": "Eugene, Oregon",
    "date": "12-15 Aug 1985",
    "meeting": "Annual Meeting of the Division of Particles and Fields of the APS"
  }, {
    "meeting": "DPF Annual meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-10.1",
    "location": "Trieste, Italy",
    "date": "10-12 Jun 1985",
    "meeting": "Conference on Tests of Electroweak Theories: Polarized Processes and Other Phenomena"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-05",
    "location": "Florence, Italy",
    "date": "5-7 Jun 1985",
    "meeting": "Johns Hopkins Workshop on Current Problems in Particle Theory 9: New Trends in Particle Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-25",
    "location": "Amsterdam, Netherlands",
    "date": "25-28 Jun 1985",
    "meeting": "Conference on Computing in High-Energy Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-02",
    "location": "Stanford, California",
    "date": "2-6 Jun 1986",
    "meeting": "13th International Linear Accelerator Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-26",
    "location": "Tsukuba, Japan",
    "date": "26-28 Sep 1984",
    "meeting": "5th Symposium on Accelerator Science and Technology"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-17.2",
    "location": "Syracuse, New York",
    "date": "17-18 May 1984",
    "meeting": "6th Annual MRST (Montreal-Rochester-Syracuse-Toronto) Meeting"
  }, {
    "meeting": "Montreal Rochester Syracuse Toronto 84"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-05",
    "location": "Caracas, Venezuela",
    "date": "5-11 Dec 1982",
    "meeting": "4th SILARG Symposium on Gravity, Gauge Theories, and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-10.1",
    "location": "Tallahassee, Florida",
    "date": "10-13 Apr 1985",
    "meeting": "Advances in Lattice Gauge Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-31.1",
    "location": "Madrid, Spain",
    "date": "31 Jan - 2 Feb 1985",
    "meeting": "3rd CSIC Workshop on SUSY and Grand Unification from Strings to Collider Phenomenology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-01.2",
    "location": "Erice, Italy",
    "date": "1-14 Jul 1985",
    "meeting": "International School of Mathematical Physics: 6th Course: Fundamental Problems of Gauge Field Theory"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-28",
    "location": "Erice, Italy",
    "date": "28-31 Jul 1985",
    "meeting": "International Seminar on Frontiers and Limits of Science: In Honor of V. F. Weisskopf's 77th Anniversary"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-08",
    "location": "Jammu, India",
    "date": "8-13 Oct 1984",
    "meeting": "VIIth High-energy Physics Conference"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-28",
    "location": "Argonne, Illinois",
    "date": "28-30 Mar 1985",
    "meeting": "Symposium on Anomalies, Geometry, Topology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-13",
    "location": "Mont Gabriel, Canada",
    "date": "13-16 Jun 1984",
    "meeting": "TRIUMF-ISOL Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-06-07",
    "location": "Jackson Hole, Wyoming",
    "date": "7-8 Jun 1984",
    "meeting": "Muon - Catalyzed Fusion Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-18",
    "location": "Berkeley, California",
    "date": "18-19 Jan 1985",
    "meeting": "New Phenomena at the SPS Collider: Implications for SSC and beyond"
  }, {
    "meeting": "SUPERCOLLIDER"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-05",
    "location": "Wuppertal, Germany",
    "date": "5-7 Nov 1985",
    "meeting": "Workshop on Lattice Gauge Theories"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-26",
    "location": "Bologna, Italy",
    "date": "26-28 April 1984",
    "meeting": "Meeting of the Italian School of Physics and Weak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-22",
    "location": "Banff, Canada",
    "date": "22 Aug - 4 Sept 1985",
    "meeting": "New Vistas in Electro-Nuclear Physics"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-18.1",
    "location": "Eugene, Oregon",
    "date": "18 Mar - 15 Aug 1985",
    "meeting": "Oregon Workshop on Super High-energy Physics"
  }, {
    "meeting": "SUPERCOLLIDER"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-26.2",
    "location": "Honolulu, Hawaii",
    "date": "26-31 Aug 1985",
    "meeting": "10th Hawaii Topical Conference in High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-15",
    "location": "Stanford, California",
    "date": "15-26 Jul 1985",
    "meeting": "1985 SLAC Summer School on the Physics of High-energy Particle Accelerators"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-06",
    "location": "Copenhagen, Denmark",
    "date": "6-10 May 1985",
    "meeting": "Symposium on the Occasion of the Niels Bohr Centennial: Recent Developments in Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-08",
    "location": "Lewes, Del.",
    "date": "8 Jun-26 Jul 1985",
    "meeting": "Lewes Center for Physics: An East Coast Summer Physics Center"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-22",
    "location": "Lewes, Delaware",
    "date": "22 Jun - 6 Jul 1985",
    "meeting": "Lewes Superstring Workshop"
  }, {
    "meeting": "Lewes Workshop on Lattice Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-28.1",
    "location": "Edinburgh, Scotland",
    "date": "28 Jul-17 Aug 1985",
    "meeting": "28th Scottish Universities Summer School in Physics: Supersymmetry and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-04",
    "location": "Madison, Wisconsin",
    "date": "4-6 Apr 1985",
    "meeting": "Institute for Colliding Beam Physics and Accelerator Principles: Muon Detection in the Multiple Energy Region for SSC Experiments"
  }, {
    "meeting": "SUPERCOLLIDER"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-01-05",
    "location": "Mahabaleshwar, India",
    "date": "5-19 Jan 1984",
    "meeting": "Winter School on Supersymmetry and Supergravity Nonperturbative QCD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-04-11",
    "location": "New Haven, Connecticut",
    "date": "11 April 1981",
    "meeting": "Symposium Celebrating Feza Gursey's Sixtieth Birthday"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-15.1",
    "location": "Cargese, France",
    "date": "15-31 Jul 1985",
    "meeting": "Cargese Summer Institute in Particle Physics: Recent Experimental and Theoretical Results on the Basic Constituents of Matter"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-05",
    "location": "Stanford, California",
    "date": "5-6 Apr 1985",
    "meeting": "2nd Workshop on e+ e- Physics at High Luminosities"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-08",
    "location": "Madison, Wisconsin",
    "date": "8-11 May 1985",
    "meeting": "New Particles '85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-08",
    "location": "Protvino, USSR",
    "date": "8-14 Jul 1985",
    "meeting": "VIII Workshop on High-energy Physics and Field Theory"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-17",
    "location": "St. Andrews, Scotland",
    "date": "17 Aug - 7 Sep 1985",
    "meeting": "6th UK Institute for Theoretical High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-22",
    "location": "Monterey, California",
    "date": "22-24 Jul 1985",
    "meeting": "22nd Annual Conference on Nuclear and Space Radiation Effects"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-03.2",
    "location": "Jaca (Huesca), Spain",
    "date": "3-8 Jun 1985",
    "meeting": "XVI GIFT International Seminar on Theoretical Physics: New Perspectives in Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-27.1",
    "location": "Calcutta, India",
    "date": "27 Dec 1984 - 1 Jan 1985",
    "meeting": "International Bose Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-17",
    "location": "Baton Rouge, Louisiana",
    "date": "17-20 Oct 1984",
    "meeting": "Cosmic Ray & High-energy Gamma Ray Experiments for the Space Station Era"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-05.2",
    "location": "Paris, France",
    "date": "5-6 April 1984",
    "meeting": "6th Seminar on Gamma Gamma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-17",
    "location": "Nove Mesto, Czechoslovakia",
    "date": "17-26 Sep 1985",
    "meeting": "6th Summer School on Computing Techniques in Physics: Software Engineering, Methods & Tools in Computational Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-29",
    "location": "Berkeley, California",
    "date": "29 Sep 1984",
    "meeting": "G.F. Chew Jubilee"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12.2",
    "location": "Andover, New Hampshire",
    "date": "12-16 Aug 1985",
    "meeting": "Gordon Conference on Elementary Particle Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-09",
    "location": "Montpellier, France",
    "date": "9-13 July 1985",
    "meeting": "Workshop on Non-Perturbative Methods"
  }]
}, {
  "meeting_name": [{
    "date": "16-22 June 1985",
    "coference_code": "C85-06-16.1",
    "meeting": "TENTH INTERNATIONAL WORKSHOP ON WEAK INTERACTIONS",
    "location": "Savonlinna, Finland"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-26.3",
    "location": "Seoul, Korea",
    "date": "26-30 Aug 1985",
    "meeting": "XIVth International Colloquium on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-01",
    "location": "Hamburg, Germany",
    "date": "1-4 Oct 1985",
    "meeting": "DESY Workshop 1985: Physics at the Fermi Scale"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-06-09.2",
    "location": "Bucharest, Romania",
    "date": "9-12 June 1981",
    "meeting": "Nuclear Physics Divisional Conference of EPS: Nuclear and Atomic Physics with Heavy Ions."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-28.1",
    "location": "Los Alamos, New Mexico",
    "date": "28-29 Mar 1985",
    "meeting": "Workshop on Neutrino Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-16",
    "location": "Berkeley, California",
    "date": "16-17 Jan 1985",
    "meeting": "3rd Workshop on NbTi Superconductors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-14",
    "location": "Berkeley, California",
    "date": "14-18 Jan 1985",
    "meeting": "Workshop on Commissioning and Operations of the SSC"
  }, {
    "meeting": "SUPERCOLLIDER"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-07",
    "location": "Trieste, Italy",
    "date": "7 Oct - 1 Nov 1985",
    "meeting": "3rd College on Microprocessors: Technology and Applications in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-16.6",
    "location": "Aussois, France",
    "date": "16-20 May 1983",
    "meeting": "Spring School on Muon Spin Research"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-03.3",
    "location": "Blois, France",
    "date": "June 3-6, 1985",
    "meeting": "Workshop on Elastic and Diffractive Scattering at the Collider and Beyond"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-22.1",
    "location": "San Francisco, California",
    "date": "July 22-26, 1985",
    "meeting": "SIGGRAPH 85: 12th Annual Conference on Computer Graphics and Interactive Techniques"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-02",
    "location": "Como, Italy",
    "date": "2-7 Sep 1985",
    "meeting": "NATO Advanced Research Workshop: Fundamental Aspects of Quantum Theory"
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-22",
    "location": "Upton, New York",
    "date": "22-23 Apr 1985",
    "meeting": "HEDG Annual Meeting, HEPAP Town Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-20.1",
    "location": "Chicago, Illinois",
    "date": "20-24 May 1985",
    "meeting": "4th Real Time Computer Applications in Nuclear and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-10-29",
    "location": "Washington, DC",
    "date": "29-31 Oct 1986",
    "meeting": "IEEE 1986 Nuclear Science Symposium (NSS) and Symposium on Nuclear Power Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C87-03-16",
    "location": "Washington, DC",
    "date": "16-19 Mar 1987",
    "meeting": "12th IEEE Particle Accelerator Conference (PAC)"
  }, {
    "meeting": "PAC 87"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-09-01",
    "location": "Dublin, Ireland",
    "date": "1-5 Sep 1986",
    "meeting": "10th World Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-06",
    "location": "Amalfi, Italy",
    "date": "6-7 May 1983",
    "meeting": "Theoretical Physics Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-07.1",
    "location": "Santa Barbara, California",
    "date": "7-9 Jan 1985",
    "meeting": "Experimental and Theoretical Investigations of Family Problems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-29.2",
    "location": "Santa Barbara, California",
    "date": "29 Jul - 16 Aug 1985",
    "meeting": "Workshop on Unified String Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12.3",
    "location": "Santa Barbara, California",
    "date": "12-23 Aug 1985",
    "meeting": "Nuclear Chromodynamics: Quarks and Gluons in Particles and Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-25.2",
    "location": "New Orleans, Louisiana",
    "date": "25-28 May 1983",
    "meeting": "Quantum Theory and Gravitation II"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-28",
    "location": "Portland, Orgeon",
    "date": "28-31 May 1985",
    "meeting": "29th International Symposium on Electron, Ion and Photon Beams"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-10.1",
    "location": "Freiburg im Breisgau, Germany",
    "date": "10-13 April 1984",
    "meeting": "Workshop on the Future of Intermediate Energy Physics in Europe"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-03.4",
    "location": "Darmstadt, Germany",
    "date": "3-7 Sep 1984",
    "meeting": "7th International Conference on Atomic Masses and Fundamental Constants"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-25.4",
    "location": "Changchun, China",
    "date": "25-31 July 1983",
    "meeting": "International Summer School on Nucleon-Nucleon Interactions and Nuclear Many - Body Problems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-01-18.2",
    "location": "Ahmedabad, India",
    "date": "18-20 January 1982",
    "meeting": "Workshop on Gravitation and Relativistic Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-30",
    "location": "Aachen, Germany",
    "date": "30 Jun - 4 Jul 1986",
    "meeting": "6th Topical Workshop on Proton Antiproton Collider Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-17.1",
    "location": "Rome, Italy",
    "date": "17-21 Jun 1985",
    "meeting": "4th Marcel Grossmann Meeting on the Recent Developments of General Relativity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-08-25",
    "location": "Harrogate, England",
    "date": "25-30 Aug 1986",
    "meeting": "IUPAP International Nuclear Physics Conference"
  }, {
    "meeting": "International Union of Pure and Applied Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-03.4",
    "location": "Newport News, Virginia",
    "date": "3-7 Jun 1985",
    "meeting": "1985 CEBAF Summer Workshop (Continuous Electron Beam Facility)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-01.3",
    "location": "Chania, Greece",
    "date": "1-10 Jul 1985",
    "meeting": "3rd Workshop on Recent Developments in High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-26",
    "location": "Erice, Italy",
    "date": "26 Oct - 1 Nov 1985",
    "meeting": "International School of Quantum Electronics : Progress in Microemulsions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-06",
    "location": "Erice, Italy",
    "date": "6-15 Sep 1985",
    "meeting": "International School of Radiation Damage and Protection: Advances in Biological Effects and Dosimetry of Ultrasound"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-07.2",
    "location": "Aspen, Colorado",
    "date": "7-18 Jan 1985",
    "meeting": "1st Aspen Winter Conference: Section I (7-12 Jan): Hadron Physics, Section II: Electroweak Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-16",
    "location": "Oxford, England",
    "date": "16-27 Sep 1985",
    "meeting": "CERN Accelerator School: Advanced Accelerator Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-22",
    "location": "Kupari-Dubrovnik, Yugoslavia",
    "date": "22 Sep - 6 Oct 1985",
    "meeting": "International School of Elementary Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-02-25",
    "location": "Vienna, Austria",
    "date": "25-28 Feb 1986",
    "meeting": "Wire Chamber Conference: Recent Trends and Alternative Techniques WWC 86"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-25",
    "location": "Urbino, Italy",
    "date": "25 Sep - 3 Oct 1985",
    "meeting": "International Conference on Microphysical Reality and Quantum Formalism: Perspectives on the Einstein-Bohr Debate Fifty Years after the EPR Argument"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-15.2",
    "location": "Chicago, Illinois",
    "date": "15-18 Jul 1984",
    "meeting": "NCC '85: 1985 National Computer Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-16.2",
    "location": "Chilton, England",
    "date": "16-29 Sep 1984",
    "meeting": "School for Young High-energy Physicists"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-28.1",
    "location": "Gull Lake Michigan",
    "date": "28-30 May 1984",
    "meeting": "Workshop on Interacting Boson - Boson and Boson - Fermion Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-14.2",
    "location": "Argonne, Illinois",
    "date": "14 May - 15 June 1984",
    "meeting": "Workshop on Spectral Theory of Sturm - Liouville Differential Operators"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-04",
    "location": "Enschede, Netherlands",
    "date": "4-7 Jun 1985",
    "meeting": "Conference on Nonlinear Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-10.2",
    "location": "Visby, Sweden",
    "date": "10-14 Jun 1985",
    "meeting": "2nd International Conference on Nucleus-Nucleus Collisions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-17.2",
    "location": "Milwaukee, Wisconsin",
    "date": "17-19 Jun 1985",
    "meeting": "45th Annual Conference on Physical Electronics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-27",
    "location": "Lausanne, Switzerland",
    "date": "27-28 Jun 1985",
    "meeting": "Stueckelberg Memorial Lectures: Field Theory, General Relativity, Time Irreversibility"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-20",
    "location": "College Park, Maryland",
    "date": "20-23 May 1986",
    "meeting": "International Conference on the Physics of Phase Space"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-23",
    "location": "Snowmass, Colorado",
    "date": "23 Jun - 11 Jul 1986",
    "meeting": "Snowmass '86 Summer Study on the Physics of the Superconducting Supercollider"
  }, {}]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-01.4",
    "location": "Lindau, Germany",
    "date": "1-5 Jul 1985",
    "meeting": "35th Nobel Prize Days: Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-11",
    "location": "San Diego, California",
    "date": "11-23 Aug 1985",
    "meeting": "19th International Cosmic Ray Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-16.1",
    "location": "Villigen, Switzerland",
    "date": "16-18 Sep 1985",
    "meeting": "4th Magnet Measurement Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-16.2",
    "location": "Varna, Bulgaria",
    "date": "16-20 Sep 1985",
    "meeting": "7th Europhysics Study Conference on Nuclear Physics: Synthesis and Structure of Exotic Nuclei and Atoms"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-28",
    "location": "Dresden, Germany",
    "date": "28 Oct - 1 Nov 1985",
    "meeting": "5th International Conference on Lasers and their Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-16",
    "location": "Seewinkel, Austria",
    "date": "16-20 Jun 1986",
    "meeting": "17th International Symposium on Multiparticle Dynamics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-06",
    "location": "Stockholm, Sweden",
    "date": "6-11 Jul 1986",
    "meeting": "11th International Conference on General Relativity and Gravitation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-05.1",
    "location": "Positano, Italy",
    "date": "5-7 Jun 1985",
    "meeting": "International Symposium on Quantum Field Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-10-27",
    "location": "Baltimore, Maryland",
    "date": "27-31 Oct 1986",
    "meeting": "10th International Vacuum Congress and 6th International Conference on Solid Surfaces and 33rd American Vacuum Society Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-20.1",
    "location": "Gallipoli, Italy",
    "date": "20 Jun - 5 Jul 1985",
    "meeting": "3rd Workshop on Nonlinear Evolution Equations and Dynamical Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C79-07-03",
    "location": "Novosibirsk, USSR",
    "date": "3-6 Jul 1979",
    "meeting": "3rd International Topical Conference on High Power Electron and Ion Beam Research and Technology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-09.2",
    "location": "Clermont Ferrand, France",
    "date": "9-13 Sep 1985",
    "meeting": "17th Summer School on Particle Physics: I. Physics Beyond TeV. II. Semiconductor Detectors in Particle Physics (LANGUAGE FRENCH)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-04",
    "location": "Trieste, Italy",
    "date": "4 Nov - 6 Dec 1985",
    "meeting": "College on Representation Theory of lie Groups"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-02",
    "location": "Erice, Italy",
    "date": "2-14 Apr 1986",
    "meeting": "International School of Nuclear Physics, 10th Course: The Early Universe and its Evolution"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-07.1",
    "location": "Los Alamos, New Mexico",
    "date": "7-10 Oct 1985",
    "meeting": "2nd International Workshop on Accelerator Control System"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-09",
    "location": "Eugene, Oregon",
    "date": "9-10 Aug 1985",
    "meeting": "Supercollider Physics Topical Conference"
  }, {
    "meeting": "SSC"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12.4",
    "location": "Clausthal-Zellerfeld, Germany",
    "date": "12-13 Aug 1985",
    "meeting": "International Symposium on Conformal Groups and Structures"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-10-17.1",
    "location": "Corvallis, Oregon",
    "date": "17-21 Oct 1983",
    "meeting": "Conference on Asymptotic Behavior of Mass and Spacetime Geometry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-30.1",
    "location": "Mt. Sorak, Korea",
    "date": "30 Jul - 3 Aug, 1984",
    "meeting": "3rd Symposium on Theoretical Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-10",
    "location": "Mainz, Germany",
    "date": "10-14 Mar 1986",
    "meeting": "International Conference on a European Hadron Facility"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-23.1",
    "location": "Rome, Italy",
    "date": "23-27 Sep 1985",
    "meeting": "13th International Conference on Solid State Nuclear Track Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-11",
    "location": "Trieste, Italy",
    "date": "11 Jun - 19 Jul 1985",
    "meeting": "ICTP Workshop in High-energy Physics and Cosmology (including Conference on Grand Unified Theories)"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-23.3",
    "location": "Smolenice, Czechoslovakia",
    "date": "23-27 Sep 1985",
    "meeting": "Hadron Structure '85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-26",
    "location": "Strasbourg, France & Karlsruhe, Germany",
    "date": "26 Sep - 1 Oct 1985",
    "meeting": "The Quark Structure of Matter"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-01.1",
    "location": "Amman, Jordan",
    "date": "1-8 Sep 1985",
    "meeting": "3rd PETRA School of Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-12-09",
    "location": "Trieste, Italy",
    "date": "9-13 Dec 1985",
    "meeting": "Workshop on Graded Differential Geometry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-21.3",
    "location": "Oxford, England",
    "date": "21-23 May 1984",
    "meeting": "Oxford Quantum Gravity Discussion Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-18",
    "location": "San Diego, California",
    "date": "18-23 Aug 1985",
    "meeting": "29th International Technical Symposium on Optical and Electro-Optical Engineering"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C82-12-06.1",
    "location": "Anaheim, California",
    "date": "6-10 Dec 1982",
    "meeting": "1982 Winter DECUS U.S. Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-11",
    "location": "Tempe, Arizona",
    "date": "11-15 Mar 1985",
    "meeting": "Conference on Hadronic Probes and Nuclear Interaction"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-09-24.1",
    "location": "Karlsruhe, West Germany",
    "date": "24-26 Sep 1984",
    "meeting": "Conference on Electron Cooling"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-26.5",
    "location": "Nottingham, England",
    "date": "26-28 Mar 1984",
    "meeting": "Conference on Quantum Motion"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-22",
    "location": "Kyoto-shi, Kyoto 606, Japan",
    "date": "22-24 Dec 1983",
    "meeting": "RIFP Meeting on QCD and High-energy Phenomenology"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-02.1",
    "location": "Aussois, France",
    "date": "2-5 May 1984",
    "meeting": "Journees Relativistes"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-19",
    "location": "Los Alamos, New Mexico",
    "date": "19-21 May 1986",
    "meeting": "Conference on Charged Particle Optics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-21",
    "location": "Providence, Rhode Island",
    "date": "21-23 Jul 1986",
    "meeting": "Nuclear and Space Radiation Effects Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-03-07.1",
    "location": "Bad Honnef, Germany",
    "date": "7-10 March 1983",
    "meeting": "Conference on Pade Approximation and it Applications"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-11",
    "location": "Cesena, Italy",
    "date": "11-13 Apr 1985",
    "meeting": "Conference on the Foundations of Quantum Theory"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-15.1",
    "location": "Canterbury, England",
    "date": "15-27 Sep 1985",
    "meeting": "NATO Advanced Research Workshop on Clifford Algebras and their Applications to Mathematical Physics"
  }, {
    "meeting": "ARW"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-10-06",
    "location": "Trieste, Italy",
    "date": "6-31 Oct 1986",
    "meeting": "School on Advanced Techniques in Computational Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-03",
    "location": "Madison, Wisconsin",
    "date": "3-5 Oct 1985",
    "meeting": "Workshop on the Design of a Low-energy Antimatter Facility in the USA"
  }, {}]
}, {
  "meeting_name": [{
    "coference_code": "C86-02-16",
    "location": "Lake Louise, Alberta, Canada",
    "date": "16-22 Feb 1986",
    "meeting": "Lake Louise Winter Institute: New Frontiers in Particle Physics"
  }, {
    "meeting": "1986 1st first"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-10",
    "location": "Pasadena, California",
    "date": "10-11 Sep 1985",
    "meeting": "Workshop on Compensated Calorimetry"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-20.2",
    "location": "Capri, Italy",
    "date": "20-24 May 1985",
    "meeting": "Third Capri Symposium: Symmetry and Supersymmetry in Nuclear and Subnuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-23.1",
    "location": "Santa Cruz, California",
    "date": "23 Jun - 19 Jul 1986",
    "meeting": "Theoretical Advanced Study Institute in Particle Physics - TASI 86"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-19",
    "location": "Cambridge, Massachusetts",
    "date": "19 Oct 1985",
    "meeting": "Coherence, Cooperation and Fluctuations: A Symposium on Statistical Physics, Quantum Optics and Nuclear Physics in honor of Roy J. Glauber"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-02-19",
    "location": "Schladming, Austria",
    "date": "19-28 Feb 1986",
    "meeting": "25th Internationale Universitatswochen fur Kernphysik (International School of Particle Physics: Concepts and Trends in Particle Physics)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-12-30",
    "location": "Jerusalem, Israel",
    "date": "30 Dec 1985 - 9 Jan 1986",
    "meeting": "3rd Jerusalem Winter School for Theoretical Physics: Strings and Superstrings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-05",
    "location": "Aspen, Colorado",
    "date": "5-18 Jan 1986",
    "meeting": "1986 Aspen Winter Physics Conference. Week 1: The Early Universe, Week 2: Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-25",
    "location": "Panchgani, India",
    "date": "25 Jan - 7 Feb 1986",
    "meeting": "Winter School in Theoretical Particle Physics"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-07-23.4",
    "location": "Chester, England",
    "date": "23-27 Jul 1984",
    "meeting": "International Conference on Clustering Aspects of Nuclear Structure and Nuclear Reactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-05.2",
    "location": "London, England",
    "date": "5-7 Sep 1983",
    "meeting": "8th Symposium on Photoelectronic Image Devices"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-02.1",
    "location": "Beijing, China",
    "date": "2-7 Sep 1985",
    "meeting": "International Symposium on Particle and Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-22",
    "location": "Yurmala City, USSR",
    "date": "22-24 May 1985",
    "meeting": "Seminar on Group Theoretical Methods in Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-02-21",
    "location": "Lake Louise, Alberta, Canada",
    "date": "21-23 Feb 1985",
    "meeting": "Western Regional Nuclear Physics Conference 1985 and School on Intermediate and High-energy Spin Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-17",
    "location": "Philadelphia, Pennsylvania",
    "date": "17-18 Oct 1985",
    "meeting": "24th Eastern Theoretical Physics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C81-03-23.2",
    "location": "Tvaerminne, Finland",
    "date": "23-27 March 1981",
    "meeting": "Symposium on Integrable Quantum Field Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-12-05",
    "location": "Strasbourg, France",
    "date": "5-7 Dec 1984",
    "meeting": "2nd Workshop on Photonics Applied to Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-05-23",
    "location": "Vancouver, British Columbia",
    "date": "23-28 May 1983",
    "meeting": "Workshop on High Intensity Polarized Proton Ion Sources"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-01-13",
    "location": "La Jolla, California",
    "date": "13-16 Jan 1983",
    "meeting": "Workshop on Unification and Supergravity"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-08-23",
    "location": "Homestake, South Dakota",
    "date": "1984",
    "meeting": "Conference on Solar Neutrinos and Neutrino Astronomy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-09-11.1",
    "location": "Blacksburg, Virginia",
    "date": "11-14 Sep 1983",
    "meeting": "Miniconference on Low-energy Tests of Conservation Laws in Particle Physics."
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-15",
    "location": "Berkeley, California",
    "date": "15-16 Nov 1985",
    "meeting": "Antiprotons: Past, Present and Future - On the Occasion of the 30th Anniversary of the Discovery"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-07-18.4",
    "location": "Rojen, Bulgaria",
    "date": "18-23 Jul 1983",
    "meeting": "COSPAR/IAU Symposium on Advances in High-energy Astrophysics and Cosmology"
  }, {
    "meeting": "COSPAR IAU"
  }, {
    "meeting": "high energy"
  }, {
    "meeting": "International Astronomical Union"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-12-05.1",
    "location": "Washington, DC",
    "date": "5-7 Dec 1983",
    "meeting": "1983 International Electron Devices Meeting"
  }, {
    "meeting": "IEDM"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C83-06-27.3",
    "location": "Chania, Greece",
    "date": "27 Jun - 1 Jul 1983",
    "meeting": "International Conference on Phase Transitions in Solids"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-25.2",
    "location": "San Miniato, Italy",
    "date": "25-29 Mar 1985",
    "meeting": "Topical Seminar on Few and Many Quark Systems"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-18.2",
    "location": "Austin, Texas",
    "date": "18-20 Mar 1985",
    "meeting": "Symposium on Algorithms, Architectures and the Future of Scientific Computation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-25.2",
    "location": "Pisa, Italy",
    "date": "25 Oct 1984",
    "meeting": "Symposium on Old and New Problems in Fundamental Physics, held in Honor of G.C. Wick"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-10-15",
    "location": "Spencer, IN",
    "date": "15-18 Oct, 1984",
    "meeting": "IUCF Workshop on Nuclear Physics with Stored Cooled Beam"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-17.3",
    "location": "Blacksburg, Virginia",
    "date": "17-21 Jun 1985",
    "meeting": "Miniworkshop on Superstrings and All That"
  }, {
    "meeting": "mini-workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-06-24.1",
    "location": "Orsay, France",
    "date": "24-28 Jun 1985",
    "meeting": "2nd International Workshop MAFPD"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-01-21.1",
    "location": "Stellenbosch, S.Africa",
    "date": "21 Jan - 1 Feb 1985",
    "meeting": "4th South African Summer School in Theoretical Physics (Quarks and Leptons)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-09",
    "location": "Zuoz, Switzerland",
    "date": "9-17 Apr 1985",
    "meeting": "SIN Spring School on Strong Interactions"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-08-12.5",
    "location": "Cambridge, Massachusetts",
    "date": "12-16 Aug 1985",
    "meeting": "1985 Cryogenic Engineering Conference and International Cryogenic Materials Conference (CEC/ICMC)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-22.1",
    "location": "Berkeley, California",
    "date": "22-24 May 1985",
    "meeting": "LBL Conference on Quark Confinement and Liberation"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-16",
    "location": "Rochester, New York",
    "date": "16-17 May 1985",
    "meeting": "7th Annual Montreal-Rochester-Syracuse-Toronto (MRST) High Energy Theory Meeting"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-05-28.2",
    "location": "Tsukuba, Japan",
    "date": "28-29 May 1984",
    "meeting": "Workshop on Data Acquisitions System for High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-03-28.1",
    "location": "Tsukuba, Japan",
    "date": "28-29 Mar 1984",
    "meeting": "Workshop on Future Accelerator and Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C87-07-27",
    "location": "Hamburg, Germany",
    "date": "27-31 Jul 1987",
    "meeting": "1987 International Symposium on Lepton and Photon Interactions at High Energies, 13th,"
  }, {
    "meeting": "LP 87 13th"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-28",
    "location": "Stanford, California",
    "date": "28 Jul - 5 Aug 1986",
    "meeting": "14th SLAC Summer Institute on Particle Physics: Probing the Standard Model (followed by Topical Conference) (SSI 86)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-19",
    "location": "St.Croix, Virgin Islands, USA",
    "date": "19-30 Jun 1986",
    "meeting": "4th NATO Advanced Study Institute on Techniques and Concepts of High-Energy Physics"
  }, {}]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-06",
    "location": "Cuernavaca, Mexico",
    "date": "6-10 Jan 1986",
    "meeting": "2nd International Conference on Quantum Chaos and 4th International Colloquium on Statistical Nuclear Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-24",
    "location": "Stanford, California",
    "date": "24-25 Oct 1985",
    "meeting": "12th Annual SSRL Users Group Meeting"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-09-18",
    "location": "Albuquerque, New Mexico",
    "date": "18-20 Sep 1985",
    "meeting": "DECUS Symposium"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-08-07",
    "location": "Novosibirsk, USSR",
    "date": "7-11 Aug 1986",
    "meeting": "13th International Conference on High-energy Accelerators"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-11",
    "location": "Batavia, Illinois",
    "date": "11-14 Nov 1985",
    "meeting": "Workshop on Triggering, Data Acquisition and Computing for High Energy / High Luminosity Hadron-Hadron Colliders"
  }, {
    "meeting": "high-energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-07-15.3",
    "location": "San Miniato, Italy",
    "date": "15-26 Jul 1985",
    "meeting": "Learning Physics and Mathematics via Computers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-04-09.2",
    "location": "Santander, Spain",
    "date": "9-14 April 1984",
    "meeting": "12th International Winter Meeting on Fundamental Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C84-11-15",
    "location": "Takayama, Japan",
    "date": "15-17 Nov 1984",
    "meeting": "Workshop: Toward Unification and Its Verification"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-03-25.3",
    "location": "Tsukuba, Japan",
    "date": "25-26 Mar 1985",
    "meeting": "Workshop on Future Plans for High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C87-01-28",
    "location": "San Francisco, California",
    "date": "28-31 Jan 1987",
    "meeting": "1987 Annual Joint Meeting of the American Physical Society and the American Association of Physics Teachers"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C87-03-16.1",
    "location": "New York, New York",
    "date": "16-20 Mar 1987",
    "meeting": "General Meeting of the American Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-28.1",
    "location": "Berkeley, California",
    "date": "28-30 Oct 1985",
    "meeting": "Workshop on New Solid State Devices for High-energy Physics"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-25",
    "location": "Rome, Italy",
    "date": "25-27 Nov 1985",
    "meeting": "International Symposium on Niels Bohr"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-16",
    "location": "Toyama, Japan",
    "date": "16-18 Apr 1986",
    "meeting": "7th Workshop on Grand Unification: ICOBAN 86"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-02.4",
    "location": "Argonne, Illinois",
    "date": "2-20 Jun 1986",
    "meeting": "Informal Summer Institute on Superstrings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-10-31",
    "location": "Batavia, Illinois",
    "date": "31 Oct - 1 Nov 1985",
    "meeting": "2nd Gas Sampling Calorimetry Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-03",
    "location": "Sendai, Japan",
    "date": "3-8 Jun 1986",
    "meeting": "12th International Conference on Neutrino Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-01",
    "location": "Heidelberg, Germany",
    "date": "1-5 Jul 1986",
    "meeting": "International Symposium on Weak and Electromagnetic Interactions in Nuclei"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-15",
    "location": "Nashville, Tennessee",
    "date": "15-17 May 1986",
    "meeting": "7th Vanderbilt Conference on High-energy Physics: Quarks, Strings and all the Rest"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-04-24.1",
    "location": "Zvenigorod, USSR",
    "date": "24-27 Apr 1985",
    "meeting": "All Union Seminar on Experimental Programs at Meson Factories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-07",
    "location": "Trieste, Italy",
    "date": "7-15 Apr 1986",
    "meeting": "Spring School on Supergravity and Supersymmetry (followed by 3 day Workshop)"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-30.3",
    "location": "Trieste, Italy",
    "date": "30 Jun - 15 Aug 1986",
    "meeting": "Summer Workshop on High-energy Physics and Cosmology"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-11-10",
    "location": "Trieste, Italy",
    "date": "10-28 Nov 1986",
    "meeting": "Workshop on Representation Theory of Lie Groups"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-09-22",
    "location": "Shoresh, Israel",
    "date": "22-25 Sep 1986",
    "meeting": "XIIth International Symposium on Discharges and Electrical Insulation in Vacuum"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-09-22.2",
    "location": "Beijing, China",
    "date": "22 Sep - 17 Oct 1986",
    "meeting": "Regional College on Microprocessors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-12-15",
    "location": "Santa Barbara, California",
    "date": "15-20 Dec 1986",
    "meeting": "Conference on Superstrings"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-27",
    "location": "Boston, Massachusetts",
    "date": "27-30 May 1986",
    "meeting": "30th International Symposium on Electron, Ion and Photon Beams"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-18",
    "location": "Arlington, Virginia",
    "date": "18-21 Nov 1985",
    "meeting": "COMPCON Fall '85"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-25.1",
    "location": "Tignes (Savoie), France",
    "date": "25 Jan - 1 Feb 1986",
    "meeting": "6th Moriond Workshop: Massive Neutrinos in Particle Physics and Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-09",
    "location": "Les Arcs, France",
    "date": "9-16 Mar 1986",
    "meeting": "XXIst Rencontre de Moriond: Perspectives in Electroweak Interactions and Unified Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-09.1",
    "location": "Les Arcs, France",
    "date": "9-16 Mar 1986",
    "meeting": "XXIst Rencontre de Moriond: Accretion Processes in Astrophysics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-16",
    "location": "Les Arcs, France",
    "date": "16-22 Mar 1986",
    "meeting": "XXIst Rencontres de Moriond: Strong Interactions and Gauge Theories"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-01",
    "location": "Paris, France",
    "date": "1-5 Apr 1986",
    "meeting": "VIIth International Workshop on Photon-Photon Collisions"
  }, {
    "meeting": "photon"
  }, {
    "meeting": "7th Photon"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-05",
    "location": "San Miniato, Italy",
    "date": "5-9 May 1986",
    "meeting": "2nd Topical Seminar on Perspectives for Experimental Apparatus at Future High-energy Machines"
  }, {
    "meeting": "high energy"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-07-24",
    "location": "Berkeley, California",
    "date": "24 Jul - 15 Aug 1986",
    "meeting": "Workshop on Cosmology and Particle Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-01-13",
    "location": "Montana, Switzerland",
    "date": "13-17 Jan 1986",
    "meeting": "International Workshop on Polarized Sources and Targets"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-08",
    "location": "Santa Fe, New Mexico",
    "date": "8-11 Apr 1986",
    "meeting": "2nd Workshop on Local Equilibrium in Strong Interaction Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-10.1",
    "location": "Neuchatel, Switzerland",
    "date": "10-11 Apr 1986",
    "meeting": "Spring Meeting of the Swiss Physical Society"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-17",
    "location": "Phoenix, Arizona",
    "date": "14-17 Apr 1986",
    "meeting": "24th International Magnetics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-04-13",
    "location": "Pacific Grove, California",
    "date": "13-17 Apr 1986",
    "meeting": "Quark Matter 1986: 5th International Conference on Ultra Relativistic Nucleus-Nucleus Collisions (QM 86)"
  }, {
    "meeting": "quark matter 86"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-13",
    "location": "Garmisch, Germany",
    "date": "13-16 May 1986",
    "meeting": "8th European Conference on Computational Physics: Computing in Plasma Physics"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-03-03",
    "location": "Munich, Germany",
    "date": "3-5 Mar 1986",
    "meeting": "4th European Symposium on Semiconductor Detectors: New Developments in Radiation Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-05-06.1",
    "location": "Batavia, Illinois",
    "date": "6-7 May 1985",
    "meeting": "Heavy Quark Workshop"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C85-11-07",
    "location": "Stanford, California",
    "date": "7 Nov 1985",
    "meeting": "SLAC Users' Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-01",
    "location": "Maratea, Italy",
    "date": "1-14 Jun 1986",
    "meeting": "NATO Advanced Study Institutes Programme: International Courses on Physics of Strong Fields"
  }, {
    "meeting": "ASI"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-05-22",
    "location": "Varna, Bulgaria",
    "date": "22-24 May 1986",
    "meeting": "12th Symposium on Photon Detectors"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-02.1",
    "location": "Peniscola, Spain",
    "date": "2-7 Jun 1986",
    "meeting": "17th International Seminar on Theoretical Physics and Cosmology"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-05",
    "location": "Dubrovnik, YU",
    "date": "5-14 Jun 1986",
    "meeting": "Nuclear Structure, Reactions and Symmetries"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-09.2",
    "location": "San Francisco, California",
    "date": "9-13 Jun 1986",
    "meeting": "CLEO '86: Conference on Lasers and Electro-optics and IQEC '86: 14th International Quantum Electronics Conference"
  }]
}, {
  "meeting_name": [{
    "coference_code": "C86-06-23.2",
    "location": "Bechyne, Czechoslovakia",
    "date": "23-27 Jun 1986",
    "meeting": "Selected Topics in Quantum Field Theory and Mathematical Physics"
  }]
}];
module.exports = conferencesMock;
});

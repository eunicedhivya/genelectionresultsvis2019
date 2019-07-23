var allianceData = [{"party":"NDA","lead":353,"lead%":65.12,"won":0,"won%":0},{"party":"UPA","lead":91,"lead%":16.78,"won":0,"won%":0},{"party":"Others","lead":98,"lead%":18.08,"won":0,"won%":0}];

var postpolldata = [{"SNO":"SN01","Poll":"Times Now-VMR","Party":"NDA","seats":306,"seats%":56.457564575645755,"Formation":"NDA Majority"},{"SNO":"SN01","Poll":"Times Now-VMR","Party":"UPA","seats":132,"seats%":24.354243542435423,"Formation":"NDA Majority"},{"SNO":"SN01","Poll":"Times Now-VMR","Party":"Others","seats":104,"seats%":19.152854511970535,"Formation":"NDA Majority"},{"SNO":"SN02","Poll":"Republic Bharat-Jan ki Baat","Party":"NDA","seats":287,"seats%":52.952029520295206,"Formation":"NDA Majority"},{"SNO":"SN02","Poll":"Republic Bharat-Jan ki Baat","Party":"UPA","seats":128,"seats%":24.354243542435423,"Formation":"NDA Majority"},{"SNO":"SN02","Poll":"Republic Bharat-Jan ki Baat","Party":"Others","seats":127,"seats%":19.152854511970535,"Formation":"NDA Majority"},{"SNO":"SN03","Poll":"TV9 Bharat-Varsh C-Voter","Party":"NDA","seats":287,"seats%":52.952029520295206,"Formation":"NDA Majority"},{"SNO":"SN03","Poll":"TV9 Bharat-Varsh C-Voter","Party":"UPA","seats":128,"seats%":23.616236162361623,"Formation":"NDA Majority"},{"SNO":"SN03","Poll":"TV9 Bharat-Varsh C-Voter","Party":"Others","seats":127,"seats%":19.152854511970535,"Formation":"NDA Majority"},{"SNO":"SN05","Poll":"Republic TV â€“ C-Voter","Party":"NDA","seats":296,"seats%":54.61254612546126,"Formation":"NDA Majority"},{"SNO":"SN05","Poll":"Republic TV â€“ C-Voter","Party":"UPA","seats":126,"seats%":23.247232472324722,"Formation":"NDA Majority"},{"SNO":"SN05","Poll":"Republic TV â€“ C-Voter","Party":"Others","seats":120,"seats%":22.14022140221402,"Formation":"NDA Majority"},{"SNO":"SN06","Poll":"News Nation","Party":"NDA","seats":"282-290","seats%":52,"Formation":"NDA Majority"},{"SNO":"SN06","Poll":"News Nation","Party":"UPA","seats":"118-126","seats%":23,"Formation":"NDA Majority"},{"SNO":"SN06","Poll":"News Nation","Party":"Others","seats":"130-138","seats%":24.9,"Formation":"NDA Majority"},{"SNO":"SN07","Poll":"ABP News â€“ C voter","Party":"NDA","seats":267,"seats%":49.2619926199262,"Formation":"NDA Majority"},{"SNO":"SN07","Poll":"ABP News â€“ C voter","Party":"UPA","seats":127,"seats%":23.43173431734317,"Formation":"NDA Majority"},{"SNO":"SN07","Poll":"ABP News â€“ C voter","Party":"Others","seats":148,"seats%":27.30627306273063,"Formation":"NDA Majority"},{"SNO":"SN15","Poll":"Todays Chanakya","Party":"NDA","seats":350,"seats%":64.45672191528546,"Formation":"NDA Majority"},{"SNO":"SN15","Poll":"Todays Chanakya","Party":"UPA","seats":95,"seats%":17.52767527675277,"Formation":"NDA Majority"},{"SNO":"SN15","Poll":"Todays Chanakya","Party":"Others","seats":97,"seats%":17.863720073664823,"Formation":"NDA Majority"}]

var colorCodesList = {
    "Bharatiya Janata Party": "#F39849", //NDA
    "Bharatiya Janta Party": "#F39849", //NDA
    "NDA": "#F39849", //NDA
    "TRS": "#F39849", //NDA
    "Shivsena": "#F39849", //NDA
    "Telugu Desam": "#F39849", //NDA
    "Lok Jan Shakti Party": "#F39849", //NDA
    "Shiromani Akali Dal": "#F39849", //NDA
    "Rashtriya Lok Samta Party": "#F39849", //NDA
    "Apna Dal": "#F39849", //NDA
    "Samajwadi Party": "#F39849", //NDA
    "Swabhimani Paksha": "#F39849", //NDA
    "Pattali Makkal Katchi": "#F39849", //NDA
    "All India N.R. Congress": "#F39849", //NDA
    "Naga Peoples Front": "#F39849", //NDA
    "National Peoples Party": "#F39849", //NDA
    "RSPK(B)": "#F39849", //NDA
    "DMDK": "#F39849", //NDA
    "DMDK": "#F39849", //NDA
    "RPI(A)": "#F39849", //NDA
    "MDMK": "#F39849", //NDA
    "RSP": "#F39849", //NDA
    "UPA": "#F39849", //NDA
    "Revolutionary Socialist Party": "#F39849", //NDA
    "HJC(BL)": "#F39849", //NDA
    "Indian National Congress": "#E94927", // UPA
    "Nationalist Congress Party": "#E94927", //UPA
    "Rashtriya Janata Dal": "#E94927", //UPA
    "Jharkhand Mukti Morcha": "#E94927", //UPA
    "Indian Union Muslim League": "#E94927", //UPA
    "RSP(I)": "#E94927", //UPA
    "KC(M)": "#E94927", //UPA
    "Kerala Congress  (M)": "#E94927", //UPA
    "CPI": "#E94927", //UPA
    "BVA": "#E94927", //UPA
    "BPF": "#E94927", //UPA
    "RLD": "#E94927", //UPA
    "JKNC": "#E94927", //UPA
    "MD": "#E94927", //UPA
    "SJ(D)": "#E94927", //UPA
    "Others": "#538296", //Other
    "Jammu & Kashmir Peoples Democratic Party": "#538296", //Other
    "Janata Dal (United)": "#538296", //Other
    "Janata Dal (Secular)": "#538296", //Other
    "Aam Aadmi Party": "#538296",//Other
    "All India United Democratic Front": "#538296",//Other
    "All India Trinamool Congress": "#538296",//Other
    "Indian National Lok Dal": "#538296",//Other
    "AIADMK": "#538296",//Other
    "All India Anna Dravida Munnetra Kazhagam": "#538296",//Other
    "Telangana Rashtra Samithi": "#538296",//Other
    "Biju Janata Dal": "#538296",//Other
    "Yuvajana Sramika Rythu Congress Party": "#538296",//Other
    "Sikkim Democratic Front": "#538296",//Other
    "Communist Party of India  (Marxist)": "#538296",//Other
    "Communist Party of India": "#538296",//Other
    "Janata Dal (Secular)": "#538296",//Other
    "Independent": "#538296",//Other
    "Navodyam Party": "#538296",//Other
    "Janata Dal  (Secular)": "#538296",//Other
    "Janata Dal  (United)": "#538296",//Other
  };
  
  var colorCodesList2019 = {
    "Bharatiya Janata Party": "#F39849", //NDA
    "Pattali Makkal Katchi": "#F39849", //NDA
    "Shivsena": "#F39849", //NDA
    "Rashtriya Loktantrik Party": "#F39849", //NDA
    "All India Anna Dravida Munnetra Kazhagam": "#F39849", //NDA
    "People's Party of Arunachal": "#F39849", //NDA
    "Janata Dal (Secular)": "#F39849", //NDA
    "Janata Dal (United)": "#F39849", //NDA
    "Lok Jan Shakti Party": "#F39849", //NDA
    "Nationalist Democratic Progressive Party": "#F39849", //NDA
    "Shiromani Akali Dal": "#F39849", //NDA
    "Apna Dal (Soneylal)": "#F39849", //NDA
    "Janasena Party": "#F39849", //NDA
    "Indian National Congress": "#E94927", // UPA
    "Dravida Munnetra Kazhagam": "#E94927", // UPA
    "Nationalist Congress Party": "#E94927", // UPA
    "Revolutionary Socialist Party": "#E94927", // UPA
    "Jharkhand Mukti Morcha": "#E94927", // UPA
    "Jammu & Kashmir National Conference": "#E94927", // UPA
    "Kerala Congress (M)": "#E94927", // UPA
    "Rashtriya Janata Dal": "#E94927", // UPA
    "Viduthalai Chiruthaigal Katchi": "#E94927", // UPA
    "Indian Union Muslim League": "#E94927", // UPA
    "Communist Party of India (Marxist)": "#E94927", // UPA
    "Communist Party of India": "#E94927", // UPA
    "Bahujan Samaj Party": "#538296", // Others
    "All India Trinamool Congress": "#538296", // Others
    "Aam Aadmi Party": "#538296", // Others
    "Sikkim Krantikari Morcha": "#538296", // Others
    "Telangana Rashtra Samithi": "#538296", // Others
    "Naga Peoples Front": "#538296", // Others
    "National People's Party": "#538296", // Others
    "Samajwadi Party": "#538296", // Others
    "Yuvajana Sramika Rythu Congress Party": "#538296", // Others
    "All India Majlis-E-Ittehadul Muslimeen": "#538296", // Others
    "Biju Janata Dal": "#538296", // Others
    "AJSU Party": "#538296", // Others
    "All India United Democratic Front": "#538296", // Others
    "Independent": "#538296", // Others
    "Mizo National Front": "#538296", // Others
    "Telugu Desam": "#538296", // Others
    "Sikkim Democratic Front": "#538296", // Others
  };
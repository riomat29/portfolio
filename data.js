/* ==========================================================================
   ALL SITE CONTENT LIVES HERE. Edit this file; never touch index.html.
   - Add a project: copy one object inside `projects`, paste it, edit it.
   - Add a section (Publications, Awards, Volunteering...): add to `extra`.
   - 3D models: export from SolidWorks as .glb (File > Save As > glTF/GLB, or
     via Blender), drop into /models, set  model: "models/yourfile.glb".
     No model yet? Set  placeholder: "robot" | "arm" | "mold" | "fixture" | "car" | "agv" | "clutch" | "bars" | "tank" | "pipe"
   ========================================================================== */
window.PORTFOLIO = {
  profile: {
    name: "Rijo Mathew",
    title: "Mechanical Engineer",
    tagline: "Mechanical Engineer with 5+ years in petrochemical and automotive manufacturing, now specializing in robotics and automation. Completing an MEng at Western University and an Automation Engineering co-op at Linamar, working with ABB robots and Allen-Bradley PLCs.",
    location: "Kitchener, ON",
    // Email is stored base64-encoded so scrapers do not find it in the page source. To change it: btoa("you@example.com") in the browser console.
    emailB64: "cmlvbWF0MjlAZ21haWwuY29t",
    // Optional contact form: paste a Formspree-style endpoint (https://formspree.io/f/xxxx) to show a form. Leave "" for none.
    formEndpoint: "",
    linkedin: "http://www.linkedin.com/in/rijzmatw",
    github: "https://riomat29.github.io/portfolio/",
    // Phone number intentionally NOT published on a public site (spam / privacy).
    roles: ["Mechanical Engineer", "Robotics & Automation"]  // typed under the name in the hero, one after the other, then repeats
  },

  // Animated counters. value: "projects" = auto-count of entries in `projects`.
  stats: [
    { value: 5,          suffix: "+", label: "Years in industry" },
    { value: 200,        suffix: "+", label: "Drawings & BOMs validated" },
    { value: 35,         suffix: "",  label: "Shutdown work packages led" },
    { value: "projects", suffix: "",  label: "Engineering projects" }
  ],

  // Filter tab groups. Each project tag (the words split by "·") listed here is merged into one menu entry.
  // Tags not listed appear as their own entry. Add or rename groups freely.
  filterGroups: {
    "Robotics & Automation": ["Robotics", "PLC", "Automation"],
    "Prototype & Design": ["Design", "Tooling", "Design for Manufacture", "DfAM", "Prototyping", "Fabrication"],
    "Quality & Simulation Test": ["Inspection", "NDT", "Simulation"],
    "Machine Learning": ["Machine Learning", "Reliability"]
  },

  about: [
    "Mechanical Engineer with 5+ years across petrochemical and automotive manufacturing, now specializing in robotics & automation engineering.",
    "Currently completing an Automation Engineering Co-op at Linamar (Guelph, ON), working hands-on with ABB RobotStudio, industrial robotics, Allen-Bradley PLCs (RSLinx Classic, Studio 5000), automated welding cell configuration, and SolidWorks/AutoCAD.",
    "MEng in Mechanical & Materials Engineering at Western University, with coursework in Robotics & Manufacturing Automation, FEA, advanced CAE, and machine learning for predictive maintenance.",
    "Previously at L&T Hydrocarbon Engineering on the Dangote Refinery project and as Mechanical Lead at S-Chem Group (Saudi Arabia), managing static equipment in live petrochemical environments.",
    "Where I am heading:\nNext: Automation and robot-cell integration engineer. I want to build and commission robotic welding and handling cells, working across mechanical design, robot programming and PLC/HMI controls, and I am working toward my P.Eng.\nThen: A hybrid automation and systems role, owning cell projects from design through acceptance testing, and adding embedded and Python skills for hardware and test automation, with mechatronics and new-product development as a later direction.\nLonger term: Leading a team of engineers.",
    "Technical toolkit: SolidWorks | AutoCAD | ABB RobotStudio | Allen-Bradley PLC/HMI | Python | FEA/CAE | Machine Learning",
    "Backed by field experience across three countries and a technical toolkit spanning mechanical engineering, CAD, robotics, and data-driven systems, I am actively building a long-term career in Robotics & Automation. Open to full-time Automation, Robotics & Mechanical Engineering roles in 2027."
  ],

  skills: [
    { group: "Automation & Robotics", items: ["Allen-Bradley Studio 5000", "HMI integration", "ABB RobotStudio", "MATLAB/Simulink", "Arduino & sensor integration"] },
    { group: "CAD / FEA",     items: ["SolidWorks (CSWP)", "AutoCAD", "Siemens NX (learning)", "FEA (SolidWorks)"] },
    { group: "Prototyping",   items: ["FDM 3D printing (PLA, PETG)", "DfAM", "Tooling & fixture design", "Injection mold design"] },
    { group: "Quality", items: ["Ultrasonic (UT)", "Radiographic (RT)", "Magnetic particle (MT)", "Liquid penetrant (PT)", "Eddy current (ET)", "Visual (VT)"] },
    { group: "Machine Learning", items: ["Python", "Scikit-learn", "Pandas", "SMOTE", "Supervised learning", "MATLAB"] },
    { group: "Software",      items: ["SolidWorks EPDM", "Teamcenter PDM (exposure)", "Microsoft Office", "ManuX"] },
    { group: "Manufacturing & Process Engineering", items: ["Lean / Kaizen / 5S", "Six Sigma", "DFM", "PPAP", "Root cause analysis", "HAZOP", "ECN / NPI", "P&ID", "Turnaround management", "Technical documentation"] }
  ],

  experience: [
    {
      role: "Automation Engineer Co-op", org: "Linamar", place: "Guelph, ON", dates: "Sep 2026 – Present",
      bullets: [
        "Program and test PLC ladder logic in Allen-Bradley Studio 5000 / RSLogix 5000 for timer-based sequential control.",
        "Support commissioning of a new ABB robot cell; assist design review of end effectors, fixtures and jigs against production and cycle-time requirements.",
        "Reconcile weld map IDs against CAD part drawings, finding missing welds and correcting CAD files for production release.",
        "Use FactoryTalk monitoring to track cell downtime and runtime."
      ]
    },
    {
      role: "MEng Candidate, Mechanical & Materials Engineering", org: "Western University", place: "London, ON", dates: "Sep 2025 – Apr 2027 (Expected)",
      bullets: [
        "Concurrently worked part-time as a Mechanical Design Intern.",
        "Designed tooling and assembly fixtures in SolidWorks using DfAM; reached ±5–10% dimensional uniformity across 12 outlet configurations in 3 FDM design-build-test cycles.",
        "Applied R&D in smart manufacturing: five supervised ML models (LR, RF, SVM, GBM, GNN) on the AI4I 2020 dataset to classify equipment failure modes."
      ]
    },
    {
      role: "Team Member", org: "FIO Automotive Canada (Futaba)", place: "Ontario", dates: "Feb 2023 – Nov 2024",
      bullets: [
        "Mechanical support to robotic maintenance teams during planned shutdowns at a high-volume automotive components plant (500+ units/day), ensuring on-time line restart.",
        "Worked the production floor with exposure to lean and 5S practices."
      ]
    },
    {
      role: "Junior Mechanical Engineer", org: "L&T Hydrocarbon Engineering", place: "Dangote Oil Refinery", dates: "Jan 2020 – Jul 2021",
      bullets: [
        "Reviewed and validated 200+ mechanical drawings and BOMs for pressure vessels, heat exchangers and reactors against ASME/API standards, including tolerance and fit/clearance checks across multi-vendor packages.",
        "Project: Dangote Refinery & Petrochemical, JNK Heaters Co. (Korea) package. Joined L&T on a contract basis as a site engineer, then converted to permanent Junior Mechanical Engineer in January 2020 based on performance.",
        "Deployed on the Dangote Oil Refinery Project, one of the largest refinery construction projects in the world, responsible for static equipment engineering across the project lifecycle from design to commissioning.",
        "Contract role: supervised day-to-day mechanical site works, ensuring construction and fabrication followed approved engineering drawings and project specifications.",
        "Reported directly to welding and production engineers, giving real-time site status updates and flagging non-conformances for immediate resolution.",
        "Monitored workmanship quality on site, checking compliance with welding procedures, fit-up standards and dimensional tolerances.",
        "Supported coordination between site execution teams and engineering to close out technical issues and keep construction on progress.",
        "Supervised fabrication activities on site, verifying that manufactured components conformed to approved drawings and quality standards.",
        "Coordinated with Third Party Inspection (TPI) agencies and vendors so equipment met client and regulatory requirements at every stage of fabrication and delivery.",
        "Supported commissioning of static equipment, carrying out pre-commissioning checks and punch-list clearance ahead of plant handover.",
        "Maintained technical documentation including inspection records, material certificates and as-built drawing registers.",
        "Worked closely with procurement, QA/QC and construction teams to resolve technical queries and keep the JNK Heaters package moving."
      ]
    },
    {
      role: "Mechanical Engineering Technologist / Shutdown Lead", org: "S-Chem Group", place: "Jubail, Saudi Arabia", dates: "Feb 2018 – May 2019",
      bullets: [
        "Led 10+ technicians through planned shutdowns across 35 work packages: on schedule, zero safety incidents.",
        "Maintained P&IDs for 3 operating units and built inspection schedules for 80+ work packages in a 21-day turnaround.",
        "Prepared turnarounds for static equipment and prioritised maintenance work; executed mechanical work and re-commissioning of pressure vessels, heat exchangers and rotating equipment at the Jubail Chevron Phillips (JCP) site.",
        "Led end-to-end maintenance and turnaround preparation for static equipment at a major petrochemical facility in JCP.",
        "Reviewed, inspected and prepared static equipment (pressure vessels, heat exchangers, columns) for planned turnaround activities, ensuring compliance with safety and operational standards.",
        "Created and updated P&ID drawings to support technician teams during maintenance execution.",
        "Conducted performance reviews of static systems, identifying maintenance priorities and flagging non-conformances ahead of shutdown.",
        "Coordinated between inspection, operations and maintenance teams in turnaround planning and execution to meet critical schedule milestones."
      ]
    },
    {
      role: "Junior Mechanical Site Engineer", org: "L&T Hydrocarbon Engineering", place: "Chennai, India", dates: "Jun 2017 – Jan 2018",
      bullets: [
        "First industry role after graduation, embedded on an active fabrication site at L&T Hydrocarbon Engineering, gaining hands-on exposure to mechanical fabrication and EPC site execution.",
        "Worked alongside manufacturing and planning engineers on a live fabrication site with conventional and robotic welding operations, building a practical understanding of fabrication workflows and production sequencing.",
        "Read and interpreted mechanical and fabrication drawings on site, translating engineering documentation into physical fabrication activities.",
        "Observed and supported welding operations, including robotic welding systems, for early exposure to automated fabrication in an industrial setting.",
        "Developed foundational skills in EPC site practices, fabrication quality standards, welding procedures and team coordination."
      ]
    },
    {
      role: "Mechanical Engineering Intern (Co-op)", org: "Kerala Automobiles Limited (KAL)", place: "Kerala, India", dates: "Mar 2016 – Jun 2016",
      bullets: [
        "Co-op internship at Kerala Automobiles Limited, contributing to a design and fabrication project on hydraulic clutch activation systems (see Projects).",
        "Designed and developed a hydraulic clutch activation mechanism, applying principles of fluid power and power transmission.",
        "Performed design calculations and assisted in the fabrication and testing of the prototype system.",
        "Worked with the R&D team on design validation and simulation, including stress analysis.",
        "Made the design verification plan (DVP) for the system.",
        "Inspected and worked alongside a hybrid electric vehicle drivetrain, compared its transmission and clutch setup with the three-wheeler's, studied its key components and attended a briefing on it.",
        "Gained practical exposure to power transmission components in an automotive manufacturing environment.",
        "Collaborated with the engineering team to document design outcomes and validate system performance."
      ]
    },
    {
      role: "Mechanical Engineering Intern (Co-op)", org: "HMT Machine Tools Limited", place: "Kerala, India", dates: "Mar 2015 – Jun 2015",
      bullets: [
        "Co-op internship at HMT Machine Tools Limited, one of India's leading machine tool manufacturers, gaining foundational exposure to manufacturing operations and production engineering.",
        "Observed and participated in manufacturing operations including machining, assembly and quality control processes.",
        "Supported the production team in day-to-day operational tasks, developing practical understanding of CNC machining and tooling.",
        "Made work instructions and carried out a cycle time study.",
        "Learned shop floor workflows, production scheduling and quality inspection procedures in a high-volume manufacturing environment.",
        "Developed foundational skills in manufacturing process planning and machine tool operation."
      ]
    }
  ],

  /* ---------------------------  PROJECTS  ---------------------------
     Copy any block to add a project. Fields:
       id, title, tag, status ("Complete" | "In progress"), dates, summary,
       problem (text), approach[], results[], learned[]  (optional: empty ones are hidden),
       bullets[], tools[], model ("models/x.glb" or ""), placeholder, image, links[{label,url}]
  ------------------------------------------------------------------- */
  projects: [
    {
      id: "linamar-robot-cell",
      title: "Robot Cell Commissioning & PLC Control",
      tag: "Automation · Robotics",
      status: "In progress", dates: "Sep 2026 – Present",
      summary: "Co-op work at Linamar on an ABB robot automation cell and Allen-Bradley PLC control.",
      bullets: [
        "Program and test PLC ladder logic in Studio 5000 / RSLogix 5000 for timer-based sequential control.",
        "Support commissioning of a new ABB robot cell, including design review of end effectors, fixtures and jigs against production and cycle-time requirements.",
        "Reconcile weld map IDs against CAD part drawings, finding missing welds and correcting the CAD files for production release.",
        "Track cell downtime and runtime in FactoryTalk monitoring."
      ],
      tools: ["Allen-Bradley Studio 5000", "ABB RobotStudio", "FactoryTalk", "CAD"],
      problem: "A new ABB robot cell needed PLC control logic, a design review of its tooling, and clean weld data before it could be released to production.",
      approach: ["Wrote and tested timer-based sequential ladder logic in Studio 5000 / RSLogix 5000.", "Supported commissioning, including design review of end effectors, fixtures and jigs against production and cycle-time requirements.", "Reconciled weld map IDs against the CAD part drawings.", "Tracked cell downtime and runtime in FactoryTalk monitoring."],
      results: ["Found missing welds and corrected the CAD files for production release.", "Cell downtime and runtime visible through FactoryTalk monitoring.", "Work is ongoing; commissioning results will be added here."],
      learned: ["A robot cell only commissions cleanly when control logic, tooling design and released drawings all agree.", "Weld maps and CAD drawings drift apart unless someone checks one against the other."],
      model: "", placeholder: "robot", image: "", links: []
    },
    {
      id: "traffic-light-plc-hmi",
      title: "Four-Way Traffic Light Control with HMI",
      tag: "Automation · PLC",
      status: "Complete", dates: "2026", /* TODO: exact month range */
      summary: "Linamar onboarding and training project: a four-way traffic light controller on an Allen-Bradley CompactLogix PLC with a FactoryTalk View HMI.",
      bullets: [
        "Programmed the four-way intersection sequence in Studio 5000 on an Allen-Bradley CompactLogix PLC, with an advance left-turn phase.",
        "Added an emergency-vehicle scenario, pedestrian crossing and a bicycle signal with its own switch.",
        "Built a FactoryTalk View HMI showing moving cars and live signal lights.",
        "Built during onboarding at Linamar as a training project to test and build my PLC and HMI knowledge."
      ],
      tools: ["Allen-Bradley CompactLogix", "Studio 5000", "FactoryTalk View"],
      problem: "A four-way intersection needs safe, ordered signal phases, and has to respond to emergency vehicles, pedestrians and cyclists without conflicting greens.",
      approach: ["Designed the signal sequence for a four-way intersection with an advance left phase.", "Added handling for emergency-vehicle, pedestrian-crossing and bicycle-signal scenarios, including a manual switch.", "Built a FactoryTalk View HMI that animates the cars and lights so the logic can be watched running."],
      results: [/* TODO: test outcome */],
      learned: [/* TODO: your own words: state logic, timers, interlocks, HMI design */],
      model: "", placeholder: "signal", image: "", links: []
    },
    {
      id: "robotic-arm",
      title: "4-DOF Robotic Arm: Pick & Place",
      tag: "Robotics · PLC",
      status: "Complete", dates: "Sep 2021 – Apr 2022",
      summary: "Conestoga College: a 4-DOF robotic arm with a modular gripper for automated assembly tasks.",
      bullets: [
        "Modelled the full assembly in SolidWorks: linkages, joint geometry, end effector.",
        "Designed a modular gripper and integrated sensors into the control system.",
        "Implemented PLC-based sequential motion control and validated by physical testing.",
        "Documented outcomes in a formal capstone report."
      ],
      tools: ["SolidWorks", "FEA", "PLC", "Arduino", "Sensor integration"],
      problem: "Assembly-line pick and place needed a compact arm with a gripper that could be swapped for different parts.",
      approach: ["Modelled the full assembly in SolidWorks: linkages, joint geometry and end effector.", "Designed a modular gripper and integrated sensors into the control system.", "Implemented PLC-based sequential motion control.", "Used finite element analysis to check the design, then validated by physical testing."],
      results: ["A working 4-DOF arm validated by physical testing, with outcomes documented in a formal report."],
      learned: ["Joint limits and gripper size have to be decided together with the control sequence, not after it."],
      model: "", placeholder: "arm", image: "", links: []
    },
    {
      id: "drip-irrigation",
      title: "Modular 3D-Printed Drip Irrigation System",
      tag: "DfAM · Prototyping",
      status: "Complete", dates: "Sep – Dec 2025",
      summary: "Engineered a modular, 3D-printed drip irrigation system, using additive manufacturing to improve water distribution efficiency and reduce material cost.",
      bullets: [
        "Applied Design for Additive Manufacturing (DfAM) principles to optimise internal flow channels for uniform discharge.",
        "Designed emitters and connectors in SolidWorks, focusing on flow uniformity and ease of assembly.",
        "Fabricated prototypes by FDM 3D printing (PLA/PETG) and evaluated print accuracy and durability.",
        "Ran flow rate tests to validate performance across multiple outlets under varying pressure conditions, collecting the water from each outlet in a graduated cylinder over a timed 45-second interval, repeated 10 times per outlet.",
        "Iteratively optimised the geometry to minimise pressure losses and clogging risk.",
        "Used rapid prototyping cycles to speed up design validation and refinement.",
        "Result: a functional prototype with consistent flow distribution, flow variation within ±5–10% across outlets, and reduced material usage."
      ],
      tools: ["SolidWorks", "FDM (PLA/PETG)", "DfAM"],
      problem: "A modular drip irrigation system had to deliver uniform water discharge across its outlets, and be cheap to produce on a desktop FDM 3D printer.",
      approach: ["Applied DfAM principles to shape the internal flow channels for uniform discharge.", "Designed emitters and connectors in SolidWorks for flow uniformity and ease of assembly.", "Printed prototypes in PLA and PETG, and checked print accuracy and durability.", "Ran flow rate tests across multiple outlets under varying pressure, collecting the water from each outlet in a graduated cylinder over a timed 45-second interval, repeated 10 times per outlet, then adjusted the geometry to cut pressure losses and clogging risk."],
      results: ["Functional prototype with flow variation within ±5–10% across outlets.", "Reduced material usage, showing the potential of additive manufacturing for low-cost, scalable agricultural systems."],
      learned: ["Each print, test and adjust cycle narrowed the error. Design choices for additive manufacturing mattered as much as printer settings."],
      model: "", placeholder: "fixture", image: "", links: []
    },
    {
      id: "f1-scan-to-cad",
      title: "Scan-to-CAD: Formula One Surface Reconstruction",
      tag: "Reverse Engineering",
      status: "Complete", dates: "May – Aug 2026",
      summary: "Photogrammetry scan of a 1:8 scale F1 model rebuilt as solid, manifold CAD.",
      bullets: [
        "Reconstructing compound-curved bodywork, multi-element wing profiles and suspension components.",
        "NURBS automatic surface fitting plus manual surface patch construction.",
        "Target output: solid models suitable for FEA, CAM toolpaths and rapid prototyping."
      ],
      tools: ["Photogrammetry", "NURBS surfacing", "CAD"],
      problem: "A photogrammetry scan of a 1:8 scale Formula One model gave surface data, not usable CAD. The compound-curved bodywork, multi-element wings and suspension parts needed rebuilding as solid models.",
      approach: ["Used NURBS automatic surface fitting on the scan data.", "Built surface patches by hand where curvature changed quickly.", "Reconstructed bodywork, wing profiles and suspension components."],
      results: ["Solid, manifold CAD models suitable for FEA, CAM toolpaths and rapid prototyping."],
      learned: ["Automatic fitting gets close, but clean surfaces still need manual patch construction where the curvature changes fast."],
      model: "", placeholder: "car", image: "", links: []
    },
    {
      id: "scooter-reverse-engineering",
      title: "Reverse Engineering and 3D Printing a Kids Scooter",
      tag: "Reverse Engineering · Prototyping",
      status: "Complete", dates: "", /* TODO: dates, CAD software, printer and material */
      summary: "Reverse engineered a kids scooter and 3D printed it, as part of the FEA course in my MEng at Western University.",
      bullets: [
        "Reverse engineered a kids scooter, then 3D printed it.",
        "Completed as part of the FEA course in my MEng at Western University."
        /* TODO: how you measured or scanned it, what parts you modelled and printed, fits and tolerances */
      ],
      tools: [/* TODO: CAD software, printer, material */],
      /* TODO: problem, approach, results (printed parts that fit or work, print time, mass) and what you learned */
      model: "", placeholder: "scooter", image: "", links: []
    },
    {
      id: "agv",
      title: "Flexible Cell Production Using AGVs",
      tag: "Robotics · Automation",
      status: "Complete", dates: "Jan – Aug 2026",
      summary: "Two-person design project developing an AGV-based material handling system for flexible cell production.",
      bullets: [ /* TODO: add scope, your role, sensors, controls, results */ ],
      tools: [],
      problem: "Flexible cell production needs material moved between stations without fixed conveyors, which an automated guided vehicle (AGV) can do.",
      /* TODO: add approach, results (with numbers) and what you learned */
      model: "", placeholder: "agv", image: "", links: []
    },
    {
      id: "injection-mold",
      title: "Plastic Injection Mold: Capstone Design",
      tag: "Tooling · Design for Manufacture",
      status: "Complete", dates: "May – Dec 2022",
      summary: "End-to-end tooling design deliverable at Conestoga College.",
      bullets: [
        "Designed a complete injection mold assembly in SolidWorks.",
        "Produced a 40+ part BOM, facility layout, production timeline and QC plan."
      ],
      tools: ["SolidWorks", "CAD/CAM", "BOM", "DFM"],
      problem: "A plastic part needed a complete tooling and production plan, from the mold itself to the facility that would run it.",
      approach: ["Designed a complete injection mold assembly in SolidWorks.", "Developed an implementation plan covering the bill of materials, facility layout, production timeline and quality control."],
      results: ["A full deliverable package: mold design, a 40+ part BOM, facility layout, production timeline and QC plan."],
      learned: ["Mold design decisions set cost and cycle time for everything downstream, so manufacturability has to be checked early."],
      model: "", placeholder: "mold", image: "", links: []
    },
    {
      id: "predictive-maintenance-ml",
      title: "ML-Based Predictive Maintenance",
      tag: "Machine Learning · Reliability",
      status: "Complete", dates: "Jan – Jul 2026",
      summary: "Supervised learning on the AI4I 2020 dataset to find fault patterns in production equipment.",
      bullets: [
        "Five supervised models (LR, RF, SVM, GBM, GNN) compared for classifying equipment failure modes.",
        "Aimed at smart-manufacturing use: data-driven decisions for process improvement and equipment reliability."
      ],
      tools: ["Python", "Scikit-learn", "Pandas", "SMOTE", "MATLAB"],
      problem: "Unplanned equipment failures are costly in smart manufacturing, and failure data has few fault examples, which biases models toward the healthy class.",
      approach: ["Used the AI4I 2020 predictive maintenance dataset.", "Balanced the classes with SMOTE.", "Compared five supervised models (logistic regression, random forest, SVM, gradient boosting and a graph neural network) for classifying failure modes."],
      learned: ["With rare faults, the choice of evaluation metric matters as much as the choice of model."],
      /* TODO: add results, for example accuracy / recall per model */
      model: "", placeholder: "bars", image: "", links: []
    },
    {
      id: "can-bus-afr",
      title: "CAN Bus-Based Air–Fuel Ratio Control System",
      tag: "Automation",
      status: "Complete", dates: "Jan – Apr 2026",
      summary: "Developed a CAN bus-based control system to monitor and regulate the air–fuel ratio.",
      bullets: [ /* TODO: add scope, your role, methods, results */ ],
      tools: ["CAN bus"],
      problem: "An internal combustion engine's air–fuel ratio needed to be monitored and regulated by a control system built on a CAN bus.",
      /* TODO: add approach, results (with numbers) and what you learned */
      model: "", placeholder: "car", image: "", links: []
    },
    {
      id: "battery-failure-analysis",
      title: "Failure Analysis: Li-Ion & Solid-State Batteries",
      tag: "Simulation",
      status: "Complete", dates: "Jan – Apr 2026",
      summary: "Failure analysis of lithium-ion and solid-state batteries using finite element analysis.",
      bullets: [ /* TODO: add scope, your role, methods, results */ ],
      tools: ["FEA"],
      problem: "Lithium-ion and solid-state batteries fail in different ways, and the failure modes needed to be analysed and compared.",
      approach: ["Used finite element analysis to study the failure behaviour."],
      /* TODO: add approach, results (with numbers) and what you learned */
      model: "", placeholder: "fixture", image: "", links: []
    },
    {
      id: "hydraulic-clutch",
      title: "Hydraulic Clutch Activation System",
      tag: "Design · Fabrication",
      status: "Complete", dates: "Mar 2016 – Jun 2016", /* TODO: confirm dates now that this is described as an undergraduate pre-capstone project */
      summary: "Designed and fabricated a hydraulic clutch activation system for a three-wheeler, as an undergraduate pre-capstone project.",
      bullets: [
        "Replaced the conventional mechanical clutch linkage with a hydraulic system to improve clutch engagement smoothness, reduce driver effort and improve vehicle controllability.",
        "Mechanical and hydraulic system design for the three-wheeler application.",
        "Selected and sized the master cylinder, slave cylinder and hydraulic lines.",
        "Integrated the hydraulic circuit within the existing three-wheeler chassis layout.",
        "Fabricated and assembled the complete system, then tested and validated its performance."
      ],
      tools: ["SolidWorks", "AutoCAD", "Hydraulics", "Prototyping", "Fabrication"],
      problem: "A three-wheeler used a mechanical clutch linkage. The aim was to replace it with a hydraulic system to improve clutch engagement smoothness, reduce driver effort and enhance overall vehicle controllability.",
      approach: ["Designed the mechanical and hydraulic system for the three-wheeler application.", "Selected and sized the master cylinder, slave cylinder and hydraulic lines.", "Integrated the hydraulic circuit within the existing chassis layout.", "Modelled the layout in SolidWorks and AutoCAD.", "Carried out stress analysis with the R&D team as part of design validation and simulation.", "Made the design verification plan (DVP).", "Fabricated and assembled the complete system.", "Tested it and validated its performance."],
      results: ["A fabricated, assembled hydraulic clutch activation system, tested and validated for performance."],
      learned: ["Hands-on experience in automotive systems design, fluid power engineering and prototype development."],
      model: "", placeholder: "clutch", image: "", links: []
    },
    {
      id: "pipeline-ndt",
      title: "Pipeline Integrity Testing (NDT)",
      tag: "Inspection · NDT",
      status: "Complete", dates: "Industry project",
      summary: "Ultrasonic and radiographic inspection of oil and gas pipelines.",
      bullets: [
        "UT and RT inspections of oil and gas pipelines to ASME and ASTM standards."
      ],
      tools: ["UT", "RT", "ASME", "ASTM"],
      problem: "Oil and gas pipelines have to be inspected without damaging them, to confirm they meet code.",
      approach: ["Carried out ultrasonic (UT) and radiographic (RT) inspections to ASME and ASTM standards."],
      /* TODO: add approach, results (with numbers) and what you learned */
      model: "", placeholder: "pipe", image: "", links: []
    },
    {
      id: "green-ammonia",
      title: "Green Ammonia as a Renewable Energy Carrier",
      tag: "Energy Systems",
      status: "Complete", dates: "Jan – Mar 2026",
      summary: "Technical review of green ammonia production, storage and applications.",
      bullets: [
        "Reviewed how green ammonia is produced, stored and used as an energy carrier.",
        "Combined thermodynamic analysis with an energy-systems literature review."
      ],
      tools: ["Thermodynamic analysis", "Literature review"],
      problem: "Green ammonia is proposed as a renewable energy carrier, but its efficiency limits were unclear.",
      approach: ["Reviewed how green ammonia is produced, stored and used.", "Combined a thermodynamic analysis with an energy-systems literature review."],
      results: ["A project report that critically analyses the efficiency limitations of green ammonia as an energy carrier."],
      learned: ["Looking at the whole chain, from production to end use, shows where the energy is actually lost."],
      model: "", placeholder: "tank", image: "", links: []
    },
    {
      id: "nuclear-emergency-cooling",
      title: "Emergency Cooling System: Risk Assessment & Management",
      tag: "Risk Assessment",
      status: "Complete", dates: "Sep – Dec 2025",
      summary: "Risk assessment and risk management study of the emergency cooling system of a nuclear reactor.",
      bullets: [ /* TODO: scope, your role, risk methods used (e.g. FMEA, fault tree), results */ ],
      tools: [],
      problem: "A nuclear reactor depends on its emergency cooling system, so the risks to that system had to be identified, assessed and managed.",
      /* TODO: approach (methods, risk criteria), results and what you learned */
      model: "", placeholder: "pipe", image: "", links: []
    },
    {
      id: "saudi-chevron-shutdown",
      title: "Full Maintenance Shutdown 2018/19, Saudi Chevron",
      tag: "Turnaround",
      status: "Complete", dates: "Jan – Mar 2018",
      summary: "Engineering management and technical work on a full maintenance shutdown at Saudi Chevron, with S-Chem Group.",
      bullets: [ /* TODO: add scope, your role, methods, results */ ],
      tools: [],
      problem: "A full maintenance shutdown at Saudi Chevron had to be planned and executed within a fixed window.",
      /* TODO: add approach, results (with numbers) and what you learned */
      model: "", placeholder: "tank", image: "", links: []
    }
  ],

  education: [
    { title: "MEng, Mechanical & Materials Engineering", school: "Western University, London ON", dates: "Sep 2025 – Apr 2027 (Expected)",
      note: "Coursework complete. Focus: Robotics & Manufacturing Automation, Systems & Controls, FEM & Solid Mechanics, Advanced CAE & Reverse Engineering, Additive Manufacturing" },
    { title: "Ontario College Graduate Certificate: Applied Manufacturing Management - Design Integration", school: "Conestoga College, Waterloo ON", dates: "Sep 2021 – Dec 2022",
      note: "Design for Manufacture, Lean Systems, Product Development" },
    { title: "BEng, Mechanical Engineering", school: "Anna University, Chennai", dates: "2013 – 2017",
      note: "WES Canada credential assessment: Canadian bachelor’s degree (4-year) equivalency. Washington Accord recognized" }
  ],

  // Verify these against your credential records before publishing.
  certifications: ["CSWP (Certified SolidWorks Professional)", "CSWP-SU (SolidWorks Professional, Surfacing)", "CSWA-S (SolidWorks Associate, Simulation)", "Working toward P.Eng (PEO)"],

  /* Extra sections appear automatically. Example (delete the // to enable):
  extra: [
    { title: "Awards", items: [ { heading: "Dean's List", text: "2026" } ] }
  ] */
  extra: []
};

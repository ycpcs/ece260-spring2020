
var PREPOPULATE = false;

var courseInfo = {
    courseName: "ECE260: Fundamentals of Computer Engineering",
    classDays: ["Tue", "Thur"],


    // The following is true if final exam is on the LAST day of class;
    // false if final exam is during exam week."
    inClassFinalExam: false,
    // The following is for the college-scheduled final exam.
    // It is not used if final is on last day of class"
    finalExamDates: [
        new FinalExamDay("101/102", new Date("05/14/2020 8:00:00"))
        // new FinalExamDay("102", new Date("12/13/2018 12:45:00"))
    ],


    classPeriods: [
        {
            topic: new Topic( "Introduction", "lectures/lecture1_introduction.pdf" ),
            reading: new Reading("Assign#1 §§ 1.1 - 1.4")
        },
        {
            topic: new Topic( "Technologies & Performance", "lectures/lecture2_technologies_and_performance.pdf" ),
            reading: new Reading("Assign#2 §§ 1.5 - 1.8"),
            assign: new Homework("Homework #1", "homework/Homework_Assignment_1.txt", 7)
        },
        {
            topic: new Topic( "Data Representation & 2's Complement", "lectures/lecture3_data_representation_and_2s_complement.pdf" ),
            reading: new Reading("Assign#3 § 2.4")
        },
        {
            topic: new Topic( "Instruction Sets & Operands", "lectures/lecture4_instructions_and_instruction_sets.pdf" ),
            reading: new Reading("Assign#4 §§ 2.1 - 2.3"),
            assign: new Homework("Homework #2", "homework/Homework_Assignment_2.txt", 7)
        },
        {
            topic: new Topic( "MIPS Instruction Set", "lectures/lecture5_MIPS_instruction_set.pdf" ),
            reading: new Reading("Assign#5 §§ 2.5 - 2.6")
        },
//         {
//             topic: new Topic( "Delayed Opening -- Review Homework #2" )
//         },
        {
            topic: new Topic( "MIPS Branching Instructions", "lectures/lecture6_MIPS_Branching_Instructions.pdf" ),
            reading: new Reading("Assign#6 § 2.7"),
            assign: new Homework("Homework #3", "homework/Homework_Assignment_3.txt", 7)
        },
        {
            topic: new Topic( "Supporting Procedures in Computer Hardware", "lectures/lecture7_Supporting_Procedures_in_Computer_Hardware.pdf" ),
            reading: new Reading("Assign#7 § 2.8")
        },
        {   // this was swapped with the following item since the CE candidate was already given instructions to present this material
            topic: new Topic( "Accessing and Addressing Memory", "lectures/lecture9_Accessing_and_Addressing_Memory.pdf" ),
            reading: new Reading("Assign#8 § 2.9, § 2.10, § 2.13"),
            assign: new Homework("Homework #4", "homework/Homework_Assignment_4.txt", 7)
        },
        {   // homework #4 was originally assigned here .. but was moved up to account for rearranged schedule
            topic: new Topic( "Supporting Nested Procedures", "lectures/lecture8_Supporting_Nested_Procedures.pdf" )
            //assign: new Homework("Homework #4", "homework/Homework_Assignment_4.txt", 7)
        },
        {   // homework #4 was originally assigned here .. but was moved up to account for rearranged schedule
            topic: new Topic( "Supporting Nested Procedures (continued)", "lectures/lecture8_Supporting_Nested_Procedures.pdf" )
            //assign: new Homework("Homework #4", "homework/Homework_Assignment_4.txt", 7)
        },
        {
            topic: new Topic( "Reviewed Homework #4 / Supporting Nested Procedures (continued)", "lectures/lecture8_Supporting_Nested_Procedures.pdf" )
            //assign: new Homework("Homework #4", "homework/Homework_Assignment_4.txt", 7)
        },
        {
            topic: new Topic( "** Exam #1", "" )
        },
        {    // 3/12/2020 ... CE candidate gave this lecture
            topic: new Topic( "Arithmetic for Computers", "lectures/lecture11_Arithmetic_for_Computers.pdf" ),
            reading: new Reading("Assign #10 §§ 3.1 - 3.3"),
            assign: new Homework("Homework #5", "homework/Homework_Assignment_5.txt", 7)
        },
        {
            topic: new Topic( "Arithmetic for Computers (continued)", "lectures/lecture11_Arithmetic_for_Computers.pdf" ),
            reading: new Reading("Assign #11 §§ 3.4 - 3.5")
        },
        {   // 3/09/2020 ... this was originally before break and before "Arithmetic for Computers", but candidate schedules bumped it
            // move it back before "Arithmetic for Computers"
            topic: new Topic( "Translation of High-Level Languages", "lectures/lecture10_Translation_of_High-Level_Languages.pdf" ),
            reading: new Reading("Assign#9 § 2.12 (probably already did this one)")
        },
        {
            topic: new Topic( "Datapath for a Simplified Processor", "lectures/lecture12_Datapath_for_a_Simplified_Processor.pdf" ),
            reading: new Reading("Assign #12 §§ 4.1 - 4.3"),
            assign: new Homework("Homework #6", "homework/Homework_Assignment_6.txt", 7)
        },
        {
            topic: new Topic( "Datapath for a Simplified Processor (continued)", "lectures/lecture12_Datapath_for_a_Simplified_Processor.pdf" ),
            reading: new Reading("Assign #13 § 4.4")
        },
//         {
//             topic: new Topic( "Review Homework #6" )
//         },
        {
            topic: new Topic( "Pipelining", "lectures/lecture13_Pipelining.pdf" ),
            reading: new Reading("Assign #14 § 4.5"),
            assign: new Homework("Homework #7", "homework/Homework_Assignment_7.txt", 12)
        },
        {
            topic: new Topic( "Pipelined Datapath and Control", "lectures/lecture14_Pipelined_Datapath_and_Control.pdf" ),
            reading: new Reading("Assign #15 § 4.6")

        },
        {
            topic: new Topic( "Data Hazards in a Pipelined Datapath", "lectures/lecture15_Data_and_Control_Hazards_in_a_Pipelined_Datapath.pdf" ),
            reading: new Reading("Assign #16 §§ 4.7 - 4.8")
        },
//         {
//             topic: new Topic( "Review Homework #7" )
//         },
        {
            topic: new Topic( "** Exam #2", "" )
        },
        {
            topic: new Topic( "Memory and Memory Technologies", "lectures/lecture16_Memory_and_Memory_Technologies.pdf" ),
            reading: new Reading("Assign #17 §§ 5.1 - 5.2"),
            assign: new Homework("Homework #8", "homework/Homework_Assignment_8.txt", 12)
        },
        {
            topic: new Topic( "Basics of Cache Memory", "lectures/lecture17_Basics_of_Cache_Memory.pdf" ),
            reading: new Reading("Assign #18 § 5.3")
        },
        {
            topic: new Topic( "Basics of Cache Memory (continued)", "lectures/lecture17_Basics_of_Cache_Memory.pdf" )
        },
//         {
//             topic: new Topic( "Review Homework #8" )
//         },
        {
            topic: new Topic( "** Exam #3", "" )
        }
    ]
};

"use client";
import { useEffect, useState } from "react";
import path from "path";

const Home = () => {
  const [gridData, setGridData] = useState([]);

  useEffect(() => {
    // const file1Content = [...batch1];
    // const file2Content = [...batch2];
    // const file3Content = [...batch3];

    // // Define custom row and column lengths based on the current date
    // let customRowCount1,
    //   customColumnCount1,
    //   customRowCount2,
    //   customColumnCount2,
    //   customRowCount3,
    //   customColumnCount3;

    // if (dayOfMonth >= 1 && dayOfMonth <= 10) {
    //   customRowCount1 = 9;
    //   customColumnCount1 = 6;
    //   customRowCount2 = 8;
    //   customColumnCount2 = 6;
    //   customRowCount3 = 9;
    //   customColumnCount3 = 7;
    // } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
    //   customRowCount1 = 8;
    //   customColumnCount1 = 6;
    //   customRowCount2 = 9;
    //   customColumnCount2 = 7;
    //   customRowCount3 = 9;
    //   customColumnCount3 = 6;
    // } else if (dayOfMonth >= 21 && dayOfMonth <= 31) {
    //   customRowCount1 = 9;
    //   customColumnCount1 = 7;
    //   customRowCount2 = 9;
    //   customColumnCount2 = 6;
    //   customRowCount3 = 8;
    //   customColumnCount3 = 6;
    // }

    // // Function to create a grid with the specified dimensions
    // function createGrid(content, rowCount, columnCount) {
    //   const grid = [];
    //   for (let i = 0; i < rowCount; i++) {
    //     const row = [];
    //     for (let j = 0; j < columnCount; j++) {
    //       // Check if there is data left to add
    //       if (content.length > 0) {
    //         const randomIndex = Math.floor(Math.random() * content.length);
    //         const name = content.splice(randomIndex, 1)[0];
    //         row.push(name);
    //       } else {
    //         row.push("");
    //       }
    //     }
    //     grid.push(row);
    //   }
    //   return grid;
    // }

    // const grid1 = createGrid(file1Content, customRowCount1, customColumnCount1);
    // const grid2 = createGrid(file2Content, customRowCount2, customColumnCount2);
    // const grid3 = createGrid(file3Content, customRowCount3, customColumnCount3);

    // setGridData([grid1, grid2, grid3]);

    // Define custom row and column lengths based on the current date

    // Get the current date
    const currentDate = new Date();
    const dayOfMonth = currentDate.getDate();
    let batch1, batch2, batch3;

    if (dayOfMonth >= 1 && dayOfMonth <= 10) {
      batch1 = ["B", "C"];
      batch2 = ["D", "E"];
      batch3 = ["F", "G"];
    } else if (dayOfMonth >= 11 && dayOfMonth <= 20) {
      batch3 = ["B", "C"];
      batch1 = ["D", "E"];
      batch2 = ["F", "G"];
    } else if (dayOfMonth >= 21 && dayOfMonth <= 31) {
      batch2 = ["B", "C"];
      batch3 = ["D", "E"];
      batch1 = ["F", "G"];
    }

    const mainGrid = [];

    for (let i = 0; i < 9; i++) {
      const row = [];

      for (let j = 1; j <= 23; j++) {
        var col = "A";
        var available = true;

        if (j > 0 && j <= 4) {
          col = "A";
          available = false;
        } else if (j > 4 && j <= 7) {
          col = "B";
          available = true;
        } else if (j > 7 && j <= 10) {
          col = "C";
          available = true;
        } else if (j > 10 && j <= 13) {
          col = "D";
          available = true;
        } else if (j > 13 && j <= 16) {
          col = "E";
          available = true;
        } else if (j > 16 && j <= 20) {
          col = "F";
          available = true;
        } else if (j > 20) {
          col = "G";
          available = true;
        }

        row.push({
          id: j + i,
          name: "",
          batch: 1,
          availablilty: available,
          column: col,
        });
      }
      mainGrid.push(row);
    }

    const finalData = [];

    for (let i = 0; i < mainGrid.length; i++) {
      const row = [];

      finalData.push(row);

      for (let j = 0; j < mainGrid[i].length; j++) {
        let currentCol = mainGrid[i][j].column;
        let batch = 0;

        if (batch1.includes(currentCol)) {
          batch = 1;
        } else if (batch2.includes(currentCol)) {
          batch = 2;
        } else if (batch3.includes(currentCol)) {
          batch = 3;
        }
      }
    }

    setGridData(mainGrid);
  }, []);

  function getRandomAndRemove(arr) {
    if (arr.length === 0) {
      return null; 
    }

    // Generate a random index
    const randomIndex = Math.floor(Math.random() * arr.length);

    // Extract the random element
    const randomElement = arr[randomIndex];

    // Remove the element from the array
    arr.splice(randomIndex, 1);

    return randomElement;
  }

  return (
    <div className="flex flex-col gap-8  flex-nowrap">
      {gridData.map((item) => (
        <>
          <div className="flex flex-nowrap  gap-4">
            {item.map((cell) => (
              <>
                <div className="flex w-full shadow-lg p-4 rounded-xl border flex-col gap-2">
                  <span>name :- {cell.name}</span>
                  <span>batch :- {cell.batch}</span>
                  <span>column :- {cell.column}</span>
                  <span>
                    available :- {cell.availablilty ? "True" : "False"}
                  </span>
                </div>
              </>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Home;

const batch1 = [
  "Aatmik Panse",
  "ABHINAV KUMAR JHA",
  "Abhinav Nagar",
  "Adarsh Singh Tomar",
  "Amlan Buragohain",
  "Amritesh Indal",
  "Amrutha c a",
  "Ansuman kumar",
  "Arjun Kshirsagar",
  "Aryan Choudhary",
  "BHAVYA JAIN",
  "Charanjeet",
  "DHANUSH PAGOTI",
  "Harsh Kumar",
  "JEEVAN H",
  "Jenish Thapa",
  "KARTIK  JAIN",
  "Kohantika",
  "Kushi Varadaraj",
  "Lokendra",
  "Mahak Juriani",
  "Manish Rao Rachakonda",
  "Medha Shree",
  "Navneet",
  "Nishant Raj Tiwari",
  "Parth Arora",
  "Pooja Talele",
  "Pranav Aggarwal",
  "prathmesh bhardwaj",
  "Prem B Shah",
  "Pritam Raj",
  "Rajat Tyagi",
  "Rudra Chauhan",
  "Sachin Beniwal",
  "Saksham jain",
  "Samrudh V V",
  "Sandip Dey",
  "Satish Pandit Rathod",
  "Shivam Tiwari",
  "SHRIMAY SOMANI",
  "Shrinibas Mahanta",
  "Sourashis Sarkar",
  "Sudharsan S",
  "Suraj",
  "Suryansh Shakya",
  "Syed Ayaan Ali",
  "V Shravanth",
  "Vinayaka Madhava",
  "Vishesh",
  "Zaid",
];
// Output the array to the console

const batch2 = [
  "AAYUSH ASHOK KHOPADE",
  "Abhinav Gupta",
  "ABHISHEK KUMAR SHAH",
  "Aditya Jaiswal",
  "Aditya Prasad Dash",
  "Aditya singh",
  "Aman Yadav",
  "Aniruddha Patil",
  "Anuj",
  "Arnavya Chettri",
  "Arth Thapa",
  "Atharv sanjay jain",
  "Ayaan Khan",
  "Ayush Kesharwani",
  "Divyanshu Pandey",
  "Garvit jain",
  "GSivaRam",
  "Harsh Kumar",
  "Harshini Reddy Nellore",
  "KARAN DAS A",
  "Krupakar Reddy",
  "Kvijay gaurav",
  "loukik",
  "MAYANK GUPTA",
  "Naresh Biradar",
  "Navneet",
  "Nishant kumar Dwivedi",
  "Rudraksh Rankawat",
  "Sai Deepak",
  "Sai Venkatesh Alampally",
  "Sanjana",
  "Shreshtha Sharma",
  "Shruti Verma",
  "Siddharth R",
  "Souvik Kumar",
  "Spoorthy",
  "srikrrishn choudhary",
  "suraj kumar",
  "SWARNIM",
  "Tejas Ghatule",
  "Thirunagari Rohith",
  "THRISHAL",
  "Tushar Khurana",
  "UDIT KUMAR NAYAK",
  "Varun Deep Saini",
  "Vatsal Omar",
  "Vibhu",
  "Vinay Reddy Yedula",
  "Vivek Yadav",
  "Yash Agarwal",
];

const batch3 = [
  "Abhinav",
  "Aditya Kumar Singh",
  "Ajai Sharan",
  "Aman Anand",
  "Archisman Midya",
  "Arjun",
  "Bhargav M",
  "Bishal Jena",
  "Chikoti Ruthwik",
  "Daksh jain",
  "Daksh Kanaujia",
  "Dipti Hatwar",
  "HARSH KUMAR PANCHAL",
  "Harsh Kumar Prabhakar",
  "Harsh umesh kumar",
  "Harshit Goel",
  "harshit sachan",
  "Harshit Shah",
  "Hemkesh V Kantawala",
  "Himanshu Sainani",
  "Ishan Avasthi",
  "Jiya Singhal",
  "K Manoj krishna",
  "kartik deshpande",
  "Keshav Makkad",
  "Krishna Patidar",
  "Kumar Kartikay",
  "Naga",
  "narasimha",
  "Naresh Kumar Thodupunoori",
  "Nayanshi singh",
  "Neel Dholiya",
  "Nymish Kashivishwanath",
  "OM Annasaheb waghchavare",
  "Prashant Singh Chauhan",
  "Prince kumar",
  "Priyanshu Baul Majumder",
  "Rohan Danny Skaria",
  "Samrat",
  "Shivam Goel",
  "Shivansh Singh",
  "Shreyas Garg",
  "Siddham Jain",
  "Srujan",
  "Sushant Singh Chauhan",
  "Tamanna Mohan",
  "tanvi",
  "Utkersh Basnet",
  "Vikramaditya",
  "Yashraj Sunil Kupekar",
];

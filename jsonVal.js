let jsonArray = [
    {
        "ComapnyName": "GeeksforGeeks",
        "Location": "Noida"
    },
    {
        "Courses": [
            "DSA self paced course",
            "DevOps Boot camp",
            "GATE prepration course"
        ],
        "Topics": [
            "Web Devlopment",
            "Machine Learning",
            "Artifical Intelligence",
            "Data Science"
        ]
    }
];

let modifiedArray = jsonArray.map((item) => {
    return item.Courses
        
});
console.log(modifiedArray);
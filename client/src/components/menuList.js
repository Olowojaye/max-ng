const menuList = [
    {
        name: "Home",
        path: "/"
    },
    {
        name: "About",
        path: "about"
    },
    {
        name: "Books",
        path: "books"
    },
    {
        name: "Courses",
        path: "courses",
        subMenu: [
            {
                name: "100 Level",
                path: "courses-100"
            },
            {
                name: "200 Level",
                path: "courses-200"
            },
            {
                name: "300 Level",
                path: "courses-300"
            },
            {
                name: "Software",
                path: "courses-tech"
            }
        ]
    },
    {
        name: "e-Testing",
        path: "etesting"
    },
    {
        name: "Forum",
        path: "forum"
    },
    {
        name: "Log In",
        path: "login"
    }
];

export default  menuList;
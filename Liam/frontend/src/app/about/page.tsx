"use client";

import { Typography } from "antd";

export default function About() {
  return (
    <div>
        <Typography.Title>About the Project:</Typography.Title>
        <Typography.Paragraph>This project is the product of laziness and an unwillingness to take unnecessary gen ed courses. It involved scraping data from BU websites to create a database of hub courses at BU. After that I wrote an algorithm that uses linear programming and the PuLP library to find a minimal set of courses that will fulfill a certain group of hub units. After that, I hooked that up to a Next.js frontend utilizing various Ant Design components to help improve the user experience and streamline the styling. After creating a minimal site that quite literally just generated a single minimal set given a selection of hub courses uses checkboxes and spit out a bulleted list, I first switched that bulleted list to Ant Design Cards in a Grid which helps make it look much cleaner and also provides the opportunity to have a title and description as well. Then, I created logic that allows for certain courses in a set to be removed and replaced via the resubmit button. Then, I decided to go a bit further and create filters that would allow you to narrow things down to just CAS courses or courses of a certain level because sometimes when messing around I would get super high-level courses that had insane prerequisites that negates the point of minimizing hub courses. Anyways, that's my spiel and I hope you enjoy the site!!!</Typography.Paragraph>
    </div>
  );
}
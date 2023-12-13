#OnlineOrganDonation
"The Online Organ Donation project aims to address a real-world problem, particularly in cases like kidney failure, where millions of people struggle to afford a healthy kidney. The existing issue arises from intermediaries, such as hospitals or agents, managing the donation and transplantation processes. These intermediaries charge exorbitant fees for recipients, leaving donors with minimal compensation. Our project seeks to alleviate this problem by creating a website that directly connects donors with recipients, eliminating third-party involvement.

In India, where donating organs causing death is illegal, the focus is on kidney donation, allowing donors to lead a normal life with a single kidney. The website provides a platform for individuals willing to donate organs for financial compensation. By connecting donors and recipients directly, the system ensures that the entire payment from the recipient goes directly to the donor, avoiding any loss to either party. This approach enables even middle-class families to afford organ transplant operations and lead normal lives by compensating donors based on their agreed-upon terms, whether as a one-time payment or on a monthly basis."

Recipient Side: Recipients simply need to post their organ requirements on our website, be it for kidneys, blood, hair, lungs, plasma, testicles, or any other transplantable organ without causing harm to the donor. The process is as straightforward as posting a job on sites like naukri.com. Recipients are not required to register; they only need to fill out a form with valid details, such as Aadhar, voter ID, or any other identification card, along with their contact information. This practice project is designed for simplicity, focusing on essential details. The crucial factor is the blood group, which holds significance (explained further in the donor section). Once the recipient submits the form, their work is done.

Donor Side: Donors, on the other hand, need to register on our website. Upon registration, whenever a new organ requirement is posted matching their blood group, they receive notifications. Donors can then contact the recipient directly outside our website through the provided contact details, either by calling or texting. The decision to donate is entirely at the discretion of the donor. If a donor wishes to contribute only blood or plasma, they can ignore other requirements. Donor data remains confidential to prevent potential coercion; publicizing it could lead to undue pressure on donors. However, even without registering, donors can still view all organ requirement posts, albeit for all blood groups. Registration ensures donors only see posts relevant to their blood group.

This project is a MERN (MongoDB, Express.js, React, Node.js) undertaking. The initial focus is on the backend, where I'll create APIs using Node.js and establish a connection to the MongoDB database using Mongoose. Subsequently, the React framework will be employed to present the data on the server. Any modifications to the initial idea will be documented in the README file.

At the conclusion, if you have any ideas or encounter challenges that could enhance or improve this project, your brilliant insights are welcome. Feel free to share your thoughts or highlight any issues that need addressing. Your input is invaluable in making this project more robust and effective.

#Change in Idea
=> I had an idea that, instead of collecting donor data, which serves no purpose for the website, rather than showing donors only the organ requests related to their blood group. Instead of insisting on donor registration, users, whether they're potential donors or others, can initially view all organ requirement posts. The 'Post Your Requirement' option is available in the header for recipients to post their needs. Additionally, a filter button is conveniently located on the side, featuring all blood groups as selectable options. Users can choose their blood group from the filter, and upon selection, the website will display only the relevant posts. These changes allow the website to efficiently gather recipient data and showcase organ details posted by recipients.

#Change in Idea 2
=> One new change in the project involves the introduction of an admin role for post scrutiny before they go live on the main page. Now, when recipients submit a post, it initially undergoes review in a temporary database. The admin thoroughly examines details, including IDs and proofs, aiming to ensure accuracy and reduce the risk of fake post submissions. If any discrepancies are identified, the admin has the authority to delete the post; otherwise, it seamlessly moves to the main collection. I know this is a simple another practice project for me, but in this project I am focusing more on realworld problem solving.
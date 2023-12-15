import React from 'react'; 

const PostDetails = () => {
  return (
    <div className="main-details-container">
      <div className="main-details-header">
        <img
          src="https://i.pinimg.com/564x/70/26/e8/7026e849daff8eb9b5b4d6c2fa2ed10a.jpg" // Replace with your image source
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="main-details-content">
        <h2 className="details-title">Sanjay</h2>
        <div className="details-info">Age: 23 | Blood Group: O+</div>
        <div className="details-info">Gender: Male</div>
        <div className="details-info">Address: 123 Main St, City</div>
        <div className="details-description">
          {/* Replace with your actual description */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          non nulla sit amet nisl tempus convallis quis ac lectus. Vestibulum
          ac diam sit amet quam vehicula elementum sed sit amet dui.
          Pellentesque in ipsum id orci porta dapibus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere necessitatibus iste perferendis sunt ipsum assumenda in molestiae atque ratione temporibus soluta nihil error quae porro, alias mollitia vel quidem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam maiores assumenda autem animi officiis rem deserunt commodi dolore, quo illum distinctio nostrum, porro aspernatur qui quas recusandae non labore voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, provident omnis temporibus id in, iusto tempora error fugit impedit, illo natus deleniti eum veniam perspiciatis optio distinctio magni soluta expedita!
          {/* Add more content as needed */}
        </div>
        <div className="details-description">
          {/* Additional description if required */}
          More details can go here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ullam quisquam provident exercitationem, consectetur laboriosam tempore maiores corrupti. Quibusdam a recusandae itaque et dolores aperiam, nemo sequi illum illo aspernatur. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas itaque dolore, quo consectetur consequuntur dolores quisquam non officia reprehenderit autem quibusdam eos, nulla fugit sapiente explicabo tempora velit neque veniam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, incidunt? Ex ad pariatur ullam maiores molestias magni officia? Fugiat fugit odit numquam magnam, officia inventore veritatis nam? Illo, sapiente reiciendis?
        </div>
        <div className="details-info">Mobile Contact: 123-456-7890</div>
        <div className="details-info">Other Contact: example@email.com</div>
        {/* Add more details as needed */}
      </div>
    </div>
  );
};

export default PostDetails;

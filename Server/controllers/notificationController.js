const notificationModel = require("../models/NotificationModel");


const getUserNotificationsController = async (req, res) => {
  try {

    const { userId } = req.body;

    const notifications = await notificationModel.find({
      userId,
    }).sort({
      createdAt: -1,
    });


    res.status(200).send({
      success: true,
      data: notifications,
    });


  } catch (error) {

    console.log(error);

    res.status(500).send({
      success: false,
      message: "Error while fetching notifications",
    });

  }
};


module.exports = {
  getUserNotificationsController,
};
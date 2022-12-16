/** Controller */
import Employees from "../model/employee";

// get : https://next-auth-crud-firebase.firebaseapp.com/api/users
export async function getUsers(req, res) {
  try {
    const employees = await Employees.find({});
    if (!employees) return res.status(404).json({ error: "Data not Found" });
    res.status(200).json(employees);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
}

// get : https://next-auth-crud-firebase.firebaseapp.com/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;
    if (userId) {
      const employee = await Employees.findById(userId);
      res.status(200).json(employee);
    }
    res.status(404).json({ error: "User not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
}

// post : https://next-auth-crud-firebase.firebaseapp.com/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided...!" });
    Employees.create(formData, function (err, data) {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
}

// put : https://next-auth-crud-firebase.firebaseapp.com/api/users/1
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const employee = await Employees.findByIdAndUpdate(userId, formData);
      res.status(200).json(employee);
    }
    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" });
  }
}

// delete : https://next-auth-crud-firebase.firebaseapp.com/api/users/1
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const employee = await Employees.findByIdAndDelete(userId);
      return res.status(200).json(employee);
    }

    res.status(404).json({ error: "User Not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" });
  }
}

const UserController = require("./app/controllers/UserController");
const ProjectController = require("./app/controllers/ProjectController");

// console.log(UserController.Index)
module.exports = app => {
   

    app.post('/validateToken', Login.validateToken);

    app.route('/users')
      .get(UserController.Index)
      .post(UserController.store);

    app.route('/users/:id')
        .get(UserController.show)
        .put(UserController.update)
        .delete(UserController.delete);    

    app.route('/projects')
        .get(ProjectController.Index)
        .post(ProjectController.store);

    app.route('/projects:id')
        .get(ProjectController.show)
        .put(ProjectController.update)
        .delete(ProjectController.delete);
}   
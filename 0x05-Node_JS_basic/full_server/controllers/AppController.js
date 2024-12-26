/**
 * Contains the miscellaneous route handlers.
 * @author Jesse Ekow Yeboah <https://github.com/jones1230>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;

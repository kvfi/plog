import _ from 'lodash';
import "cardinalcss/cardinal.css";

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack', 'mdr', 'xd'], ' ');

  return element;
}

document.body.appendChild(component());
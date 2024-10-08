import icons from 'url:../../img/icons.svg';

import View from './View';
import previewView from './previewView';

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet...';
  _message = '';

  addHanlderRender(handler) {
    window.addEventListener('load', handler);
  }
  _generateMarkup() {
    console.log(this._data);

    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarkView();

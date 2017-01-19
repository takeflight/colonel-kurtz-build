'use strict';

var ActionButton = require('./ActionButton');
var Actions = require('../actions/blocks');
var Blocks = require('../stores/Blocks');
var React = require('react');
var SwitchNav = require('./SwitchNav');
var classNames = require('classnames');
var typesForBlock = require('../utils/typesForBlock');

module.exports = React.createClass({
  displayName: 'exports',

  propTypes: {
    app: React.PropTypes.object.isRequired
  },

  getInitialState: function getInitialState() {
    return { open: false };
  },

  componentWillReceiveProps: function componentWillReceiveProps() {
    this.setState({ open: false });
  },

  open: function open() {
    this.setState({ open: true });
  },

  close: function close() {
    var _this = this;

    this.setState({ open: false }, function () {
      _this.refs.toggle.focus();
    });
  },

  getToggle: function getToggle() {
    if (this.state.open) return null;

    return React.createElement(ActionButton, { ref: 'toggle',
      disabled: this.hasMaxChildren(),
      label: 'Open the block menu and create a block',
      onClick: this._onToggle });
  },

  getNav: function getNav(blockTypes) {
    if (!this.state.open) return null;

    return React.createElement(SwitchNav, { ref: 'nav',
      blockTypes: blockTypes,
      onAdd: this._onAdd,
      onExit: this.close });
  },

  hasMaxChildren: function hasMaxChildren() {
    var _props = this.props;
    var app = _props.app;
    var parent = _props.parent;

    if (!parent) {
      return Blocks.filterChildren(app.state.blocks).length >= app.state.maxChildren;
    }

    var children = Blocks.getChildren(app.state.blocks, parent);
    var type = app.state.blockTypes.filter(function (t) {
      return t.id === parent.type;
    })[0];

    return children.length >= type.maxChildren;
  },

  render: function render() {
    var _props2 = this.props;
    var app = _props2.app;
    var parent = _props2.parent;
    var position = _props2.position;

    var types = typesForBlock(app.state.blockTypes, parent);

    var className = classNames('col-switch', {
      'col-switch-disabled': this.hasMaxChildren()
    });

    return types.length ? React.createElement(
      'div',
      { className: className, onKeyUp: this._onKeyUp },
      this.getToggle(),
      this.getNav(types)
    ) : null;
  },

  _onAdd: function _onAdd(type) {
    var _props3 = this.props;
    var app = _props3.app;
    var position = _props3.position;
    var parent = _props3.parent;

    app.push(Actions.create, [type.id, position, parent]);
  },

  _onToggle: function _onToggle() {
    var _props4 = this.props;
    var app = _props4.app;
    var position = _props4.position;
    var parent = _props4.parent;

    var types = typesForBlock(app.state.blockTypes, parent);
    // If only one type exists, instead of opening the nav, just
    // create that element
    if (types.length === 1) {
      app.push(Actions.create, [types[0].id, position, parent]);
    }

    this.open();
  },

  _onKeyUp: function _onKeyUp(e) {
    if (e.key === 'Escape') {
      this.close();
    }
  }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1N3aXRjaC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFlBQVksR0FBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxJQUFJLE9BQU8sR0FBUyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtBQUNoRCxJQUFJLE1BQU0sR0FBVSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUMvQyxJQUFJLEtBQUssR0FBVyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDcEMsSUFBSSxTQUFTLEdBQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0FBQzFDLElBQUksVUFBVSxHQUFNLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN6QyxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsd0JBQXdCLENBQUMsQ0FBQTs7QUFFckQsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDOzs7QUFFakMsV0FBUyxFQUFFO0FBQ1QsT0FBRyxFQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFVBQVU7R0FDeEM7O0FBRUQsaUJBQWUsRUFBQSwyQkFBRztBQUNoQixXQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFBO0dBQ3ZCOztBQUVELDJCQUF5QixFQUFBLHFDQUFHO0FBQzFCLFFBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtHQUMvQjs7QUFFRCxNQUFJLEVBQUEsZ0JBQUc7QUFDTCxRQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7R0FDOUI7O0FBRUQsT0FBSyxFQUFBLGlCQUFHOzs7QUFDTixRQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQU07QUFDbkMsWUFBSyxJQUFJLENBQUMsTUFBTSxDQUFD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RSxNQUFNLFdBQU4sTUFBTTs7QUFFM0IsUUFBSSxLQUFLLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFBOzs7QUFHdkQsUUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUN0QixTQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFBO0tBQzFEOztBQUVELFFBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtHQUNaOztBQUVELFVBQVEsRUFBQSxrQkFBQyxDQUFDLEVBQUU7QUFDVixRQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO0FBQ3RCLFVBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtLQUNiO0dBQ0Y7O0NBRUYsQ0FBQyxDQUFBIiwiZmlsZSI6IlN3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBBY3Rpb25CdXR0b24gID0gcmVxdWlyZSgnLi9BY3Rpb25CdXR0b24nKVxubGV0IEFjdGlvbnMgICAgICAgPSByZXF1aXJlKCcuLi9hY3Rpb25zL2Jsb2NrcycpXG5sZXQgQmxvY2tzICAgICAgICA9IHJlcXVpcmUoJy4uL3N0b3Jlcy9CbG9ja3MnKVxubGV0IFJlYWN0ICAgICAgICAgPSByZXF1aXJlKCdyZWFjdCcpXG5sZXQgU3dpdGNoTmF2ICAgICA9IHJlcXVpcmUoJy4vU3dpdGNoTmF2JylcbmxldCBjbGFzc05hbWVzICAgID0gcmVxdWlyZSgnY2xhc3NuYW1lcycpXG5sZXQgdHlwZXNGb3JCbG9jayA9IHJlcXVpcmUoJy4uL3V0aWxzL3R5cGVzRm9yQmxvY2snKVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblxuICBwcm9wVHlwZXM6IHtcbiAgICBhcHAgOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHsgb3BlbjogZmFsc2UgfVxuICB9LFxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXG4gIH0sXG5cbiAgb3BlbigpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogdHJ1ZSB9KVxuICB9LFxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuOiBmYWxzZSB9LCAoKSA9PiB7XG4gICAgICB0aGlzLnJlZnMudG9nZ2xlLmZvY3VzKClcbiAgICB9KVxuICB9LFxuXG4gIGdldFRvZ2dsZSgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuICg8QWN0aW9uQnV0dG9uIHJlZj1cInRvZ2dsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXsgdGhpcy5oYXNNYXhDaGlsZHJlbigpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJPcGVuIHRoZSBibG9jayBtZW51IGFuZCBjcmVhdGUgYSBibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyB0aGlzLl9vblRvZ2dsZSB9IC8+KVxuICB9LFxuXG4gIGdldE5hdihibG9ja1R5cGVzKSB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLm9wZW4pIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKDxTd2l0Y2hOYXYgcmVmPVwibmF2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tUeXBlcz17IGJsb2NrVHlwZXMgfVxuICAgICAgICAgICAgICAgICAgICAgICBvbkFkZD17IHRoaXMuX29uQWRkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgb25FeGl0PXsgdGhpcy5jbG9zZSB9IC8+KVxuICB9LFxuXG4gIGhhc01heENoaWxkcmVuKCkge1xuICAgIGxldCB7IGFwcCwgcGFyZW50IH0gPSB0aGlzLnByb3BzXG5cbiAgICBpZiAoIXBhcmVudCkge1xuICAgICAgcmV0dXJuIEJsb2Nrcy5maWx0ZXJDaGlsZHJlbihhcHAuc3RhdGUuYmxvY2tzKS5sZW5ndGggPj0gYXBwLnN0YXRlLm1heENoaWxkcmVuXG4gICAgfVxuXG4gICAgbGV0IGNoaWxkcmVuID0gQmxvY2tzLmdldENoaWxkcmVuKGFwcC5zdGF0ZS5ibG9ja3MsIHBhcmVudClcbiAgICBsZXQgdHlwZSAgICAgPSBhcHAuc3RhdGUuYmxvY2tUeXBlcy5maWx0ZXIodCA9PiB0LmlkID09PSBwYXJlbnQudHlwZSlbMF1cblxuICAgIHJldHVybiBjaGlsZHJlbi5sZW5ndGggPj0gdHlwZS5tYXhDaGlsZHJlblxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgeyBhcHAsIHBhcmVudCwgcG9zaXRpb24gfSA9IHRoaXMucHJvcHNcbiAgICBsZXQgdHlwZXMgPSB0eXBlc0ZvckJsb2NrKGFwcC5zdGF0ZS5ibG9ja1R5cGVzLCBwYXJlbnQpXG5cbiAgICBsZXQgY2xhc3NOYW1lID0gY2xhc3NOYW1lcygnY29sLXN3aXRjaCcsIHtcbiAgICAgICdjb2wtc3dpdGNoLWRpc2FibGVkJzogdGhpcy5oYXNNYXhDaGlsZHJlbigpXG4gICAgfSlcblxuICAgIHJldHVybiB0eXBlcy5sZW5ndGggPyAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZSB9IG9uS2V5VXA9eyB0aGlzLl9vbktleVVwIH0+XG4gICAgICAgIHsgdGhpcy5nZXRUb2dnbGUoKSB9XG4gICAgICAgIHsgdGhpcy5nZXROYXYodHlwZXMpIH1cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsXG4gIH0sXG5cbiAgX29uQWRkKHR5cGUpIHtcbiAgICBsZXQgeyBhcHAsIHBvc2l0aW9uLCBwYXJlbnQgfSA9IHRoaXMucHJvcHNcbiAgICBhcHAucHVzaChBY3Rpb25zLmNyZWF0ZSwgW3R5cGUuaWQsIHBvc2l0aW9uLCBwYXJlbnRdKVxuICB9LFxuXG4gIF9vblRvZ2dsZSgpIHtcbiAgICBsZXQgeyBhcHAsIHBvc2l0aW9uLCBwYXJlbnQgfSA9IHRoaXMucHJvcHNcblxuICAgIGxldCB0eXBlcyA9IHR5cGVzRm9yQmxvY2soYXBwLnN0YXRlLmJsb2NrVHlwZXMsIHBhcmVudClcbiAgICAvLyBJZiBvbmx5IG9uZSB0eXBlIGV4aXN0cywgaW5zdGVhZCBvZiBvcGVuaW5nIHRoZSBuYXYsIGp1c3RcbiAgICAvLyBjcmVhdGUgdGhhdCBlbGVtZW50XG4gICAgaWYgKHR5cGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgYXBwLnB1c2goQWN0aW9ucy5jcmVhdGUsIFt0eXBlc1swXS5pZCwgcG9zaXRpb24sIHBhcmVudF0pXG4gICAgfVxuXG4gICAgdGhpcy5vcGVuKClcbiAgfSxcblxuICBfb25LZXlVcChlKSB7XG4gICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgdGhpcy5jbG9zZSgpXG4gICAgfVxuICB9XG5cbn0pXG4iXX0=
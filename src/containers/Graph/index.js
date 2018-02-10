import React from 'react';
import Point from '../../components/Point';

const styles = () => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
});

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: []
    };
    document.addEventListener(
      'contextmenu',
      this.onRightMouseClick
    );
  }

  addPoint = point =>
    this.setState({ points: [...this.state.points, point] });

  removePoint = targetId =>
    this.setState({
      points: this.state.points
        .filter(({ id }) => targetId !== id)
    })

  onLeftMouseClick = (event) => {
    event.preventDefault();
    console.log('left');
  }

  onRightMouseClick = (event) => {
    const { clientX, clientY } = event;
    event.preventDefault();
    this.addPoint({
      position: [clientX - 15, clientY - 15],
      id: Date.now(),
    });
  }

  render() {
    const { points } = this.state;
    return (
      <div
        onClick={this.onLeftMouseClick}
        style={styles()}
      >
        {points.map(point => (
          <Point
            remove={() => this.removePoint(point.id)}
            key={point.id}
            {...point}
          />
        ))}
      </div>
    );
  }
}

export default Graph;

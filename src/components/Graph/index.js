import React from 'react';
import Point from '../../components/Point';
import Arrow from '../../components/Arrow';
import ArrowDraft from '../../components/ArrowDraft';

const styles = () => ({
  width: '100%',
  height: '100%',
  position: 'absolute',
});

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      points: [],
      arrows: [],
      drawing: false,
      arrowStart: [],
      client: [],
    };
    document.addEventListener(
      'contextmenu',
      this.onRightMouseClick
    );
    document.addEventListener(
      'mousemove',
      this.onMouseMove
    );
  }

  addPoint = point =>
    this.setState({ points: [...this.state.points, point] });

  removePoint = targetId =>
    this.setState({
      points: this.state.points
        .filter(({ id }) => targetId !== id)
    })

  addArrow = arrowEnd =>
    this.setState({
      arrows: [
        ...this.state.arrows, {
          arrowEnd,
          arrowStart: this.state.arrowStart,
          id: Date.now()
        }
      ],
      drawing: false,
      arrowStart: [],
    })

  removeArrow = targetId =>
    this.setState({
      arrows: this.state.arrows
        .filter(({ id }) => targetId !== id)
    })

  onMouseMove = (event) => {
    const { clientX, clientY } = event;
    event.preventDefault();
    this.setState({
      client: [clientX, clientY]
    });
  }

  onRightMouseClick = (event) => {
    const { clientX, clientY } = event;
    event.preventDefault();
    this.addPoint({
      position: [clientX - 15, clientY - 15],
      id: Date.now(),
    });
  }

  startDrawingArrow = position =>
    this.setState({
      arrowStart: position,
      drawing: true
    });


  onMouseUp = () =>
    this.setState({
      drawing: false
    })


  render() {
    const {
      points,
      arrows,
      drawing,
      arrowStart,
      client
    } = this.state;
    return (
      <div
        onMouseUp={this.onMouseUp}
        style={styles()}
      >
        {drawing && (
          <ArrowDraft
            client={client}
            point={arrowStart}
          />
        )}
        {arrows.map(arrow => (
          <Arrow
            removeArrow={() => this.removeArrow(arrow.id)}
            key={arrow.id}
            {...arrow}
          />
        ))}
        {points.map(point => (
          <Point
            removePoint={() => this.removePoint(point.id)}
            startDrawingArrow={this.startDrawingArrow}
            endDrawingArrow={this.addArrow}
            key={point.id}
            {...point}
          />
        ))}
      </div>
    );
  }
}

export default Graph;

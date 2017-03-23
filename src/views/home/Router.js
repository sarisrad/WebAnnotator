class Router extends Component {
    
    static propTypes = {
        routes: React.PropTypes.object,
        beginningRoute: React.PropTypes.string
    };
    
    constructor(props) {
      
        super(props);
        
        this.state = {};
        this.state.currentRoute = props.routes[props.beginningRoute];
        this.PropTypes.beginningRoute = "./Body/body_deafult"

        this.routeTo = this.routeTo.bind(this);
    }
    
    routeTo(routeName) {
        
        let route = this.props.routes[routeName];
        this.setState({
            currentRoute: route
        });
    }
    
    render() {
        
        let RouteComponent = this.state.currentRoute;
        return (
            <RouteComponent navigate={this.routeTo} />
        )
    }
    
}

 <li onClick={this.props.navigate('About')}>About</li>
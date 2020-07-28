import React from 'react';
import './Home.scss';
import axios from 'axios';
import Forms from '../components/Forms';
import List from '../components/List'

class Homepage extends React.Component {
    state = {
        products: [],
        title: '',
        description: '',
        price: '$'
    }

    DRF_URL = process.env.DRF_URL || 'http://ec2-35-171-151-247.compute-1.amazonaws.com'

    componentDidMount() {
        axios.get(this.DRF_URL + '/api/')
        .then(res => {
            // handle success
            console.log(res.data);

            this.setState({
                products: res.data
            });
            });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {
        const onSubmit = (e) => {
            const { title, description, price } = this.state;
        
            axios.post(this.DRF_URL + '/api/', { title, description, price })
              .then((result) => {
              });
          }
        
        const Delete = (id) => {
            console.log("this is deleted")
            axios.delete(this.DRF_URL + '/api/'+ id, { id })
              .then((result) => {
                window.location.reload(true);
              });


        }

        return(
            <div className = "homepage">
                <Forms
                onSubmit={onSubmit}
                onChange={this.onChange}
                title = {this.state.title}
                description = {this.state.description}
                price = {this.state.price}
                />
                <List 
                products = {this.state.products}
                delete = {Delete}
                />
            </div>
        )
    }
}

export default Homepage;
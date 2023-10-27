import React, { Component } from 'react'

export default class Loader extends Component {
    render() {
        return (
            <div id="particles-js1" className="loading theme_grd" >
                <div id="loading-center">
                    <span className="rocket_x" style={{"display":"inline-block"}} >
                        <picture className="d-block">
                            <source srcSet="assets/img/rocket_ani_1.webp" type="image/webp" />
                            <source srcSet="assets/img/rocket_ani_1.png" type="image/png" />
                            <img src="assets/img/rocket_ani_1.png" width="215" height="475" alt="Digital Marketing, Agency, Facebook Ads- GrowthX" className="img-fluid" />
                        </picture>
                        <span className="rocket_fire">
                            <picture className="d-block rocket_fire_before">
                                <source srcSet="assets/img/rocket_fire_before.webp" type="image/webp" />
                                <source srcSet="assets/img/rocket_fire_before.png" type="image/png" />
                                <img src="assets/img/rocket_fire_before.png" width="212" height="117" alt="Digital Marketing Solutions" className="img-fluid" />
                            </picture>
                            <picture className="d-block rocket_fire_after">
                                <source srcSet="assets/img/rocket_fire_after.webp" type="image/webp" />
                                <source srcSet="assets/img/rocket_fire_after.png" type="image/png" />
                                <img src="assets/img/rocket_fire_before.png" width="212" height="117" alt="Digital Marketing Solutions" className="img-fluid" />
                            </picture>
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}

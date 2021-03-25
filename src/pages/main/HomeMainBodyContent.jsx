import React from "react";
import "../../common_ui/kre_home.css";
import kre_logo from "../../common_ui/assets/KRE_logo-White.png";



function HomeMainBodyContent() {
    return(
        <div className="About-KRE">
            <img src={kre_logo}/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nisl sapien, varius ac finibus eu, volutpat ut mi. Aenean metus metus, consectetur quis orci a, commodo dictum mauris. Nam quis tortor sed ipsum bibendum pretium id eget dui. Sed sed tortor non libero efficitur volutpat. Donec nisl risus, vulputate eget auctor id, dapibus id nisl. Sed ultrices dolor eget nulla consectetur, nec vestibulum turpis feugiat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
            <p>Mauris sit amet consequat ipsum, quis convallis tellus. Donec congue nisi nec suscipit laoreet. Duis eu dolor nec tellus auctor eleifend. Ut convallis cursus dui vel imperdiet. Cras fermentum congue accumsan. In eros justo, ullamcorper vel purus vel, porttitor vestibulum nibh. Nam ut neque urna. Praesent ullamcorper egestas ligula venenatis lobortis. Sed lacinia nisi sit amet ante vestibulum, lacinia accumsan velit elementum. Aliquam euismod placerat diam finibus cursus. Mauris tristique semper nulla, quis ornare augue suscipit nec. Fusce ornare ligula augue, quis pulvinar orci mattis vel. In blandit odio mauris, a lobortis odio ullamcorper vitae. Praesent id nisi ut massa accumsan eleifend id at quam. Integer sed sem a lectus congue porta eu nec justo. Curabitur ultrices, diam ut egestas maximus, sapien ipsum lobortis mauris, dignissim commodo nibh turpis at sapien.</p>
            <p>Curabitur pellentesque eget neque luctus viverra. Mauris posuere posuere lectus at euismod. Nullam et est sit amet orci interdum porta a nec tortor. Vestibulum vitae scelerisque lacus, nec facilisis sem. Nulla sit amet iaculis libero. Phasellus consectetur bibendum nulla. Ut accumsan leo sed tortor hendrerit, id laoreet enim lacinia. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent malesuada a dui ullamcorper suscipit. Fusce nec tellus sapien.</p>
            <p>Etiam varius lacinia nulla eget venenatis. Morbi ac dolor sed erat viverra vehicula. Vestibulum ac turpis tortor. Duis accumsan gravida justo sit amet rutrum. Ut ullamcorper mauris sed vulputate congue. Phasellus scelerisque arcu quis placerat ultricies. In ac enim semper, dapibus massa vel, bibendum justo. Cras dolor dolor, scelerisque ac dui nec, laoreet ultrices odio. Donec id tortor blandit, consectetur lectus sit amet, lobortis nibh.</p>
        </div>
    );
}

export default HomeMainBodyContent;
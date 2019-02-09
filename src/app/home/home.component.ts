import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor() {}

  public ngOnInit() {
    var lFollowX = 0,
      lFollowY = 0,
      x = 0,
      y = 0,
      friction = 1 / 30;

    function animate() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      var translate = "translate(" + x + "px, " + y + "px)";

      $(".content").css({
        "-webit-transform": translate,
        "-moz-transform": translate,
        transform: translate
      });

      window.requestAnimationFrame(animate);
    }

    $(".page").on("mousemove", function(e) {
      var lMouseX = Math.max(
        -100,
        Math.min(100, $(window).width() / 2 - e.clientX)
      );
      // console.log(lMouseX);
      var lMouseY = Math.max(
        -100,
        Math.min(100, $(window).height() / 2 - e.clientY)
      );
      lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
      lFollowY = (20 * lMouseY) / 100;
    });

    $(".page").on("mouseleave", function(e) {
      lFollowX = 0;
      lFollowY = 0;
    });

    animate();
  }
}

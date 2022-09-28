import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { GlobalService } from "src/app/services/global.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  posts: any = [];
  postsData: any = [];
  loadingComp: boolean = true;
  searchedText: string = "";
  likedPosts: any;
  likedFlag: any;

  constructor(private global: GlobalService, private auth: AuthService) {
    this.auth.authMe().subscribe((res) => {
      this.likedPosts = res.likedPosts;
    });
  }

  ngOnInit(): void {
    this.global.getPosts().subscribe(
      (data) => {
        this.postsData = data;
        this.postsData = this.postsData.data;
        this.posts = this.postsData;
        this.postsData.forEach((element: any) => {
          element.flag = false;
          this.determineLikedPosts(element);
        });
       
      },
      (err) => {
        console.log(err);
      },
      () => {
        this.loadingComp = false;
      }
    );
  }

  searchBlog(args?: string) {
    if (args) {
      this.posts = this.postsData.filter((pos: any) => pos.category == args);
      return this.posts;
    } else if (this.searchedText != "") {
      this.posts = this.postsData.filter((pos: any) =>
        pos.title.includes(this.searchedText)
      );
      return this.posts;
    } else {
      this.posts = this.postsData;
      return this.posts;
    }
  }

  likePost(id: any, i: any, ev: any) {
    this.auth.toogleLike(id).subscribe((res) => {
      if (res.message == "liked") {
        this.posts[i].likes.length += 1;
        ev.target.style.color = "red";
      } else {
        this.posts[i].likes.length -= 1;
        ev.target.style.color = "black";
      }
    });
  }

  determineLikedPosts(element: any) {
    for (let i = 0; i < this.likedPosts?.length; i++) {
      if (this.likedPosts[i].postId == element._id) {
        element.flag = true;
        break;
      } else {
        element.flag = false;
        break;
      }
    }
  }
}

'use strict';

{
  // オブジェクト配列の定義
  class Post {
    constructor(text){
      this.text = text;
      this.likeCount = 0;
    }
    // showメソッド
    show() {
      console.log(`${this.text} - ${this.likeCount}いいね`);
    }

    // likeメソッド
    like(){
      this.likeCount++;
      this.show();
    }

  }
  const posts = [
    new Post('JavaScriptの勉強中'),
    new Post('プログラミング楽しい！'),

  ];


  // オブジェクト配列の数を取得
  const num = posts.length;
  // 要素を取り出す
  for(let i=0;i<num;i++){
    posts[i].like();
  }
}

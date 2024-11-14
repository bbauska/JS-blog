const blogPosts = [
  {
    title: "First Blog Post",
    date: "November 13, 2024",
    content: "This is the content of my first blog post. Excited to share my journey!"
  },
  {
    title: "Learning JavaScript",
    date: "November 14, 2024",
    content: "JavaScript is an amazing language for web development. I'm enjoying it!"
  }
];

const blogContainer = document.getElementById("blog-posts");

blogPosts.forEach(post => {
  const article = document.createElement("article");
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p><small>${post.date}</small></p>
    <p>${post.content}</p>
    <hr>
  `;
  blogContainer.appendChild(article);
});

document.getElementById("comment-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const comment = document.getElementById("comment").value;
  const commentDiv = document.getElementById("comments");

  const newComment = document.createElement("p");
  newComment.innerHTML = `<strong>${name}:</strong> ${comment}`;
  commentDiv.appendChild(newComment);

  // Clear the form
  document.getElementById("name").value = "";
  document.getElementById("comment").value = "";
});

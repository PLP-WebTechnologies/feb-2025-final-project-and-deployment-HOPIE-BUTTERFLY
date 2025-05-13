function openForm() {
    document.getElementById('blogModal').style.display = 'flex';
  }

  window.onclick = function(event) {
    const modal = document.getElementById('blogModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  }

  function submitBlog() {
    const title = document.getElementById('blogTitle').value;
    const category = document.getElementById('blogCategory').value;
    const content = document.getElementById('blogContent').value;

    if (title && category && content) {
      document.getElementById('blogModal').style.display = 'none';
      document.getElementById('confirmationMessage').style.display = 'block';

      console.log("Blog Submitted:", { title, category, content });

      document.getElementById('blogTitle').value = "";
      document.getElementById('blogCategory').value = "";
      document.getElementById('blogContent').value = "";

      setTimeout(() => {
        document.getElementById('confirmationMessage').style.display = 'none';
      }, 5000);
    } else {
      alert("Please fill in all fields.");
    }
  }
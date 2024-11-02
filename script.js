<script>
    document.getElementById('pinned-trigger').addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('pinned-modal').classList.add('active');
    });

    document.querySelector('.close-modal').addEventListener('click', function() {
        document.getElementById('pinned-modal').classList.remove('active');
    });

    // Close modal when clicking outside
    document.getElementById('pinned-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });

    // Close modal with escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.getElementById('pinned-modal').classList.remove('active');
        }
    });
</script> 
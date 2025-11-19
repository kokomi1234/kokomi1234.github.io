// 文章页面JavaScript

// 代码复制功能
function copyCode(button) {
    const codeBlock = button.closest('.code-block');
    const code = codeBlock.querySelector('code').textContent;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> 已复制';
        button.style.background = 'var(--success-color)';
        button.style.color = 'white';
        
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('复制失败:', err);
    });
}

// 目录激活状态
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');
    const tocItems = document.querySelectorAll('.toc-item');
    
    if (sections.length > 0 && tocItems.length > 0) {
        const observerOptions = {
            threshold: 0.5,
            rootMargin: '-100px 0px -66%'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    tocItems.forEach(item => {
                        item.classList.remove('active');
                        if (item.getAttribute('href') === `#${id}`) {
                            item.classList.add('active');
                        }
                    });
                }
            });
        }, observerOptions);
        
        sections.forEach(section => {
            if (section.id) {
                observer.observe(section);
            }
        });
    }
});

// 点赞功能
const likeBtn = document.querySelector('.like-btn');
if (likeBtn) {
    let liked = localStorage.getItem('article-liked') === 'true';
    
    if (liked) {
        likeBtn.classList.add('liked');
        likeBtn.querySelector('i').classList.remove('far');
        likeBtn.querySelector('i').classList.add('fas');
    }
    
    likeBtn.addEventListener('click', () => {
        liked = !liked;
        localStorage.setItem('article-liked', liked);
        
        if (liked) {
            likeBtn.classList.add('liked');
            likeBtn.querySelector('i').classList.remove('far');
            likeBtn.querySelector('i').classList.add('fas');
            likeBtn.style.color = '#ef4444';
        } else {
            likeBtn.classList.remove('liked');
            likeBtn.querySelector('i').classList.remove('fas');
            likeBtn.querySelector('i').classList.add('far');
            likeBtn.style.color = '';
        }
    });
}

// 收藏功能
const bookmarkBtn = document.querySelector('.bookmark-btn');
if (bookmarkBtn) {
    let bookmarked = localStorage.getItem('article-bookmarked') === 'true';
    
    if (bookmarked) {
        bookmarkBtn.classList.add('bookmarked');
        bookmarkBtn.querySelector('i').classList.remove('far');
        bookmarkBtn.querySelector('i').classList.add('fas');
    }
    
    bookmarkBtn.addEventListener('click', () => {
        bookmarked = !bookmarked;
        localStorage.setItem('article-bookmarked', bookmarked);
        
        if (bookmarked) {
            bookmarkBtn.classList.add('bookmarked');
            bookmarkBtn.querySelector('i').classList.remove('far');
            bookmarkBtn.querySelector('i').classList.add('fas');
            bookmarkBtn.style.color = '#f59e0b';
        } else {
            bookmarkBtn.classList.remove('bookmarked');
            bookmarkBtn.querySelector('i').classList.remove('fas');
            bookmarkBtn.querySelector('i').classList.add('far');
            bookmarkBtn.style.color = '';
        }
    });
}

// 分享功能
const shareBtn = document.querySelector('.share-btn');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        if (navigator.share) {
            navigator.share({
                title: document.title,
                text: document.querySelector('meta[name="description"]').content,
                url: window.location.href
            }).catch(err => console.log('分享失败:', err));
        } else {
            // 复制链接
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('链接已复制到剪贴板！');
            });
        }
    });
}

// 评论点赞
document.querySelectorAll('.comment-btn').forEach(btn => {
    if (btn.textContent.includes('点赞')) {
        btn.addEventListener('click', () => {
            const icon = btn.querySelector('i');
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                btn.style.color = 'var(--primary-color)';
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                btn.style.color = '';
            }
        });
    }
});

// 评论表单提交
const commentForm = document.querySelector('.comment-form');
if (commentForm) {
    const submitBtn = commentForm.querySelector('.btn');
    const textarea = commentForm.querySelector('textarea');
    
    if (submitBtn && textarea) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const content = textarea.value.trim();
            
            if (content) {
                alert('评论已提交！感谢你的参与。');
                textarea.value = '';
            } else {
                alert('请输入评论内容');
            }
        });
    }
}

// 阅读进度条
const createProgressBar = () => {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
        z-index: 9999;
        transition: width 0.2s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + '%';
    });
};

createProgressBar();

// 图片点击放大
document.querySelectorAll('.article-body img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            cursor: pointer;
        `;
        
        const largeImg = document.createElement('img');
        largeImg.src = img.src;
        largeImg.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            object-fit: contain;
        `;
        
        overlay.appendChild(largeImg);
        document.body.appendChild(overlay);
        
        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});

console.log('%c文章页面已加载', 'color: #6366f1; font-size: 14px; font-weight: bold;');

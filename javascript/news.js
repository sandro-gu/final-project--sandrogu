// RSS Feed URL - Using rss2json API to parse your RSS.app feed
const RSS_FEED_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Frss.app%2Ffeeds%2FRWEfliRQZlPRPIJi.xml';

// Function to fetch RSS feed data
async function fetchRSSFeed() {
    try {
        const response = await fetch(RSS_FEED_URL);
        const data = await response.json();
        
        if (data.status === 'ok' && data.items && data.items.length > 0) {
            return data.items;
        } else {
            console.log('RSS feed returned no items, using mock data');
            return mockNews;
        }
    } catch (error) {
        console.log('RSS feed fetch failed, using mock data:', error);
        return mockNews;
    }
}

// Function to extract image URL from RSS item
function getImageUrl(item, index) {
    if (item.enclosure && item.enclosure.link) return item.enclosure.link;
    if (item.thumbnail) return item.thumbnail;
    if (item.image) return item.image;
    return `https://picsum.photos/400/200?random=${index + 1}`;
}

// Function to truncate text
function truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
}

// Function to clean HTML from text
function cleanText(text) {
    return text.replace(/<[^>]*>/g, '').trim();
}

// Function to get domain from URL
function getDomain(url) {
    try {
        return new URL(url).hostname;
    } catch {
        return 'Unknown Source';
    }
}

// Main function to load news
async function loadNews() {
    const newsSections = document.querySelectorAll('.news-section');
    const loading = document.getElementById('loading');
    
    try {
        const newsData = await fetchRSSFeed();
        
        newsSections.forEach((section, index) => {
            if (index < newsData.length) {
                const item = newsData[index];
                
                // Update headline
                const headline = section.querySelector('.headline p');
                headline.textContent = truncateText(item.title || 'No title available', 100);
                
                // Update image
                const imageDiv = section.querySelector('.news-image');
                const imageUrl = getImageUrl(item, index);
                imageDiv.style.backgroundImage = `url(${imageUrl})`;
                
                // Update summary
                const summary = section.querySelector('.news-summary .top-text');
                const cleanDescription = cleanText(item.description || item.content || 'No description available');
                summary.textContent = truncateText(cleanDescription, 200);
                
                // Update site link
                const siteLink = section.querySelector('.news-summary .bottom-text');
                siteLink.textContent = getDomain(item.link || 'https://example.com');
                siteLink.href = item.link || '#';
                
                // Make the entire section clickable
                section.style.cursor = 'pointer';
                section.onclick = () => {
                    if (item.link) {
                        window.open(item.link, '_blank');
                    }
                };
            }
        });
        
        
    } catch (error) {
        console.error('Error loading news:', error);
        loading.innerHTML = '<div class="error">Error loading news. Please try again later.</div>';
    }
}

// Load news when page loads
document.addEventListener('DOMContentLoaded', loadNews);

// Refresh news every 30 minutes
setInterval(loadNews, 30 * 60 * 1000);
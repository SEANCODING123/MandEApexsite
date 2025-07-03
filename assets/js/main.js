// Main JavaScript for Apex M&E Dashboard

// Load statistics data and initialize the dashboard
document.addEventListener('DOMContentLoaded', function() {
    loadStatistics();
    initializeAnimations();
    initializeProgressBars();
    initializeNavigation();
    initializePDFDownload();
});

// Initialize PDF download functionality
function initializePDFDownload() {
    const downloadBtn = document.getElementById('downloadPDF');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', generatePDF);
    }
}

// Generate PDF report
async function generatePDF() {
    const downloadBtn = document.getElementById('downloadPDF');
    
    try {
        // Show loading state
        downloadBtn.innerHTML = `
            <svg class="download-icon spinning" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 12l-4-4-4 4"/>
            </svg>
            Generating PDF...
        `;
        downloadBtn.disabled = true;
        
        // Get current date for filename
        const currentDate = new Date().toISOString().split('T')[0];
        const filename = `Apex-ME-Report-${currentDate}.pdf`;
        
        // Create PDF using jsPDF
        const { jsPDF } = window.jspdf;
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        // Add header
        pdf.setFontSize(20);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Apex M&E Report', 20, 25);
        
        pdf.setFontSize(12);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`Generated: ${new Date().toLocaleDateString()}`, 20, 35);
        
        // Add overview section
        let yPosition = 50;
        
        // Section: Overview
        pdf.setFontSize(16);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Overview', 20, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        
        // A2 LMS Development
        pdf.text('A2 LMS Development:', 20, yPosition);
        yPosition += 6;
        pdf.text('• 3,700 of 5,000 lessons developed (74%)', 25, yPosition);
        yPosition += 6;
        pdf.text('• 1,300 lessons remaining', 25, yPosition);
        yPosition += 15;
        
        // Apex Stellenbosch
        pdf.text('Apex Stellenbosch School Statistics:', 20, yPosition);
        yPosition += 6;
        pdf.text('• Total Learners: 326', 25, yPosition);
        yPosition += 6;
        pdf.text('• Staff Members: 12', 25, yPosition);
        yPosition += 6;
        pdf.text('• Learner Absenteeism: 2.2%', 25, yPosition);
        yPosition += 6;
        pdf.text('• Staff Absenteeism: 1.7%', 25, yPosition);
        yPosition += 6;
        pdf.text('• Learner Attendance Rate: 97.8%', 25, yPosition);
        yPosition += 6;
        pdf.text('• Staff Attendance Rate: 98.3%', 25, yPosition);
        yPosition += 15;
        
        // Financial Information
        pdf.setFontSize(16);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Financial Information', 20, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        pdf.text('• Current School Fees: R620 per month', 25, yPosition);
        yPosition += 6;
        pdf.text('• Forecasted Cost per Learner: R17,200 per year', 25, yPosition);
        yPosition += 15;
        
        // Performance Metrics
        pdf.setFontSize(16);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Performance Metrics', 20, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        pdf.text('LMS Development Progress:', 20, yPosition);
        yPosition += 6;
        pdf.text('• Current Progress: 74% complete', 25, yPosition);
        yPosition += 6;
        pdf.text('• Lessons Developed: 3,700', 25, yPosition);
        yPosition += 6;
        pdf.text('• Total Goal: 5,000 lessons', 25, yPosition);
        yPosition += 6;
        pdf.text('• Remaining: 1,300 lessons', 25, yPosition);
        yPosition += 15;
        
        pdf.text('Attendance Analysis:', 20, yPosition);
        yPosition += 6;
        pdf.text('• Learner Attendance: 97.8% (Target: >95%)', 25, yPosition);
        yPosition += 6;
        pdf.text('• Staff Attendance: 98.3% (Target: >98%)', 25, yPosition);
        yPosition += 15;
        
        // Add new page for detailed analysis
        pdf.addPage();
        yPosition = 25;
        
        pdf.setFontSize(16);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Detailed Analysis', 20, yPosition);
        yPosition += 15;
        
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        pdf.text('Grade Performance Trends:', 20, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.text('Grade 8 Term 2 Performance:', 25, yPosition);
        yPosition += 6;
        pdf.text('• English & Mathematics: See infographic for detailed trends', 30, yPosition);
        yPosition += 6;
        pdf.text('• Home Language: See infographic for detailed trends', 30, yPosition);
        yPosition += 6;
        pdf.text('• Life Skills: See infographic for detailed trends', 30, yPosition);
        yPosition += 10;
        
        pdf.text('Grade 9 Term 2 Performance:', 25, yPosition);
        yPosition += 6;
        pdf.text('• English & Mathematics: See infographic for detailed trends', 30, yPosition);
        yPosition += 6;
        pdf.text('• Home Language: See infographic for detailed trends', 30, yPosition);
        yPosition += 6;
        pdf.text('• Life Skills: See infographic for detailed trends', 30, yPosition);
        yPosition += 15;
        
        // Recommendations
        pdf.setFontSize(12);
        pdf.setTextColor(53, 108, 132);
        pdf.text('Recommendations:', 20, yPosition);
        yPosition += 10;
        
        pdf.setFontSize(10);
        pdf.setTextColor(0, 0, 0);
        pdf.text('1. Continue A2 LMS development to reach the 5,000 lesson target', 25, yPosition);
        yPosition += 6;
        pdf.text('2. Maintain current attendance rates above target thresholds', 25, yPosition);
        yPosition += 6;
        pdf.text('3. Monitor grade performance trends for continuous improvement', 25, yPosition);
        yPosition += 6;
        pdf.text('4. Review financial projections quarterly', 25, yPosition);
        yPosition += 15;
        
        // Footer
        pdf.setFontSize(8);
        pdf.setTextColor(150, 150, 150);
        pdf.text('© 2024 Apex Schools - Monitoring & Evaluation Report', 20, 280);
        pdf.text(`Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`, 20, 285);
        
        // Save the PDF
        pdf.save(filename);
        
        // Show success message
        showNotification('PDF report downloaded successfully!', 'success');
        
    } catch (error) {
        console.error('Error generating PDF:', error);
        showNotification('Error generating PDF. Please try again.', 'error');
    } finally {
        // Reset button
        downloadBtn.innerHTML = `
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF Report
        `;
        downloadBtn.disabled = false;
    }
}

// Show notification
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Load statistics data
async function loadStatistics() {
    try {
        const response = await fetch('data/statistics.json');
        const data = await response.json();
        
        // Update statistics in the UI
        updateStatistics(data);
    } catch (error) {
        console.error('Error loading statistics:', error);
    }
}

// Update statistics in the UI
function updateStatistics(data) {
    // Update A2 LMS progress
    const lmsProgress = (data.A2.lms_lessons.developed / data.A2.lms_lessons.total_goal) * 100;
    updateProgressBar('.progress-fill', lmsProgress);
    
    // Update circle progress
    updateCircleProgress('.circle-progress', lmsProgress);
    
    // Update attendance bars
    const learnerAttendance = 100 - parseFloat(data.apex_stellenbosch.learners.absenteeism_end_second_term);
    const staffAttendance = 100 - parseFloat(data.apex_stellenbosch.staff.absenteeism_end_second_term);
    
    updateAttendanceBar('[data-attendance="97.8"]', learnerAttendance);
    updateAttendanceBar('[data-attendance="98.3"]', staffAttendance);
    
    // Update text values
    updateTextValues(data);
}

// Update progress bars
function updateProgressBar(selector, percentage) {
    const progressBar = document.querySelector(selector);
    if (progressBar) {
        progressBar.style.width = percentage + '%';
        progressBar.setAttribute('data-progress', percentage);
    }
}

// Update circle progress
function updateCircleProgress(selector, percentage) {
    const circle = document.querySelector(selector);
    if (circle) {
        const degrees = (percentage / 100) * 360;
        circle.style.background = `conic-gradient(#356c84 0deg ${degrees}deg, #e9ecef ${degrees}deg 360deg)`;
    }
}

// Update attendance bars
function updateAttendanceBar(selector, percentage) {
    const bar = document.querySelector(selector);
    if (bar) {
        bar.style.width = percentage + '%';
        bar.setAttribute('data-attendance', percentage);
    }
    
    // Update percentage text
    const percentageText = bar.closest('.attendance-item').querySelector('.attendance-percentage');
    if (percentageText) {
        percentageText.textContent = percentage.toFixed(1) + '%';
    }
}

// Update text values
function updateTextValues(data) {
    // Update progress text
    const progressText = document.querySelector('.progress-text');
    if (progressText) {
        progressText.textContent = `${data.A2.lms_lessons.developed.toLocaleString()} of ${data.A2.lms_lessons.total_goal.toLocaleString()} lessons developed (${Math.round((data.A2.lms_lessons.developed / data.A2.lms_lessons.total_goal) * 100)}%)`;
    }
    
    // Update progress details
    const progressDetails = document.querySelector('.progress-details');
    if (progressDetails) {
        const remaining = data.A2.lms_lessons.total_goal - data.A2.lms_lessons.developed;
        progressDetails.innerHTML = `
            <p><strong>${data.A2.lms_lessons.developed.toLocaleString()}</strong> lessons developed</p>
            <p><strong>${remaining.toLocaleString()}</strong> lessons remaining</p>
            <p><strong>${data.A2.lms_lessons.total_goal.toLocaleString()}</strong> total goal</p>
        `;
    }
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize progress bars with animation
function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill, .attendance-fill');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width || bar.getAttribute('data-progress') + '%' || bar.getAttribute('data-attendance') + '%';
        bar.style.width = '0%';
        
        // Animate to target width
        setTimeout(() => {
            bar.style.transition = 'width 2s ease';
            bar.style.width = targetWidth;
        }, 500);
    });
}

// Initialize navigation
function initializeNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active navigation item
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Add hover effects for cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.overview-card, .school-card, .stats-card, .report-item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add active state to navigation
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #fcbf16 !important;
        font-weight: 600;
    }
`;
document.head.appendChild(style);

// Data refresh function
function refreshData() {
    loadStatistics();
    console.log('Data refreshed');
}

// Auto-refresh data every 5 minutes
setInterval(refreshData, 300000);

// Export functions for external use
window.ApexDashboard = {
    loadStatistics,
    updateStatistics,
    refreshData,
    generatePDF
};
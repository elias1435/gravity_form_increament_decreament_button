// the field class is "ginput_container_number" 
jQuery(document).ready(function($) {
    $('.ginput_container_number').each(function() {
        var $container = $(this);
        var $input = $container.find('input[type="number"]');
        var currentValue = parseInt($input.val()) || 0; // Initialize with 0 if empty

        // Create a container div
        var $customContainer = $('<div class="ginput_container ginput_container_text"></div>');

        // Append plus and minus buttons to the custom container
        $customContainer.append('<button class="minus-btn qty-btn">-</button>');
        $customContainer.append('<span class="number-display">' + currentValue + '</span>');
        $customContainer.append('<button class="plus-btn qty-btn">+</button>');

        // Append the custom container to the original container
        $container.append($customContainer);

        // Plus button click event
        $container.on('click', '.plus-btn', function(e) {
            e.preventDefault();
            currentValue = parseInt($input.val()) || 0; // Update current value
            if (currentValue < 5) { // Limit to increment up to 5
                $input.val(currentValue + 1).trigger('change');
                $container.find('.number-display').text(currentValue + 1);
            }
        });

        // Minus button click event
        $container.on('click', '.minus-btn', function(e) {
            e.preventDefault();
            currentValue = parseInt($input.val()) || 0; // Update current value
            if (currentValue > 0) {
                $input.val(currentValue - 1).trigger('change');
                $container.find('.number-display').text(currentValue - 1);
            }
        });
    });
});

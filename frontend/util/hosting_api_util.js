export const fetchHostings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/hostings'
    })
);


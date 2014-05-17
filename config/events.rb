WebsocketRails::EventMap.describe do
    # using a Hash to specify the target
    subscribe :create_event, 'sockets#create_from_socket'
end

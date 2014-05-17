class SocketsController <  WebsocketRails::BaseController
  def create_from_socket
    puts 'creted'
    post = Post.new message
    if post.save
      send_message :create_success, task, :namespace => :tasks
    else
      send_message :create_fail, task, :namespace => :tasks
    end
  end
end

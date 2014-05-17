class SocketsController <  WebsocketRails::BaseController
  def create_from_socket
    post = Post.new message
    if post.save
      trigger_success post: post
    else
      trigger_failure post: post.errors
    end
  end
end

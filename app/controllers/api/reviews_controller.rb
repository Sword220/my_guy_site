class Api::ReviewsController < ApplicationController
 
  def index
    render json: Review.all
  end

  def create
    review = Review.new(params.require(:review).permit(:name, :body))
    if review.save
      render json: review
    else
      render json: review.errors
    end
  end

end
